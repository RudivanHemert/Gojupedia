import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const localesDir = path.join(__dirname, 'src', 'i18n', 'locales');
const languages = ['da', 'de', 'es', 'fr', 'it', 'nl', 'pt']; // Target languages (excluding en)

function readJsonFile(filePath) {
    try {
        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(content);
        }
        return {};
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error.message);
        return {};
    }
}

function writeJsonFile(filePath, content) {
    try {
        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
        console.log(`Updated ${filePath}`);
    } catch (error) {
        console.error(`Error writing file ${filePath}:`, error.message);
    }
}

function getFiles(dir) {
    try {
        return fs.readdirSync(dir);
    } catch (error) {
        return [];
    }
}

// Recursive merge function that only adds missing keys
function mergeDeep(target, source) {
    if (typeof source !== 'object' || source === null) {
        return;
    }

    for (const key in source) {
        if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
            if (!target[key] || typeof target[key] !== 'object') {
                target[key] = {};
            }
            mergeDeep(target[key], source[key]);
        } else {
            if (target[key] === undefined) {
                target[key] = source[key]; // Use English value as fallback
            }
        }
    }
}

function syncTranslations() {
    const enDir = path.join(localesDir, 'en');
    const enFiles = getFiles(enDir);

    languages.forEach(lang => {
        console.log(`\nSyncing ${lang}...`);
        const langDir = path.join(localesDir, lang);

        // Process all files in the English directory
        enFiles.forEach(file => {
            const enFilePath = path.join(enDir, file);
            const langFilePath = path.join(langDir, file);
            const stat = fs.statSync(enFilePath);

            if (stat.isDirectory()) {
                // Handle subdirectories (like 'kata')
                const subFiles = getFiles(enFilePath);
                subFiles.forEach(subFile => {
                    const enSubPath = path.join(enFilePath, subFile);
                    const langSubPath = path.join(langDir, file, subFile);

                    if (subFile.endsWith('.json')) {
                        const enContent = readJsonFile(enSubPath);
                        const langContent = readJsonFile(langSubPath);

                        mergeDeep(langContent, enContent);
                        writeJsonFile(langSubPath, langContent);
                    }
                });
            } else if (file.endsWith('.json')) {
                const enContent = readJsonFile(enFilePath);
                const langContent = readJsonFile(langFilePath);

                mergeDeep(langContent, enContent);
                writeJsonFile(langFilePath, langContent);
            }
        });
    });
}

syncTranslations();
