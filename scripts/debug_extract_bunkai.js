import fs from 'fs';
import pdf from 'pdf-parse';

const filePath = 'c:\\Users\\rudiv\\Documents\\GitHub\\Gojupedia\\docs\\Bunkai boekje NL 20251115 tm Sanseru - v1.0 in concept.pdf';

async function extract() {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);
    console.log('--- START OF TEXT ---');
    console.log(data.text);
    console.log('--- END OF TEXT ---');
}

extract().catch(console.error);
