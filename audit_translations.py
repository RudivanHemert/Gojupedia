import os
import json
import re

# Configuration
LOCALES_DIR = "src/i18n/locales"
TARGET_LANGS = ["de", "en", "fr", "es", "it", "da", "pt"]
SOURCE_LANG = "nl"

# Dutch stop words/phrases that strongly indicate a leak if found in other languages
DUTCH_INDICATORS = [
    r"\bvan\b", r"\bhet\b", r"\been\b", r"\bvoor\b", r"\bniet\b", 
    r"\bop\b", r"\bte\b", r"\bzijn\b", r"\bdeze\b", r"\bmaar\b",
    r"\bof\b", r"\bals\b", r"\bbij\b", r"\bdoor\b", r"\bnaar\b",
    r"\bletterlijk\b", r"\bbetekent\b", r"\bstaat voor\b"
]

def load_json(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"Error loading {filepath}: {e}")
        return None

def flatten_dict(d, parent_key='', sep='.'):
    items = []
    for k, v in d.items():
        new_key = f"{parent_key}{sep}{k}" if parent_key else k
        if isinstance(v, dict):
            items.extend(flatten_dict(v, new_key, sep=sep).items())
        else:
            items.append((new_key, v))
    return dict(items)

def check_for_leaks(lang, filename, content, dutch_content):
    leaks = []
    flat_content = flatten_dict(content)
    flat_dutch = flatten_dict(dutch_content)

    for key, value in flat_content.items():
        if not isinstance(value, str):
            continue
        
        # Skip very short strings (abbreviations, numbers)
        if len(value) < 4:
            continue

        # Check 1: Exact match with Dutch (and Dutch value exists)
        if key in flat_dutch and value == flat_dutch[key] and len(value.split()) > 1:
            # It's an exact match and has more than 1 word (avoids "Kata", "Dojo")
             leaks.append({
                "key": key,
                "reason": "Exact match with Dutch source",
                "value": value
            })
             continue

        # Check 2: Contains strong Dutch indicators
        for indicator in DUTCH_INDICATORS:
            if re.search(indicator, value, re.IGNORECASE):
                leaks.append({
                    "key": key,
                    "reason": f"Contains Dutch indicator '{indicator}'",
                    "value": value
                })
                break
    
    return leaks

def main():
    print("Starting Translation Audit...")
    report = {}
    
    # Get list of files in NL directory
    nl_path = os.path.join(LOCALES_DIR, SOURCE_LANG)
    if not os.path.exists(nl_path):
        print(f"Source path {nl_path} not found!")
        return

    files = [f for f in os.listdir(nl_path) if f.endswith('.json')]
    
    for lang in TARGET_LANGS:
        report[lang] = {}
        lang_path = os.path.join(LOCALES_DIR, lang)
        
        print(f"Auditing {lang}...")
        
        for filename in files:
            file_path = os.path.join(lang_path, filename)
            dutch_file_path = os.path.join(nl_path, filename)
            
            if not os.path.exists(file_path):
                # print(f"  Missing file: {filename}")
                continue
                
            content = load_json(file_path)
            dutch_content = load_json(dutch_file_path)
            
            if not content or not dutch_content:
                continue
                
            leaks = check_for_leaks(lang, filename, content, dutch_content)
            
            if leaks:
                report[lang][filename] = leaks
                print(f"  Found {len(leaks)} potential leaks in {filename}")

    # Output Report
    with open("audit_report.json", "w", encoding="utf-8") as f:
        json.dump(report, f, indent=2, ensure_ascii=False)
    
    print("\nAudit Complete. Results saved to audit_report.json")

    # Print summary
    total_leaks = 0
    for lang, files in report.items():
        lang_leaks = sum(len(items) for items in files.values())
        total_leaks += lang_leaks
        if lang_leaks > 0:
            print(f"\n[{lang.upper()}] Total Leaks: {lang_leaks}")
            for fname, items in files.items():
                print(f"  - {fname}: {len(items)}")

if __name__ == "__main__":
    main()
