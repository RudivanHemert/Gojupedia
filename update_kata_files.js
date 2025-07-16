import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Languages to update
const languages = ['en', 'de', 'es', 'fr', 'it', 'nl'];

// Kata files to update (all json files in each kata dir)
const kataDir = path.join(__dirname, 'src', 'i18n', 'locales');

languages.forEach(lang => {
  const dir = path.join(kataDir, lang, 'kata');
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
  files.forEach(file => {
    const filePath = path.join(dir, file);
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(content);
      let changed = false;
      if (data.origin && data.origin.content) {
        if (data.history !== data.origin.content) {
          data.history = data.origin.content;
          changed = true;
        }
      }
      if (data.modernPractice && data.modernPractice.content) {
        if (data.culturalSignificance !== data.modernPractice.content) {
          data.culturalSignificance = data.modernPractice.content;
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        console.log('Updated', filePath);
      }
    } catch (e) {
      console.error('Error updating', filePath, e.message);
    }
  });
});
console.log('Done!'); 