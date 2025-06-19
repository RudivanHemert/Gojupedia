import PyPDF2
import sys

def extract_pdf_text(pdf_path):
    try:
        reader = PyPDF2.PdfReader(pdf_path)
        print(f"PDF heeft {len(reader.pages)} pagina's")
        
        all_text = ""
        for i, page in enumerate(reader.pages):
            print(f"Pagina {i+1}:")
            text = page.extract_text()
            print(text)
            print("-" * 50)
            all_text += f"\n--- PAGINA {i+1} ---\n" + text
            
        # Save to text file
        with open('docs/extracted_text.txt', 'w', encoding='utf-8') as f:
            f.write(all_text)
        print("Tekst opgeslagen in docs/extracted_text.txt")
        
    except Exception as e:
        print(f"Fout bij het lezen van PDF: {e}")

if __name__ == "__main__":
    extract_pdf_text('docs/technieken-van-de-kata.pdf') 