#!/usr/bin/env node

/**
 * Security audit script for Gojupedia
 * Checks for common security vulnerabilities and misconfigurations
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔒 Running Gojupedia Security Audit...\n');

// Audit results
const results = {
  passed: [],
  warnings: [],
  errors: [],
  info: []
};

function addResult(type, message, file = null) {
  const result = file ? `${message} (${file})` : message;
  results[type].push(result);
}

// 1. Check package vulnerabilities
console.log('1. Checking npm vulnerabilities...');
try {
  const auditOutput = execSync('npm audit --audit-level moderate', { encoding: 'utf8' });
  addResult('passed', 'npm audit passed - no moderate+ vulnerabilities found');
} catch (error) {
  const output = error.stdout || error.message;
  if (output.includes('vulnerabilities')) {
    addResult('errors', 'npm audit found vulnerabilities - run "npm audit fix"');
  } else {
    addResult('warnings', 'Could not run npm audit');
  }
}

// 2. Check for sensitive files
console.log('2. Checking for sensitive files...');
const sensitiveFiles = ['.env', '.env.local', '.env.production', 'config.json'];
const foundSensitiveFiles = sensitiveFiles.filter(file => fs.existsSync(file));

if (foundSensitiveFiles.length > 0) {
  foundSensitiveFiles.forEach(file => {
    addResult('warnings', `Sensitive file found: ${file} - ensure it's in .gitignore`);
  });
} else {
  addResult('passed', 'No sensitive files found in root directory');
}

// 3. Check .gitignore
console.log('3. Checking .gitignore...');
if (fs.existsSync('.gitignore')) {
  const gitignore = fs.readFileSync('.gitignore', 'utf8');
  const requiredIgnores = ['.env', '.env.local', 'node_modules', 'dist'];
  const missing = requiredIgnores.filter(pattern => !gitignore.includes(pattern));
  
  if (missing.length > 0) {
    addResult('warnings', `Missing .gitignore patterns: ${missing.join(', ')}`);
  } else {
    addResult('passed', '.gitignore contains required security patterns');
  }
} else {
  addResult('errors', '.gitignore file not found');
}

// 4. Check for hardcoded secrets
console.log('4. Checking for hardcoded secrets...');
const secretPatterns = [
  /api[_-]?key[s]?\s*[:=]\s*['"][^'"]+['"]/gi,
  /secret[s]?\s*[:=]\s*['"][^'"]+['"]/gi,
  /password[s]?\s*[:=]\s*['"][^'"]+['"]/gi,
  /token[s]?\s*[:=]\s*['"][^'"]+['"]/gi
];

function scanDirectory(dir, patterns) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  const issues = [];
  
  for (const file of files) {
    const filePath = path.join(dir, file.name);
    
    if (file.isDirectory() && !['node_modules', '.git', 'dist'].includes(file.name)) {
      issues.push(...scanDirectory(filePath, patterns));
    } else if (file.isFile() && file.name.match(/\.(js|ts|jsx|tsx|json)$/)) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        patterns.forEach(pattern => {
          const matches = content.match(pattern);
          if (matches) {
            issues.push({ file: filePath, matches });
          }
        });
      } catch (error) {
        // Skip files that can't be read
      }
    }
  }
  
  return issues;
}

const secretIssues = scanDirectory('./src', secretPatterns);
if (secretIssues.length > 0) {
  secretIssues.forEach(issue => {
    addResult('warnings', `Potential hardcoded secret found: ${issue.matches[0]}`, issue.file);
  });
} else {
  addResult('passed', 'No hardcoded secrets detected in source code');
}

// 5. Check CSP in index.html
console.log('5. Checking Content Security Policy...');
if (fs.existsSync('index.html')) {
  const html = fs.readFileSync('index.html', 'utf8');
  if (html.includes('Content-Security-Policy')) {
    addResult('passed', 'Content Security Policy found in index.html');
  } else {
    addResult('warnings', 'No Content Security Policy found in index.html');
  }
} else {
  addResult('errors', 'index.html not found');
}

// 6. Check security headers configuration
console.log('6. Checking security headers configuration...');
const configFiles = ['netlify.toml', 'vercel.json', '_headers'];
const hasSecurityConfig = configFiles.some(file => fs.existsSync(file));

if (hasSecurityConfig) {
  addResult('passed', 'Security headers configuration found');
} else {
  addResult('warnings', 'No security headers configuration found (netlify.toml, vercel.json, or _headers)');
}

// 7. Check for security utilities
console.log('7. Checking security utilities...');
const securityFiles = ['src/utils/security.ts', 'src/utils/secureStorage.ts'];
const hasSecurityUtils = securityFiles.every(file => fs.existsSync(file));

if (hasSecurityUtils) {
  addResult('passed', 'Security utility files found');
} else {
  addResult('warnings', 'Security utility files missing');
}

// 8. Check for localhost/development URLs in production code
console.log('8. Checking for development URLs...');
const devUrls = scanDirectory('./src', [
  /localhost:[0-9]+/gi,
  /127\.0\.0\.1:[0-9]+/gi,
  /http:\/\/(?!localhost)/gi
]);

if (devUrls.length > 0) {
  devUrls.forEach(issue => {
    addResult('warnings', `Development URL found: ${issue.matches[0]}`, issue.file);
  });
} else {
  addResult('passed', 'No development URLs found in source code');
}

// 9. Check package.json for security-related scripts
console.log('9. Checking package.json security scripts...');
if (fs.existsSync('package.json')) {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const hasAuditScript = pkg.scripts && (pkg.scripts.audit || pkg.scripts['security-audit']);
  
  if (hasAuditScript) {
    addResult('passed', 'Security audit script found in package.json');
  } else {
    addResult('info', 'Consider adding a security audit script to package.json');
  }
} else {
  addResult('errors', 'package.json not found');
}

// 10. Check for console.log statements that might leak info
console.log('10. Checking for potential information leakage...');
const consoleIssues = scanDirectory('./src', [
  /console\.(log|debug|info)\([^)]*(?:password|secret|key|token)/gi
]);

if (consoleIssues.length > 0) {
  consoleIssues.forEach(issue => {
    addResult('warnings', `Potential information leakage in console: ${issue.matches[0]}`, issue.file);
  });
} else {
  addResult('passed', 'No sensitive information in console statements detected');
}

// Display results
console.log('\n📊 Security Audit Results:');
console.log('========================\n');

if (results.errors.length > 0) {
  console.log('❌ ERRORS:');
  results.errors.forEach(error => console.log(`  • ${error}`));
  console.log('');
}

if (results.warnings.length > 0) {
  console.log('⚠️  WARNINGS:');
  results.warnings.forEach(warning => console.log(`  • ${warning}`));
  console.log('');
}

if (results.passed.length > 0) {
  console.log('✅ PASSED:');
  results.passed.forEach(pass => console.log(`  • ${pass}`));
  console.log('');
}

if (results.info.length > 0) {
  console.log('ℹ️  INFO:');
  results.info.forEach(info => console.log(`  • ${info}`));
  console.log('');
}

// Summary
const total = results.errors.length + results.warnings.length + results.passed.length;
const score = Math.round((results.passed.length / total) * 100);

console.log(`📈 Security Score: ${score}% (${results.passed.length}/${total} checks passed)`);

if (results.errors.length > 0) {
  console.log('\n🚨 CRITICAL: Please fix all errors before deployment!');
  process.exit(1);
} else if (results.warnings.length > 0) {
  console.log('\n⚠️  WARNING: Consider addressing warnings for better security.');
  process.exit(0);
} else {
  console.log('\n🎉 All security checks passed!');
  process.exit(0);
} 