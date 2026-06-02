const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const localeRoot = path.join(root, "src", "i18n", "locales");
const docsDir = path.join(root, "docs");
const baseLanguage = "en";
const languages = ["da", "de", "es", "fr", "it", "nl", "pt"];
const fallbackReportPath = path.join(docsDir, "translation-fallbacks.csv");

function walk(dir) {
  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    if (entry.isFile()) return [fullPath];
    return [];
  });
}

function relativeToLocale(language, filePath) {
  return path.relative(path.join(localeRoot, language), filePath).replace(/\\/g, "/");
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function sameContainerType(baseValue, localeValue) {
  if (Array.isArray(baseValue)) return Array.isArray(localeValue);
  if (isPlainObject(baseValue)) return isPlainObject(localeValue);
  return !Array.isArray(localeValue) && !isPlainObject(localeValue);
}

function fallbackPrimitive(baseValue, localeValue) {
  if (localeValue === undefined || localeValue === null) return baseValue;
  if (!sameContainerType(baseValue, localeValue)) {
    if (typeof baseValue === "string" && isPlainObject(localeValue)) {
      if (typeof localeValue.title === "string") return localeValue.title;
      if (typeof localeValue.label === "string") return localeValue.label;
      if (typeof localeValue.name === "string") return localeValue.name;
      if (typeof localeValue.description === "string") return localeValue.description;
    }
    return baseValue;
  }
  return localeValue;
}

function csvEscape(value) {
  const text = String(value ?? "");
  if (/[",\n\r]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

function syncValue(baseValue, localeValue, meta, keyPath = "") {
  if (Array.isArray(baseValue)) {
    const localeArray = Array.isArray(localeValue) ? localeValue : [];
    return baseValue.map((item, index) => syncValue(item, localeArray[index], meta, `${keyPath}[${index}]`));
  }

  if (isPlainObject(baseValue)) {
    const localeObject = isPlainObject(localeValue) ? localeValue : {};
    return Object.fromEntries(
      Object.entries(baseValue).map(([key, child]) => [
        key,
        syncValue(child, localeObject[key], meta, keyPath ? `${keyPath}.${key}` : key),
      ]),
    );
  }

  const value = fallbackPrimitive(baseValue, localeValue);
  if (localeValue === undefined || !sameContainerType(baseValue, localeValue)) {
    meta.fallbacks.push({
      language: meta.language,
      file: meta.file,
      key: keyPath,
      fallback_value: baseValue,
      reason: localeValue === undefined ? "missing-key" : "shape-mismatch",
    });
  }
  return value;
}

const baseFiles = walk(path.join(localeRoot, baseLanguage))
  .filter((file) => file.endsWith(".json"))
  .map((file) => relativeToLocale(baseLanguage, file))
  .sort();

const fallbackRows = [];
const changedFiles = [];

for (const language of languages) {
  for (const relFile of baseFiles) {
    const basePath = path.join(localeRoot, baseLanguage, relFile);
    const localePath = path.join(localeRoot, language, relFile);
    if (!fs.existsSync(localePath)) {
      fs.mkdirSync(path.dirname(localePath), { recursive: true });
      writeJson(localePath, readJson(basePath));
      changedFiles.push(`${language}/${relFile}`);
      fallbackRows.push({
        language,
        file: relFile,
        key: "(file)",
        fallback_value: "Copied complete English file",
        reason: "missing-file",
      });
      continue;
    }

    const meta = { language, file: relFile, fallbacks: [] };
    const synced = syncValue(readJson(basePath), readJson(localePath), meta);
    const before = fs.readFileSync(localePath, "utf8");
    const after = `${JSON.stringify(synced, null, 2)}\n`;

    if (before !== after) {
      fs.writeFileSync(localePath, after, "utf8");
      changedFiles.push(`${language}/${relFile}`);
    }
    fallbackRows.push(...meta.fallbacks);
  }
}

const headers = ["language", "file", "key", "reason", "fallback_value"];
const lines = [
  headers.join(","),
  ...fallbackRows.map((row) => headers.map((header) => csvEscape(row[header])).join(",")),
];
fs.writeFileSync(fallbackReportPath, `${lines.join("\n")}\n`, "utf8");

console.log(`Synced ${changedFiles.length} locale files.`);
console.log(`Wrote ${path.relative(root, fallbackReportPath).replace(/\\/g, "/")} with ${fallbackRows.length} fallback rows.`);
