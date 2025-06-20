import PyPDF2
import fitz  # PyMuPDF
import os
import json
from PIL import Image
import io

def extract_text_from_pdf(pdf_path):
    """Extract text from PDF using PyPDF2"""
    text = ""
    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            for page_num in range(len(pdf_reader.pages)):
                page = pdf_reader.pages[page_num]
                text += f"\n--- PAGE {page_num + 1} ---\n"
                text += page.extract_text()
    except Exception as e:
        print(f"Error extracting text with PyPDF2: {e}")
    
    return text

def extract_images_from_pdf(pdf_path, output_dir):
    """Extract images from PDF using PyMuPDF"""
    images = []
    try:
        doc = fitz.open(pdf_path)
        for page_num in range(len(doc)):
            page = doc.load_page(page_num)
            image_list = page.get_images()
            
            for img_index, img in enumerate(image_list):
                xref = img[0]
                base_image = doc.extract_image(xref)
                image_bytes = base_image["image"]
                
                # Save image
                image_filename = f"page_{page_num + 1}_image_{img_index + 1}.png"
                image_path = os.path.join(output_dir, image_filename)
                
                with open(image_path, "wb") as image_file:
                    image_file.write(image_bytes)
                
                images.append({
                    "page": page_num + 1,
                    "index": img_index + 1,
                    "filename": image_filename,
                    "path": image_path
                })
        
        doc.close()
    except Exception as e:
        print(f"Error extracting images: {e}")
    
    return images

def extract_text_with_layout(pdf_path):
    """Extract text with layout information using PyMuPDF"""
    text_with_layout = []
    try:
        doc = fitz.open(pdf_path)
        for page_num in range(len(doc)):
            page = doc.load_page(page_num)
            blocks = page.get_text("dict")
            
            page_text = {
                "page": page_num + 1,
                "blocks": []
            }
            
            for block in blocks["blocks"]:
                if "lines" in block:
                    block_text = ""
                    for line in block["lines"]:
                        for span in line["spans"]:
                            block_text += span["text"] + " "
                        block_text += "\n"
                    
                    if block_text.strip():
                        page_text["blocks"].append({
                            "text": block_text.strip(),
                            "bbox": block["bbox"]
                        })
            
            text_with_layout.append(page_text)
        
        doc.close()
    except Exception as e:
        print(f"Error extracting text with layout: {e}")
    
    return text_with_layout

def organize_content_by_sections(text_with_layout):
    """Organize content into logical sections"""
    sections = {
        "introduction": [],
        "basic_techniques": [],
        "kata": [],
        "bunkai": [],
        "kumite": [],
        "conditioning": [],
        "philosophy": [],
        "terminology": [],
        "grading": [],
        "appendix": []
    }
    
    # Keywords to identify sections
    section_keywords = {
        "introduction": ["introduction", "overview", "welcome", "preface"],
        "basic_techniques": ["basic", "fundamental", "technique", "stance", "punch", "kick", "block"],
        "kata": ["kata", "form", "pattern", "sequence"],
        "bunkai": ["bunkai", "application", "analysis", "meaning"],
        "kumite": ["kumite", "sparring", "fighting", "combat"],
        "conditioning": ["conditioning", "fitness", "strength", "endurance", "hojo undo"],
        "philosophy": ["philosophy", "spirit", "mind", "do", "way"],
        "terminology": ["terminology", "glossary", "terms", "vocabulary"],
        "grading": ["grading", "belt", "rank", "examination", "test"],
        "appendix": ["appendix", "reference", "index", "bibliography"]
    }
    
    for page in text_with_layout:
        for block in page["blocks"]:
            text_lower = block["text"].lower()
            
            # Determine which section this block belongs to
            assigned_section = "appendix"  # default
            
            for section, keywords in section_keywords.items():
                if any(keyword in text_lower for keyword in keywords):
                    assigned_section = section
                    break
            
            sections[assigned_section].append({
                "page": page["page"],
                "text": block["text"],
                "bbox": block["bbox"]
            })
    
    return sections

def main():
    pdf_path = "The-Hoei-Juku-Training-Manual.pdf"
    output_dir = "hoei_juku_extracted"
    
    # Create output directory
    os.makedirs(output_dir, exist_ok=True)
    
    print("Extracting text from PDF...")
    text = extract_text_from_pdf(pdf_path)
    
    print("Extracting images from PDF...")
    images = extract_images_from_pdf(pdf_path, output_dir)
    
    print("Extracting text with layout...")
    text_with_layout = extract_text_with_layout(pdf_path)
    
    print("Organizing content into sections...")
    sections = organize_content_by_sections(text_with_layout)
    
    # Save extracted data
    print("Saving extracted data...")
    
    # Save full text
    with open(os.path.join(output_dir, "full_text.txt"), "w", encoding="utf-8") as f:
        f.write(text)
    
    # Save images info
    with open(os.path.join(output_dir, "images.json"), "w", encoding="utf-8") as f:
        json.dump(images, f, indent=2)
    
    # Save organized sections
    with open(os.path.join(output_dir, "sections.json"), "w", encoding="utf-8") as f:
        json.dump(sections, f, indent=2, ensure_ascii=False)
    
    # Save individual section files
    for section_name, content in sections.items():
        section_text = ""
        for block in content:
            section_text += f"Page {block['page']}:\n{block['text']}\n\n"
        
        with open(os.path.join(output_dir, f"{section_name}.txt"), "w", encoding="utf-8") as f:
            f.write(section_text)
    
    print(f"Extraction complete! Files saved in {output_dir}/")
    print(f"Found {len(images)} images")
    print(f"Organized into {len(sections)} sections")

if __name__ == "__main__":
    main() 