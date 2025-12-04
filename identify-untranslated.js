import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const localesDir = path.join(__dirname, 'src', 'i18n', 'locales');
const languages = ['da', 'de', 'es', 'fr', 'it', 'nl', 'pt'];

function readJsonFile(filePath) {
    try {
        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(content);
        }
        return {};
    } catch (error) {
        return {};
    }
}

function getFiles(dir) {
    try {
        return fs.readdirSync(dir);
    } catch (error) {
        return [];
    }
}

function findUntranslated(obj, enObj, prefix = '', results = []) {
    for (const key in obj) {
        const currentPath = prefix ? `${prefix}.${key}` : key;

        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
            if (enObj && enObj[key]) {
                findUntranslated(obj[key], enObj[key], currentPath, results);
            }
        } else {
            // Check if value matches English value (and is not a number or short string that might be coincidentally same)
            if (enObj && obj[key] === enObj[key]) {
                // Filter out likely proper nouns or universal terms if needed, but for now include all
                // Maybe ignore very short strings?
                if (typeof obj[key] === 'string' && obj[key].length > 1) {
                    results.push({ key: currentPath, value: obj[key] });
                }
            }
        }
    }
    return results;
}

const enDir = path.join(localesDir, 'en');
const enFiles = getFiles(enDir);

const report = {};

languages.forEach(lang => {
    report[lang] = {};
    const langDir = path.join(localesDir, lang);

    enFiles.forEach(file => {
        const enFilePath = path.join(enDir, file);
        const langFilePath = path.join(langDir, file);

        if (fs.statSync(enFilePath).isDirectory()) {
            // Handle subdirectories (kata)
            const subFiles = getFiles(enFilePath);
            subFiles.forEach(subFile => {
                if (subFile.endsWith('.json')) {
                    const enContent = readJsonFile(path.join(enFilePath, subFile));
                    const langContent = readJsonFile(path.join(langDir, file, subFile));
                    const untranslated = findUntranslated(langContent, enContent);
                    if (untranslated.length > 0) {
                        report[lang][`${file}/${subFile}`] = untranslated.length;
                    }
                }
            });
        } else if (file.endsWith('.json')) {
            const enContent = readJsonFile(enFilePath);
            const langContent = readJsonFile(langFilePath);
            const untranslated = findUntranslated(langContent, enContent);
            if (untranslated.length > 0) {
                report[lang][file] = untranslated.length;
            }
        }
    });
});

console.log(JSON.stringify(report, null, 2));
