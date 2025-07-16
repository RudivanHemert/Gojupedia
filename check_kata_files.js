import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Languages to check
const languages = ['en', 'de', 'es', 'fr', 'it', 'nl'];

// Function to check a kata file
function checkKataFile(lang, kataFile) {
  const filePath = path.join(__dirname, 'src', 'i18n', 'locales', lang, 'kata', kataFile);
  
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return { missing: ['file_not_found'] };
  }

  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    
    const missing = [];
    
    if (!data.history) {
      missing.push('history');
    }
    
    if (!data.culturalSignificance) {
      missing.push('culturalSignificance');
    }
    
    if (missing.length > 0) {
      console.log(`❌ ${filePath} - Missing: ${missing.join(', ')}`);
      return { missing, filePath };
    } else {
      console.log(`✅ ${filePath} - Complete`);
      return { missing: [] };
    }
    
  } catch (error) {
    console.error(`Error checking ${filePath}:`, error.message);
    return { missing: ['parse_error'] };
  }
}

// Check all files
const kataDir = path.join(__dirname, 'src', 'i18n', 'locales');
let totalFiles = 0;
let missingFiles = 0;

languages.forEach(lang => {
  const dir = path.join(kataDir, lang, 'kata');
  if (!fs.existsSync(dir)) {
    console.log(`Directory not found: ${dir}`);
    return;
  }
  
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
  files.forEach(file => {
    totalFiles++;
    const result = checkKataFile(lang, file);
    if (result.missing.length > 0) {
      missingFiles++;
    }
  });
});

console.log(`\n📊 Summary:`);
console.log(`Total files checked: ${totalFiles}`);
console.log(`Files with missing fields: ${missingFiles}`);
console.log(`Files complete: ${totalFiles - missingFiles}`);

if (missingFiles === 0) {
  console.log(`\n🎉 All kata files are complete!`);
} else {
  console.log(`\n⚠️  ${missingFiles} files need attention.`);
} 