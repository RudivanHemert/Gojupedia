
import json
import re

def parse_bunkai(text):
    katas = {}
    current_kata = None
    current_bunkai = None
    
    # Mapping PDF names to IDs
    id_map = {
        "A. Gekisai Dai Ichi": "gekisai-dai-ichi",
        "B. Gekisai Dai Ni": "gekisai-dai-ni",
        "C. Saifa": "saifa",
        "D. Seiyunchin": "seiyunchin",
        "E. Shisochin": "shisochin",
        "F. Sanseru": "sanseru"
    }

    lines = text.split('\n')
    
    for line in lines:
        line = line.strip()
        if not line: continue
        
        # Detect Kata
        kata_match = re.match(r'Kata:\s+([A-F]\.\s+[^-\n]+)', line)
        if kata_match:
            full_kata_name = kata_match.group(1).strip()
            # Clean up page numbers if any
            clean_name = re.sub(r'\s+zondag.*$', '', full_kata_name).strip()
            # Find which key matches
            found_id = None
            for key, kid in id_map.items():
                if key in clean_name or clean_name in key:
                    found_id = kid
                    break
            
            if found_id:
                current_kata = found_id
                if current_kata not in katas:
                    katas[current_kata] = {}
                current_bunkai = None # Reset bunkai when kata changes
                print(f"Detected Kata: {current_kata}")
            continue
            
        if not current_kata: continue
        
        # Detect Bunkai
        bunkai_match = re.match(r'Bunkai:\s+(\d+)\.\s+(.+)', line)
        if bunkai_match:
            bunkai_num = int(bunkai_match.group(1))
            bunkai_title = bunkai_match.group(2).strip()
            # Clean up page numbers
            bunkai_title = re.sub(r'\s+zondag.*$', '', bunkai_title).strip()
            current_bunkai = f"bunkai{bunkai_num}"
            katas[current_kata][current_bunkai] = {
                "name": bunkai_title
            }
            print(f"  Detected Bunkai: {current_bunkai}")
            continue
            
        if not current_bunkai: continue
        
        # Detect Fields
        if line.startswith('Aanval:'):
            katas[current_kata][current_bunkai]["attack"] = line.replace('Aanval:', '').strip()
        elif line.startswith('Verdediging:'):
            katas[current_kata][current_bunkai]["defense"] = line.replace('Verdediging:', '').strip()
        elif line.startswith('Tegenaanval:'):
            katas[current_kata][current_bunkai]["counterAttack"] = line.replace('Tegenaanval:', '').strip()
        elif line.startswith('Voetenwerk:'):
            katas[current_kata][current_bunkai]["footwork"] = line.replace('Voetenwerk:', '').strip()
        elif line.startswith('Vitale punten:'):
            katas[current_kata][current_bunkai]["vitalPoints"] = line.replace('Vitale punten:', '').strip()
        elif line.startswith('Aandachtspunten:'):
            notes = line.replace('Aandachtspunten:', '').strip()
            # Clean up trailing kata names and page artifacts
            notes = re.sub(r'Kata:\s+[A-F]\.\s+.*$', '', notes).strip()
            notes = re.sub(r'zondag 16 november.*$', '', notes).strip()
            katas[current_kata][current_bunkai]["notes"] = notes
        elif line.startswith('--- PAGINA'):
            continue
        elif "zondag 16 november" in line:
            continue
        else:
            # Multi-line handling
            # Get the keys of the current bunkai
            b_keys = list(katas[current_kata][current_bunkai].keys())
            if b_keys:
                last_field = b_keys[-1]
                katas[current_kata][current_bunkai][last_field] += " " + line

    return katas

if __name__ == "__main__":
    with open('docs/Bunkai boekje NL 20251115 tm Sanseru - v1.0 in concept_extracted.txt', 'r', encoding='utf-8') as f:
        text = f.read()
    
    parsed = parse_bunkai(text)
    with open('parsed_bunkai.json', 'w', encoding='utf-8') as f:
        json.dump(parsed, f, indent=2, ensure_ascii=False)
    print("Parsed bunkai saved to parsed_bunkai.json")
