import PyPDF2
import sys
import subprocess
import os

def extract_pdf_text(pdf_path):
    try:
        reader = PyPDF2.PdfReader(pdf_path)
        all_text = ""
        for i, page in enumerate(reader.pages):
            text = page.extract_text()
            if text:
                all_text += f"\n--- PAGINA {i+1} ---\n" + text
        if all_text.strip():
            output_filename = pdf_path.replace('.pdf', '_extracted.txt')
            with open(output_filename, 'w', encoding='utf-8') as f:
                f.write(all_text)
            print(f"Tekst opgeslagen in {output_filename}")
            return True
        else:
            print("Geen tekst gevonden, probeer OCR...")
            return False
    except Exception as e:
        print(f"Fout bij het lezen van PDF: {e}")
        return False

def ocr_and_extract(pdf_path):
    ocr_pdf = pdf_path.replace('.pdf', '_ocr.pdf')
    txt_file = pdf_path.replace('.pdf', '_ocr_extracted.txt')
    # OCR uitvoeren
    subprocess.run(["ocrmypdf", pdf_path, ocr_pdf, "--force-ocr", "--output-type", "pdfa"], check=True)
    # Tekst extractie
    reader = PyPDF2.PdfReader(ocr_pdf)
    all_text = ""
    for i, page in enumerate(reader.pages):
        text = page.extract_text()
        all_text += f"\n--- PAGINA {i+1} ---\n" + (text or "")
    with open(txt_file, 'w', encoding='utf-8') as f:
        f.write(all_text)
    print(f"OCR tekst opgeslagen in {txt_file}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        pdf_file = sys.argv[1]
    else:
        pdf_file = 'Gojuryu_newaza.pdf'
    if not extract_pdf_text(pdf_file):
        ocr_and_extract(pdf_file) 