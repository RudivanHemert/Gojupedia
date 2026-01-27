
import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');

const filePath = 'c:\\Users\\rudiv\\Documents\\GitHub\\Gojupedia\\docs\\Bunkai boekje NL 20251115 tm Sanseru - v1.0 in concept.pdf';
const outputTextFile = path.join(process.cwd(), 'extracted_bunkai.json');

async function extractFromPdf(filePath) {
    const dataBuffer = fs.readFileSync(filePath);
    const fileName = path.basename(filePath, '.pdf');

    console.log(`Processing ${fileName}...`);

    let textContent = '';

    try {
        const data = await pdf(dataBuffer);
        textContent = data.text.trim();
    } catch (err) {
        console.error(`Error parsing text from ${fileName}:`, err);
    }

    return {
        fileName,
        text: textContent
    };
}

async function main() {
    const result = await extractFromPdf(filePath);
    fs.writeFileSync(outputTextFile, JSON.stringify(result, null, 2));
    console.log(`Extraction complete. Data saved to ${outputTextFile}`);
}

main().catch(console.error);
