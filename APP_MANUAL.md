# Gojupedia - The Non-Technical Manual ("For Dummies")

## Welcome!
This document is written for anyone who wants to understand how the **Gojupedia** app works, without needing a degree in computer science. Whether you are a content creator, a translator, or just curious, this guide is for you.

---

## 1. What is this App?
**Gojupedia** is a digital encyclopedia for **Goju Ryu Karate**. It functions as a "Web Application" (Web App). This means it runs in a web browser (like Chrome, Firefox, or Safari), just like a normal website, but it behaves more like an app on your phone—it's fast, interactive, and doesn't load a new page every time you click something.

### The "Under the Hood" Technology
You don't need to know how to code, but it helps to know the names of the tools used:
- **React**: The "engine" that builds the user interface. Think of it like LEGO blocks. We build small blocks (buttons, menus, text boxes) and assemble them into pages.
- **TypeScript**: The language used to write the logic. It's a stricter version of JavaScript that prevents errors.
- **Vite**: A tool that makes the app start up extremely fast on your computer.
- **i18next**: The system that handles **translations**. This is the most important part for content editors!

---

## 2. Where is the Content? (The "Database")
Unlike massive websites like Facebook that store data in huge servers miles away, **Gojupedia stores its content right here in the files**.

All the text you see in the app—terminology, history, techniques, descriptions—is stored in **JSON files**.

### 📂 Location: `src/i18n/locales/`
If you look inside the `src/i18n/locales/` folder, you will see folders for each language:
- `en/` (English - The "Master" source)
- `de/` (German)
- `fr/` (French)
- `es/` (Spanish)
- `it/` (Italian)
- `pt/` (Portuguese)
- `nl/` (Dutch)
- `da/` (Danish)

Inside each language folder, there are files like:
- `terminology.json` (The dictionary of terms)
- `kata.json` (Details about Kata)
- `history.json` (History text)
- `practice.json` (General practice info)

### 📝 How to Read/Edit a JSON File
A JSON file is just a list of "Keys" (IDs) and "Values" (The actual text).

**Example:**
```json
{
  "welcome_message": "Welcome to Gojupedia",
  "karate_description": "A martial art from Okinawa."
}
```

- **LEFT SIDE (`"welcome_message"`)**: The **Key**. **NEVER TOUCH THIS.** The computer uses this code to find the text. If you change it, the app will break or show nothing.
- **RIGHT SIDE (`"Welcome to Gojupedia"`)**: The **Value**. **YOU CAN EDIT THIS.** This is what the user sees.

**⚠️ IMPORTANT RULES FOR EDITING:**
1.  **Keep the Quotes**: Text must always be inside double quotes `""`.
    -   *Bad*: `"welcome": Hello`
    -   *Good*: `"welcome": "Hello"`
2.  **Mind the Comma**: Every line (except the last one in a group) needs a comma `,` at the end.
    -   If the app turns white/crashes, you probably forgot a comma.
3.  **No "Smart" Quotes**: Use standard straight quotes (`"`), not curled ones (`“”`) that Word sometimes adds automatically.

---

## 3. How to Run the App on Your Computer
If you want to see the app on your own screen while you work on it:

### Step 1: Install the Tools
1.  Download and install **Node.js** (Standard version) from `nodejs.org`.
2.  Open your computer's **Terminal** (Mac/Linux) or **PowerShell** (Windows).

### Step 2: "Download" the Dependencies
Navigate to this project folder in your terminal and type:
```bash
npm install
```
*This calculates and downloads all the little software libraries the app needs to run. You only need to do this once (or when new libraries are added).*

### Step 3: Start the Engine
Type:
```bash
npm run dev
```
*This starts the "Development Server".*

You will see a message like:
`Local: http://localhost:5173/`

Open your web browser and execute that address (`http://localhost:5173`). Voila! The app is running.

---

## 4. How the App "Thinks" (Logic)
1.  **Loading**: When you open the app, it loads the English content by default (or your browser's language if supported).
2.  **Switching Language**: When you click a flag, the app doesn't reload the page. It just swaps the "Value" (Right side of JSON) for the new language instanty.
3.  **Missing Translations**: If a translation is missing in German (e.g., in `de/history.json`), the app is smart enough to "Fallback" to English. It will show the English text instead of crashing or showing a blank space.

---

## 5. Troubleshooting (Help, I broke it!)
If the app shows a blank white screen or gives an error:

1.  **Check your JSON**: Did you edit a file recently?
    -   Did you miss a comma `,`?
    -   Did you accidentally delete a quote `"`?
    -   Did you change a Key (Left side)?
2.  **Check the Terminal**: The window where you ran `npm run dev` will usually scream in red text telling you exactly which file is broken.

---

**Summary for Content Creators:**
- Focus on the `src/i18n/locales/` folder.
- Edit the text on the RIGHT side of the `:`.
- Don't touch the text on the LEFT side.
- Enjoy Gojupedia!
