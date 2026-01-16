# Fish Speech - Local Installation Guide (Updated)

Because of security restrictions, I cannot write directly to `C:\Speeltuin` for you. Please follow these steps to install it yourself.

## 1. Create Directory & Clone
Open your **PowerShell** or **Terminal** and run these commands:

```powershell
# Create the Playground folder
New-Item -ItemType Directory -Force -Path "C:\Speeltuin"

# Go there
cd "C:\Speeltuin"

# Clone the Fish Speech software
git clone https://github.com/fishaudio/fish-speech.git "Fish Speech"

# Enter the folder
cd "Fish Speech"
```

## 2. Install Dependencies (The Heavy Lifting)
You need Python 3.10 and support for NVIDIA GPUs.

```powershell
# Create a virtual environment (Recommended)
python -m venv venv
.\venv\Scripts\activate

# Install PyTorch with CUDA support (CRITICAL FOR GPU)
# Verify your CUDA version, usually 11.8 or 12.1 is safe
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121

# Install other requirements
pip install -e .
pip install huggingface_hub
```

## 3. Download the Model (Fixes "FileNotFoundError")
The error `No such file or directory: 'checkpoints\\openaudio-s1-mini'` means you are missing the brain of the AI. Run this command to download it:

```powershell
huggingface-cli download fishaudio/fish-speech-1.5 --local-dir checkpoints/fish-speech-1.5
```
*Note: If the above fails or uses a different folder name, try manually creating the folder `checkpoints/openaudio-s1-mini` or check the `readme` in the Fish Speech folder for the latest download command.*

**Correction:** Based on your error, it is looking for `checkpoints\openaudio-s1-mini`. Try this specific download:

```powershell
huggingface-cli download fishaudio/speech-lm-v1.5 --local-dir checkpoints/openaudio-s1-mini
```
*(Wait, Fish Speech versions change fast. If `openaudio-s1-mini` is hardcoded, we might need a specific older version, OR we simply need to point the server to the new folder location using `--checkpoint-path` flags).*

**Better approach:**
1.  Run `huggingface-cli download fishaudio/fish-speech-1.5 --local-dir checkpoints/fish-speech-1.5`
2.  Start the server specifying the model path if needed.

## 4. Start the Server
Once installed, you can start the API server.

```powershell
python -m tools.api_server --listen 127.0.0.1:8080 --llama-checkpoint-path checkpoints/fish-speech-1.5
```
*(You may need to adjust the path if you downloaded it elsewhere)*

## 5. Verify
Open http://127.0.0.1:8080/docs in your browser.
