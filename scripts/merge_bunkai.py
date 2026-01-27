
import json
import os

def merge_bunkai(lang_data, parsed_data):
    if "bunkai" not in lang_data:
        lang_data["bunkai"] = {}
    if "kata" not in lang_data["bunkai"]:
        lang_data["bunkai"]["kata"] = {}
        
    for kata_id, bunkai_steps in parsed_data.items():
        if kata_id not in lang_data["bunkai"]["kata"]:
            lang_data["bunkai"]["kata"][kata_id] = {}
        
        # Keep existing description if present
        # if "description" not in lang_data["bunkai"]["kata"][kata_id]:
        #    lang_data["bunkai"]["kata"][kata_id]["description"] = ""
            
        lang_data["bunkai"]["kata"][kata_id]["steps"] = bunkai_steps
        
    return lang_data

if __name__ == "__main__":
    with open('parsed_bunkai.json', 'r', encoding='utf-8') as f:
        parsed = json.load(f)
        
    nl_path = 'src/i18n/locales/nl/bunkai.json'
    with open(nl_path, 'r', encoding='utf-8') as f:
        nl_data = json.load(f)
        
    updated_nl = merge_bunkai(nl_data, parsed)
    
    with open(nl_path, 'w', encoding='utf-8') as f:
        json.dump(updated_nl, f, indent=2, ensure_ascii=False)
        
    print(f"Updated {nl_path}")
