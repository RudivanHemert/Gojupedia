import fitz  # PyMuPDF
import os
import json

def extract_images_from_pdf(pdf_path, output_dir):
    """Extract images from PDF using PyMuPDF"""
    images = []
    
    try:
        # Create output directory
        os.makedirs(output_dir, exist_ok=True)
        
        # Open the PDF
        doc = fitz.open(pdf_path)
        
        print(f"Processing PDF with {len(doc)} pages...")
        
        for page_num in range(len(doc)):
            page = doc.load_page(page_num)
            
            # Get image list
            image_list = page.get_images()
            
            print(f"Page {page_num + 1}: Found {len(image_list)} images")
            
            for img_index, img in enumerate(image_list):
                try:
                    # Get image data
                    xref = img[0]
                    base_image = doc.extract_image(xref)
                    image_bytes = base_image["image"]
                    
                    # Determine file extension
                    ext = base_image["ext"]
                    if ext.lower() in ['jpeg', 'jpg']:
                        ext = 'jpg'
                    elif ext.lower() == 'png':
                        ext = 'png'
                    else:
                        ext = 'png'  # default
                    
                    # Create filename
                    image_filename = f"page_{page_num + 1}_image_{img_index + 1}.{ext}"
                    image_path = os.path.join(output_dir, image_filename)
                    
                    # Save image
                    with open(image_path, "wb") as image_file:
                        image_file.write(image_bytes)
                    
                    # Get image info
                    img_info = {
                        "page": page_num + 1,
                        "index": img_index + 1,
                        "filename": image_filename,
                        "path": image_path,
                        "width": base_image.get("width", 0),
                        "height": base_image.get("height", 0),
                        "format": base_image.get("ext", "unknown"),
                        "size_bytes": len(image_bytes)
                    }
                    
                    images.append(img_info)
                    print(f"  Saved: {image_filename} ({img_info['width']}x{img_info['height']})")
                    
                except Exception as e:
                    print(f"  Error extracting image {img_index + 1} from page {page_num + 1}: {e}")
        
        doc.close()
        
    except Exception as e:
        print(f"Error processing PDF: {e}")
    
    return images

def main():
    pdf_path = "The-Hoei-Juku-Training-Manual.pdf"
    output_dir = "hoei_juku_images"
    
    print("Extracting images from Hoei Juku Training Manual...")
    images = extract_images_from_pdf(pdf_path, output_dir)
    
    # Save image info
    with open(os.path.join(output_dir, "images.json"), "w", encoding="utf-8") as f:
        json.dump(images, f, indent=2, ensure_ascii=False)
    
    print(f"\nExtraction complete!")
    print(f"Found {len(images)} images")
    print(f"Images saved in: {output_dir}/")
    
    if images:
        print("\nImage summary:")
        for img in images:
            print(f"  {img['filename']}: {img['width']}x{img['height']} ({img['format']})")

if __name__ == "__main__":
    main() 