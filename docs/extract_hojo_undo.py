import PyPDF2
import sys

def extract_text_from_pdf(pdf_path, output_path):
    """Extract text from PDF and save to text file"""
    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            text = ""
            
            for page_num in range(len(pdf_reader.pages)):
                page = pdf_reader.pages[page_num]
                text += page.extract_text() + "\n\n"
            
            # Save to text file
            with open(output_path, 'w', encoding='utf-8') as output_file:
                output_file.write(text)
            
            print(f"Text extracted successfully to {output_path}")
            print(f"Total pages: {len(pdf_reader.pages)}")
            return text
            
    except Exception as e:
        print(f"Error extracting text: {e}")
        return None

if __name__ == "__main__":
    pdf_file = "Hojo_undo_artikelen_1995.pdf"
    output_file = "hojo_undo_extracted.txt"
    
    text = extract_text_from_pdf(pdf_file, output_file)
    if text:
        print(f"Extracted {len(text)} characters")
        print("\nFirst 500 characters:")
        print(text[:500]) 