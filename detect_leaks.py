import json
import os
import re

base_path = r'c:\Users\rudiv\Documents\GitHub\Gojupedia\src\i18n\locales'
languages = ['da', 'de', 'en', 'es', 'fr', 'it', 'pt']
stop_words = [' de ', ' het ', ' een ', ' van ', ' en ', ' met ', ' voor ', ' niet ', ' op ', ' is ', ' zijn ', 'Oefeningen', 'Voorbereidende']

def is_suspicious(text):
    if not isinstance(text, str): return False
    # Check for specific strong indicators (Capitalized Dutch nouns or phrases)
    strong_indicators = ['Voorbereidende Oefeningen', 'Straf', 'Band', 'Riem']
    for ind in strong_indicators:
        if ind in text: return True
        
    count = 0
    words = text.split()
    for word in words:
        if f' {word.lower()} ' in stop_words:
            count += 1
            
    # Heuristic: if > 20% of words are Dutch stop words, or specific phrases match
    if len(words) > 4 and (count / len(words)) > 0.2:
        return True
    return False

def scan_file(lang, filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        try:
            data = json.load(f)
        except:
            return []
            
    issues = []
    
    def recursive_scan(obj, path):
        if isinstance(obj, dict):
            for k, v in obj.items():
                recursive_scan(v, f"{path}.{k}")
        elif isinstance(obj, str):
            if is_suspicious(obj):
                issues.append(f"{path}: {obj[:50]}...")

    recursive_scan(data, "")
    return issues

print("Scanning for Dutch leaks...")
for lang in languages:
    lang_dir = os.path.join(base_path, lang)
    for root, dirs, files in os.walk(lang_dir):
        for file in files:
            if file.endswith('.json'):
                full_path = os.path.join(root, file)
                issues = scan_file(lang, full_path)
                if issues:
                    print(f"\n--- {lang}/{file} ---")
                    for issue in issues[:5]: # Limit output per file
                        print(issue)
                    if len(issues) > 5:
                        print(f"... and {len(issues) - 5} more")
