import os
import json
import requests
import hashlib
import time
from pathlib import Path
from dotenv import load_dotenv

# Load API Key
load_dotenv()
API_KEY = os.getenv("GOOGLE_TTS_API_KEY")

if not API_KEY:
    print("ERROR: GOOGLE_TTS_API_KEY not found in .env file.")
    exit(1)

# API Endpoint
URL = f"https://texttospeech.googleapis.com/v1/text:synthesize?key={API_KEY}"

# Configuration
SOURCE_DIR = Path("src/i18n/locales")
OUTPUT_DIR = Path("public/audio")
LANGUAGES = ["en", "de", "fr", "es", "it", "pt", "da", "nl"] 
# Note: "nl" might need to be added to source if it exists, or handled if missing.
# Based on project check, main languages are de, en, fr, es, it, pt, da.

# Mapping project language codes to Google TTS language codes
VOICE_MAP = {
    "en": {"lang": "en-US", "name": "en-US-Standard-C"}, # English (US)
    "de": {"lang": "de-DE", "name": "de-DE-Standard-B"}, # German
    "fr": {"lang": "fr-FR", "name": "fr-FR-Standard-A"}, # French
    "es": {"lang": "es-ES", "name": "es-ES-Standard-A"}, # Spanish
    "it": {"lang": "it-IT", "name": "it-IT-Standard-A"}, # Italian
    "pt": {"lang": "pt-BR", "name": "pt-BR-Standard-A"}, # Portuguese (Brazil) - usually more standard for "pt" unless "pt-PT" specifically requested
    "da": {"lang": "da-DK", "name": "da-DK-Standard-A"}, # Danish
    "nl": {"lang": "nl-NL", "name": "nl-NL-Standard-A"}, # Dutch
    "ja": {"lang": "ja-JP", "name": "ja-JP-Standard-A"}  # Japanese (for Terminology specifically if mixed)
}

# Files to Include (High Value Content)
INCLUDE_FILES = ["history.json", "philosophy.json", "kata.json", "practice.json", "information.json", "terminology.json"]
# Files to Exclude (UI Labels) -> We rely on INCLUDE_FILES whitelist instead of exclusion for safety.

def generate_audio(text, lang_code, output_path):
    if not text or len(text.strip()) == 0:
        return

    # Check if file exists (We could add hash check here later for updates)
    if output_path.exists():
        # print(f"Skipping (Exists): {output_path}")
        return

    # Configure Voice
    voice_config = VOICE_MAP.get(lang_code, VOICE_MAP["en"])
    
    # Payload
    data = {
        "input": {"text": text},
        "voice": {"languageCode": voice_config["lang"], "name": voice_config["name"]},
        "audioConfig": {"audioEncoding": "MP3", "speakingRate": 0.9} # Slightly slower for clarity
    }

    try:
        response = requests.post(URL, json=data)
        if response.status_code == 200:
            audio_content = response.json().get("audioContent")
            if audio_content:
                import base64
                output_path.parent.mkdir(parents=True, exist_ok=True)
                with open(output_path, "wb") as f:
                    f.write(base64.b64decode(audio_content))
                print(f"Generated: {output_path}")
            else:
                print(f"Error: No audio content received for {output_path}")
        else:
            print(f"API Error ({response.status_code}): {response.text}")
            # If rate limited, wait
            if response.status_code == 429:
                print("Rate limit reached. Waiting 60 seconds...")
                time.sleep(60)

    except Exception as e:
        print(f"Exception generating {output_path}: {e}")

def process_file(lang, filepath):
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            content = json.load(f)
        
        rel_path = filepath.relative_to(SOURCE_DIR / lang)
        namespace = rel_path.stem # e.g., "history"
        
        # Recursive function to traverse JSON
        def traverse(obj, current_key_path):
            if isinstance(obj, dict):
                for k, v in obj.items():
                    traverse(v, f"{current_key_path}/{k}" if current_key_path else k)
            elif isinstance(obj, str):
                # Filter out very short strings (likely labels/titles not worth reading or empty)
                if len(obj) < 3: 
                    return
                
                # Check for Japanese terms in terminology.json
                # Strategy: For content in terminology.json, we might want to read the DEFINITIONS in the target language
                # AND the TERMS in Japanese? 
                # For now, let's stick to the prompt: "All text... in all available languages".
                # So we read the German text in German, English in English.
                
                # Construct output filename: public/audio/de/history/intro.mp3
                # We replace / with _ in keys to avoid deep nesting issues if keys contain slashes
                safe_key_path = current_key_path.replace("/", "_").replace(".", "_")
                output_file = OUTPUT_DIR / lang / namespace / f"{safe_key_path}.mp3"
                
                generate_audio(obj, lang, output_file)
                # Small sleep to be nice to the API (though Google allows high bursting)
                # time.sleep(0.05) 

        traverse(content, "")

    except Exception as e:
        print(f"Error reading {filepath}: {e}")

def main():
    print(f"Starting Audio Generation...")
    print(f"API Key present: {bool(API_KEY)}")
    print(f"Output Directory: {OUTPUT_DIR}")

    for lang in LANGUAGES:
        lang_dir = SOURCE_DIR / lang
        if not lang_dir.exists():
            continue
            
        print(f"\nProcessing Language: {lang}")
        
        for filename in INCLUDE_FILES:
            file_path = lang_dir / filename
            if file_path.exists():
                print(f"  - Reading {filename}...")
                process_file(lang, file_path)
    
    print("\nDone!")

if __name__ == "__main__":
    main()
