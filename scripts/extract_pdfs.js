
import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');
import pdf2img from 'pdf-img-convert';
import Tesseract from 'tesseract.js';

const inputDir = path.join(process.cwd(), 'docs', 'Hojo Undo');
const outputImgDir = path.join(process.cwd(), 'public', 'images', 'hojo-undo');
const outputTextFile = path.join(process.cwd(), 'extracted_hojo_undo.json');

// Ensure output directories exist
if (!fs.existsSync(outputImgDir)) {
    fs.mkdirSync(outputImgDir, { recursive: true });
}

async function extractFromPdf(filePath) {
    const dataBuffer = fs.readFileSync(filePath);
    const fileName = path.basename(filePath, '.pdf');

    console.log(`Processing ${fileName}...`);

    let textContent = '';
    const imagePaths = [];

    // 1. Try generic text extraction first (fastest)
    try {
        const data = await pdf(dataBuffer);
        textContent = data.text.trim();
    } catch (err) {
        console.error(`Error parsing text from ${fileName}:`, err);
    }

    // 2. OCR Fallback
    // If textContent is very short or empty, assume scanned and use OCR
    if (textContent.length < 50) {
        console.log(`  - No valid text found. Attempting OCR...`);
        try {
            const imageOutputFolder = path.join(outputImgDir, fileName);
            if (!fs.existsSync(imageOutputFolder)) {
                fs.mkdirSync(imageOutputFolder, { recursive: true });
            }

            // Convert PDF to images
            console.log(`    - Converting PDF to images...`);
            const images = await pdf2img.convert(filePath);

            for (let i = 0; i < images.length; i++) {
                const imgPath = path.join(imageOutputFolder, `page_${i + 1}.png`);
                // pdf-img-convert returns buffers (check docs/implementation, usually UInt8Array)
                // We write it to file
                fs.writeFileSync(imgPath, images[i]);
                imagePaths.push(imgPath);

                // Run OCR on the image
                console.log(`    - OCR on page ${i + 1}...`);
                const { data: { text } } = await Tesseract.recognize(imgPath, 'eng', {
                    logger: m => { } // console.log(m)
                });
                textContent += `\n[Page ${i + 1}]\n${text}`;
            }
        } catch (err) {
            console.error(`  - Error during OCR/Image conversion for ${fileName}:`, err);
        }
    } else {
        console.log(`  - Text found (${textContent.length} chars). Skipping OCR.`);
    }

    return {
        fileName,
        text: textContent,
        images: imagePaths
    };
}

async function main() {
    if (!fs.existsSync(inputDir)) {
        console.error(`Input directory not found: ${inputDir}`);
        return;
    }

    const files = fs.readdirSync(inputDir).filter(file => file.toLowerCase().endsWith('.pdf'));
    const results = {};

    for (const file of files) {
        const filePath = path.join(inputDir, file);
        const result = await extractFromPdf(filePath);
        results[result.fileName] = result;
    }

    fs.writeFileSync(outputTextFile, JSON.stringify(results, null, 2));
    console.log(`Extraction complete. Data saved to ${outputTextFile}`);
}

main().catch(console.error);
