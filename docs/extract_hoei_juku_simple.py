import PyPDF2
import os
import json
import re

def extract_text_from_pdf(pdf_path):
    """Extract text from PDF using PyPDF2"""
    text = ""
    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            for page_num in range(len(pdf_reader.pages)):
                page = pdf_reader.pages[page_num]
                page_text = page.extract_text()
                text += f"\n--- PAGE {page_num + 1} ---\n"
                text += page_text
                text += "\n"
    except Exception as e:
        print(f"Error extracting text with PyPDF2: {e}")
    
    return text

def organize_content_by_sections(text):
    """Organize content into logical sections based on text analysis"""
    sections = {
        "introduction": "",
        "basic_techniques": "",
        "kata": "",
        "bunkai": "",
        "kumite": "",
        "conditioning": "",
        "philosophy": "",
        "terminology": "",
        "grading": "",
        "appendix": ""
    }
    
    # Split text into pages
    pages = text.split("--- PAGE")
    
    for page in pages:
        if not page.strip():
            continue
            
        # Extract page number and content
        lines = page.strip().split('\n')
        if not lines:
            continue
            
        page_num = lines[0].replace("---", "").strip()
        page_content = '\n'.join(lines[1:])
        
        # Determine section based on content
        content_lower = page_content.lower()
        
        if any(word in content_lower for word in ["introduction", "overview", "welcome", "preface"]):
            sections["introduction"] += f"\n--- PAGE {page_num} ---\n{page_content}"
        elif any(word in content_lower for word in ["basic", "fundamental", "technique", "stance", "punch", "kick", "block", "strike"]):
            sections["basic_techniques"] += f"\n--- PAGE {page_num} ---\n{page_content}"
        elif any(word in content_lower for word in ["kata", "form", "pattern", "sequence", "gekisai", "saifa", "seiyunchin", "shisochin", "sanseru", "sepai", "kururunfa", "seisan", "suparinpei"]):
            sections["kata"] += f"\n--- PAGE {page_num} ---\n{page_content}"
        elif any(word in content_lower for word in ["bunkai", "application", "analysis", "meaning", "self-defense"]):
            sections["bunkai"] += f"\n--- PAGE {page_num} ---\n{page_content}"
        elif any(word in content_lower for word in ["kumite", "sparring", "fighting", "combat", "free fighting"]):
            sections["kumite"] += f"\n--- PAGE {page_num} ---\n{page_content}"
        elif any(word in content_lower for word in ["conditioning", "fitness", "strength", "endurance", "hojo undo", "exercise"]):
            sections["conditioning"] += f"\n--- PAGE {page_num} ---\n{page_content}"
        elif any(word in content_lower for word in ["philosophy", "spirit", "mind", "do", "way", "principles"]):
            sections["philosophy"] += f"\n--- PAGE {page_num} ---\n{page_content}"
        elif any(word in content_lower for word in ["terminology", "glossary", "terms", "vocabulary", "japanese"]):
            sections["terminology"] += f"\n--- PAGE {page_num} ---\n{page_content}"
        elif any(word in content_lower for word in ["grading", "belt", "rank", "examination", "test", "kyu", "dan"]):
            sections["grading"] += f"\n--- PAGE {page_num} ---\n{page_content}"
        else:
            sections["appendix"] += f"\n--- PAGE {page_num} ---\n{page_content}"
    
    return sections

def extract_kata_specific_content(text):
    """Extract specific kata information"""
    kata_info = {}
    
    # Common Goju Ryu kata names
    kata_names = [
        "Gekisai Dai Ichi", "Gekisai Dai Ni", "Sanchin", "Tensho",
        "Saifa", "Seiyunchin", "Shisochin", "Sanseru", "Sepai",
        "Kururunfa", "Seisan", "Suparinpei"
    ]
    
    for kata in kata_names:
        # Look for kata sections
        kata_pattern = rf"{kata}.*?(?=\n[A-Z][a-z]+|$)"
        matches = re.findall(kata_pattern, text, re.DOTALL | re.IGNORECASE)
        if matches:
            kata_info[kata] = matches[0].strip()
    
    return kata_info

def main():
    pdf_path = "The-Hoei-Juku-Training-Manual.pdf"
    output_dir = "hoei_juku_extracted"
    
    # Create output directory
    os.makedirs(output_dir, exist_ok=True)
    
    print("Extracting text from PDF...")
    text = extract_text_from_pdf(pdf_path)
    
    print("Organizing content into sections...")
    sections = organize_content_by_sections(text)
    
    print("Extracting kata-specific content...")
    kata_info = extract_kata_specific_content(text)
    
    # Save extracted data
    print("Saving extracted data...")
    
    # Save full text
    with open(os.path.join(output_dir, "full_text.txt"), "w", encoding="utf-8") as f:
        f.write(text)
    
    # Save organized sections
    with open(os.path.join(output_dir, "sections.json"), "w", encoding="utf-8") as f:
        json.dump(sections, f, indent=2, ensure_ascii=False)
    
    # Save kata info
    with open(os.path.join(output_dir, "kata_info.json"), "w", encoding="utf-8") as f:
        json.dump(kata_info, f, indent=2, ensure_ascii=False)
    
    # Save individual section files
    for section_name, content in sections.items():
        if content.strip():
            with open(os.path.join(output_dir, f"{section_name}.txt"), "w", encoding="utf-8") as f:
                f.write(content)
    
    print(f"Extraction complete! Files saved in {output_dir}/")
    print(f"Organized into {len(sections)} sections")
    print(f"Found {len(kata_info)} kata")
    
    # Print summary
    for section_name, content in sections.items():
        if content.strip():
            lines = content.count('\n')
            print(f"{section_name}: {lines} lines")

if __name__ == "__main__":
    main() 