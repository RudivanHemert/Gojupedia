import fitz  # PyMuPDF
import os
import sys

def extract_images_from_pdf(pdf_path, output_dir="junbi_undo_images"):
    """Extract images from PDF and save them with page numbers"""
    
    # Create output directory if it doesn't exist
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    try:
        # Open the PDF
        doc = fitz.open(pdf_path)
        print(f"PDF heeft {len(doc)} pagina's")
        
        image_count = 0
        
        for page_num in range(len(doc)):
            page = doc[page_num]
            
            # Get images from the page
            image_list = page.get_images()
            
            for img_index, img in enumerate(image_list):
                try:
                    # Get the image data
                    xref = img[0]
                    pix = fitz.Pixmap(doc, xref)
                    
                    # Convert to RGB if necessary
                    if pix.n - pix.alpha < 4:  # GRAY or RGB
                        pix1 = fitz.Pixmap(fitz.csRGB, pix)
                    else:  # CMYK: convert to RGB first
                        pix1 = fitz.Pixmap(fitz.csRGB, pix)
                    
                    # Save the image
                    filename = f"{output_dir}/page_{page_num + 1}_image_{img_index + 1}.png"
                    pix1.save(filename)
                    
                    print(f"Afbeelding opgeslagen: {filename}")
                    image_count += 1
                    
                    pix1 = None
                    pix = None
                    
                except Exception as e:
                    print(f"Fout bij het opslaan van afbeelding op pagina {page_num + 1}: {e}")
                    continue
        
        doc.close()
        print(f"\nTotaal {image_count} afbeeldingen geëxtraheerd naar {output_dir}/")
        
    except Exception as e:
        print(f"Fout bij het lezen van PDF: {e}")

if __name__ == "__main__":
    pdf_file = "junbi undo.pdf"
    extract_images_from_pdf(pdf_file) 