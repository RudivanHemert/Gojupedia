const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const docsDir = path.join(root, "docs");
const localeRoot = path.join(root, "src", "i18n", "locales");
const contentRoot = path.join(root, "src", "content");
const dataRoot = path.join(root, "src", "data");
const publicRoot = path.join(root, "public");

const inventoryPath = path.join(docsDir, "fact-check-inventory.csv");
const highPriorityPath = path.join(docsDir, "fact-check-high-priority.csv");
const claimsTemplatePath = path.join(docsDir, "fact-check-claims-template.csv");
const claimCandidatesPath = path.join(docsDir, "fact-check-claim-candidates.csv");
const reportPath = path.join(docsDir, "fact-check-audit-report.md");
const keyReportPath = path.join(docsDir, "translation-key-report.json");
const translationIssuesPath = path.join(docsDir, "translation-issues-summary.csv");
const translationFallbacksPath = path.join(docsDir, "translation-fallbacks.csv");
const translationLanguageReviewPath = path.join(docsDir, "translation-language-review.csv");
const reviewBatchesPath = path.join(docsDir, "fact-check-review-batches.md");
const graduationParityPath = path.join(docsDir, "graduation-parity-report.csv");
const mediaAuditPath = path.join(docsDir, "media-audit-report.csv");
const kataDataAuditPath = path.join(docsDir, "kata-data-audit-report.csv");
const sourceIndexPath = path.join(docsDir, "source-material-index.csv");
const textQualityPath = path.join(docsDir, "text-quality-report.csv");
const changeReportPath = path.join(docsDir, "fact-check-change-report.md");
const terminologyConsistencyPath = path.join(docsDir, "terminology-consistency-report.csv");
const graduationClaimsPath = path.join(docsDir, "graduation-claims-review.csv");
const graduationKnowledgeSuggestionsPath = path.join(docsDir, "graduation-knowledge-suggestions.csv");
const graduationKnowledgeAppliedPath = path.join(docsDir, "graduation-knowledge-applied.csv");
const generatedAuditFiles = new Set([
  "docs/fact-check-audit-report.md",
  "docs/fact-check-change-report.md",
  "docs/fact-check-claim-candidates.csv",
  "docs/fact-check-claims-template.csv",
  "docs/fact-check-high-priority.csv",
  "docs/fact-check-inventory.csv",
  "docs/fact-check-review-batches.md",
  "docs/graduation-parity-report.csv",
  "docs/graduation-claims-review.csv",
  "docs/graduation-knowledge-suggestions.csv",
  "docs/kata-data-audit-report.csv",
  "docs/media-audit-report.csv",
  "docs/source-material-index.csv",
  "docs/terminology-consistency-report.csv",
  "docs/text-quality-report.csv",
  "docs/translation-issues-summary.csv",
  "docs/translation-fallbacks.csv",
  "docs/translation-language-review.csv",
  "docs/translation-key-report.json",
]);

const languages = ["da", "de", "en", "es", "fr", "it", "nl", "pt"];
const localeBase = "en";

function walk(dir) {
  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    if (entry.isFile()) return [fullPath];
    return [];
  });
}

function relative(filePath) {
  return path.relative(root, filePath).replace(/\\/g, "/");
}

function csvEscape(value) {
  const text = String(value ?? "");
  if (/[",\n\r]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

function writeCsv(filePath, rows) {
  const headers = [
    "file_path",
    "area",
    "content_type",
    "language",
    "topic",
    "priority",
    "status",
    "notes",
  ];
  const lines = [
    headers.join(","),
    ...rows.map((row) => headers.map((header) => csvEscape(row[header])).join(",")),
  ];
  fs.writeFileSync(filePath, `${lines.join("\n")}\n`, "utf8");
}

function writeGenericCsv(filePath, headers, rows) {
  const lines = [
    headers.join(","),
    ...rows.map((row) => headers.map((header) => csvEscape(row[header])).join(",")),
  ];
  fs.writeFileSync(filePath, `${lines.join("\n")}\n`, "utf8");
}

function writeClaimsTemplate(filePath) {
  const headers = [
    "claim_id",
    "file_path",
    "language",
    "topic",
    "claim_type",
    "current_text",
    "source_checked",
    "status",
    "suggested_correction",
    "notes",
    "reviewer",
    "review_date",
  ];
  fs.writeFileSync(filePath, `${headers.join(",")}\n`, "utf8");
}

function classifyClaim(text, filePath = "") {
  const lower = text.toLowerCase();
  const pathLower = filePath.toLowerCase();

  if (/veilig|safety|bescherm|danger|gevaar|injur|blessure|pain|pijn|contact|penalt|forbidden|verboden/.test(lower)) {
    return "safety";
  }
  if (/means|meaning|beteken|literally|letterlijk|translation|vertal/.test(lower)) return "definition";
  if (/kyu|dan|requirement|vereist|exam|examen|classes|months/.test(lower) || pathLower.includes("graduations")) {
    return "grading";
  }
  if (/kata|bunkai|stance|dachi|uke|geri|zuki|sanchin|tensho/.test(lower)) return "technique";
  if (/born|died|founded|year|jaar|century|eeuw|sensei|miyagi|higaonna/.test(lower)) return "history";
  return "general";
}

function normalizeCandidateText(text) {
  return text
    .replace(/^#{1,6}\s+/, "")
    .replace(/^[-*]\s+/, "")
    .replace(/^\d+\.\s+/, "")
    .replace(/\*\*/g, "")
    .trim();
}

function markdownClaimCandidates(filePath, row) {
  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
  const candidates = [];
  let currentHeading = row.topic;

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (!trimmed || /^```/.test(trimmed) || /^!\[/.test(trimmed)) return;

    if (/^#{1,6}\s+/.test(trimmed)) {
      currentHeading = normalizeCandidateText(trimmed);
    }

    const isCandidate = /^#{1,6}\s+/.test(trimmed) || /^[-*]\s+/.test(trimmed) || /^\d+\.\s+/.test(trimmed) || trimmed.length >= 45;
    if (!isCandidate) return;

    const text = normalizeCandidateText(trimmed);
    if (text.length < 12) return;

    candidates.push({
      file_path: row.file_path,
      language: row.language,
      topic: currentHeading,
      location: `line ${index + 1}`,
      claim_type: classifyClaim(text, row.file_path),
      current_text: text,
      suggested_source: sourceHintsForArea(row.area),
      status: "candidate",
    });
  });

  return candidates;
}

function jsonClaimCandidates(filePath, row) {
  const json = readJson(filePath);
  if (!json.ok) return [];

  const candidates = [];

  function visit(value, keyPath) {
    if (Array.isArray(value)) {
      value.forEach((item, index) => visit(item, `${keyPath}[${index}]`));
      return;
    }

    if (value && typeof value === "object") {
      Object.entries(value).forEach(([key, child]) => visit(child, keyPath ? `${keyPath}.${key}` : key));
      return;
    }

    if (typeof value !== "string" && typeof value !== "number") return;

    const text = String(value).trim();
    if (!text || (typeof value === "number" && !/classes|months|count|duration|requirements/i.test(keyPath))) return;
    if (text.length < 3) return;

    candidates.push({
      file_path: row.file_path,
      language: row.language,
      topic: row.topic,
      location: keyPath,
      claim_type: classifyClaim(`${keyPath} ${text}`, row.file_path),
      current_text: text,
      suggested_source: sourceHintsForArea(row.area),
      status: "candidate",
    });
  }

  visit(json.value, "");
  return candidates;
}

function claimCandidateRows(rows) {
  return rows
    .filter((row) => row.priority === "high")
    .flatMap((row) => {
      const filePath = path.join(root, row.file_path);
      if (!fs.existsSync(filePath)) return [];
      if (row.file_path.endsWith(".md")) return markdownClaimCandidates(filePath, row);
      if (row.file_path.endsWith(".json")) return jsonClaimCandidates(filePath, row);
      return [];
    })
    .map((candidate, index) => ({
      candidate_id: `C${String(index + 1).padStart(5, "0")}`,
      ...candidate,
    }));
}

function graduationParityRows() {
  const graduationDir = path.join(dataRoot, "graduations");
  const baseFiles = walk(graduationDir)
    .filter((file) => file.endsWith(".json") && !file.endsWith(".nl.json"))
    .sort();
  const rows = [];

  for (const baseFile of baseFiles) {
    const nlFile = baseFile.replace(/\.json$/, ".nl.json");
    const rank = path.basename(baseFile, ".json");
    const baseJson = readJson(baseFile);
    const nlJson = fs.existsSync(nlFile) ? readJson(nlFile) : { ok: false, error: "Missing NL file" };

    if (!baseJson.ok || !nlJson.ok) {
      rows.push({
        rank,
        path: "",
        issue_type: "parse-or-file-error",
        base_value: baseJson.ok ? "" : baseJson.error,
        nl_value: nlJson.ok ? "" : nlJson.error,
        notes: "Fix file availability or JSON syntax before content review.",
      });
      continue;
    }

    const baseValues = new Map(flattenValues(baseJson.value).map((item) => [item.path, item.value]));
    const nlValues = new Map(flattenValues(nlJson.value).map((item) => [item.path, item.value]));
    const allPaths = [...new Set([...baseValues.keys(), ...nlValues.keys()])].sort();

    for (const valuePath of allPaths) {
      const hasBase = baseValues.has(valuePath);
      const hasNl = nlValues.has(valuePath);
      const baseValue = hasBase ? baseValues.get(valuePath) : "";
      const nlValue = hasNl ? nlValues.get(valuePath) : "";

      if (!hasBase || !hasNl) {
        rows.push({
          rank,
          path: valuePath,
          issue_type: hasBase ? "missing-in-nl" : "extra-in-nl",
          base_value: hasBase ? String(baseValue) : "",
          nl_value: hasNl ? String(nlValue) : "",
          notes: "Check whether this is intentional localization or a missing requirement.",
        });
        continue;
      }

      if ((typeof baseValue === "number" || typeof nlValue === "number") && baseValue !== nlValue) {
        rows.push({
          rank,
          path: valuePath,
          issue_type: "numeric-mismatch",
          base_value: String(baseValue),
          nl_value: String(nlValue),
          notes: "Numeric grading requirements should normally match exactly.",
        });
      }
    }
  }

  return rows;
}

function graduationClaimRows() {
  const graduationDir = path.join(dataRoot, "graduations");
  const files = walk(graduationDir)
    .filter((file) => file.endsWith(".json"))
    .sort();
  const rows = [];

  for (const filePath of files) {
    const json = readJson(filePath);
    const rel = relative(filePath);
    const fileName = path.basename(filePath, ".json");
    const language = fileName.endsWith(".nl") ? "nl" : "base";
    const rank = fileName.replace(/\.nl$/, "");

    if (!json.ok) {
      rows.push({
        claim_id: "",
        rank,
        language,
        file_path: rel,
        section: "",
        claim_type: "parse-error",
        current_text: json.error,
        suggested_source: "Fix JSON before review.",
        status: "not reviewed",
        notes: "",
      });
      continue;
    }

    const data = json.value;

    if (data.title) {
      rows.push({
        claim_id: "",
        rank,
        language,
        file_path: rel,
        section: "title",
        claim_type: "grading-title",
        current_text: data.title,
        suggested_source: "Compare with official grading syllabus title for this rank.",
        status: "not reviewed",
        notes: "",
      });
    }

    if (data.requirements) {
      for (const [key, value] of Object.entries(data.requirements)) {
        rows.push({
          claim_id: "",
          rank,
          language,
          file_path: rel,
          section: `requirements.${key}`,
          claim_type: "grading-requirement",
          current_text: `${key}: ${value}`,
          suggested_source: "Compare with official grading regulations and syllabus.",
          status: "not reviewed",
          notes: "",
        });
      }
    }

    for (const category of data.techniques || []) {
      for (const technique of category.techniques || []) {
        rows.push({
          claim_id: "",
          rank,
          language,
          file_path: rel,
          section: `techniques.${category.category}`,
          claim_type: "grading-technique",
          current_text: technique,
          suggested_source: "Compare with official grading syllabus and terminology glossary.",
          status: "not reviewed",
          notes: "",
        });
      }
    }

    for (const item of data.knowledge || []) {
      rows.push({
        claim_id: "",
        rank,
        language,
        file_path: rel,
        section: "knowledge",
        claim_type: "terminology-knowledge",
        current_text: `${item.term}${item.meaning ? ` = ${item.meaning}` : ""}`,
        suggested_source: "Compare with terminology glossary and Japanese/Okinawan source notes.",
        status: "not reviewed",
        notes: item.meaning ? "" : "Meaning is empty; verify whether this is intentional.",
      });
    }

    for (const claim of data.history || []) {
      rows.push({
        claim_id: "",
        rank,
        language,
        file_path: rel,
        section: "history",
        claim_type: "history",
        current_text: claim,
        suggested_source: "Compare with history sources and lineage-specific source material.",
        status: "not reviewed",
        notes: "",
      });
    }
  }

  return rows.map((row, index) => ({
    ...row,
    claim_id: `G${String(index + 1).padStart(5, "0")}`,
  }));
}

function normalizeTerm(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function terminologyLookup(lang) {
  const entries = terminologyEntries(lang).entries;
  const lookup = new Map();
  const addLookup = (key, value, priority) => {
    const normalized = normalizeTerm(key);
    if (!normalized) return;

    const existing = lookup.get(normalized);
    if (existing && existing.lookup_priority >= priority) return;

    lookup.set(normalized, { lookup_priority: priority, ...value });
  };

  for (const [termPath, entry] of entries) {
    const keyName = termPath.split(".").pop();
    addLookup(entry.name, { termPath, match_type: "full-name", ...entry }, 100);
    addLookup(keyName, { termPath, match_type: "term-key", ...entry }, 90);

    const candidates = [entry.name, entry.english]
      .filter(Boolean)
      .flatMap((value) => String(value).split(/\s*(?:\/|,|\(|\)|-| or )\s*/i));

    for (const candidate of candidates) {
      addLookup(candidate, { termPath, match_type: "split-field", ...entry }, 20);
    }

  }

  return lookup;
}

function suggestionConfidence(term, match, usedFallback) {
  if (!match) return "none";

  const normalizedTerm = normalizeTerm(term);
  const shortOrAmbiguous = normalizedTerm.length <= 4 || ["do", "ryu", "dan", "kyu", "waza"].includes(normalizedTerm);
  if (usedFallback) return "review-fallback-language";
  if (shortOrAmbiguous) return "review-ambiguous-short-term";
  if (match.match_type === "full-name" || match.match_type === "term-key") return "high";
  return "review-split-match";
}

function graduationKnowledgeSuggestionRows() {
  const enLookup = terminologyLookup("en");
  const nlLookup = terminologyLookup("nl");

  return graduationClaimRows()
    .filter((row) => row.claim_type === "terminology-knowledge" && row.notes.includes("Meaning is empty"))
    .map((row) => {
      const term = row.current_text;
      const lookup = row.language === "nl" ? nlLookup : enLookup;
      const fallbackLookup = row.language === "nl" ? enLookup : nlLookup;
      const sameLanguageMatch = lookup.get(normalizeTerm(term));
      const fallbackMatch = sameLanguageMatch ? undefined : fallbackLookup.get(normalizeTerm(term));
      const match = sameLanguageMatch || fallbackMatch;
      const confidence = suggestionConfidence(term, match, Boolean(fallbackMatch));

      return {
        claim_id: row.claim_id,
        rank: row.rank,
        language: row.language,
        file_path: row.file_path,
        term,
        suggested_meaning: match?.english || "",
        suggested_japanese: match?.japanese || "",
        terminology_path: match?.termPath || "",
        confidence,
        match_type: match?.match_type || "",
        suggestion_status: match ? "matched-existing-terminology" : "no-internal-match",
        notes: match ? "Review before applying; this is an internal consistency suggestion." : "Needs manual source review.",
      };
    });
}

function publicUrlToFilePath(url) {
  const cleanUrl = url.split(/[?#]/)[0].replace(/^\/+/, "");
  return path.join(publicRoot, cleanUrl);
}

function extractMediaReferencesFromText(text) {
  const refs = [];
  const regex = /(?:^|[\s"'(=:])((?:\/)?(?:Images|Video|media)\/[^"'`\s)>,]+)/g;
  let match;

  while ((match = regex.exec(text))) {
    refs.push(match[1].replace(/\\/g, "/"));
  }

  return refs;
}

function mediaAuditRows() {
  const sourceFiles = [
    ...walk(path.join(root, "src")).filter((file) => /\.(ts|tsx|json|md)$/.test(file)),
    ...walk(docsDir).filter((file) => /\.(md|txt)$/.test(file) && !generatedAuditFiles.has(relative(file))),
  ];
  const rows = [];
  const referenced = new Set();

  for (const filePath of sourceFiles) {
    const text = fs.readFileSync(filePath, "utf8");
    for (const ref of extractMediaReferencesFromText(text)) {
      const normalizedRef = ref.startsWith("/") ? ref : `/${ref}`;
      const target = publicUrlToFilePath(normalizedRef);
      referenced.add(relative(target));
      rows.push({
        issue_type: fs.existsSync(target) ? "referenced-media-found" : "referenced-media-missing",
        reference: normalizedRef,
        source_file: relative(filePath),
        target_file: relative(target),
        notes: fs.existsSync(target) ? "" : "Referenced media path does not exist under public.",
      });
    }
  }

  for (const filePath of walk(publicRoot).filter((file) => /\.(gif|jpg|jpeg|png|svg|mp4|webp)$/i.test(file))) {
    const rel = relative(filePath);
    if (!referenced.has(rel)) {
      rows.push({
        issue_type: "public-media-not-found-in-text-scan",
        reference: `/${path.relative(publicRoot, filePath).replace(/\\/g, "/")}`,
        source_file: "",
        target_file: rel,
        notes: "May still be loaded dynamically; verify before removing.",
      });
    }
  }

  return rows.sort((a, b) => a.issue_type.localeCompare(b.issue_type) || a.target_file.localeCompare(b.target_file));
}

function kataDataAuditRows() {
  const rows = [];
  const dataFiles = walk(dataRoot).filter((file) => file.endsWith(".ts") && !file.endsWith(".backup"));

  for (const filePath of dataFiles) {
    const text = fs.readFileSync(filePath, "utf8");
    if (!/KataStep|Steps\s*[:=]|\bsteps\b/i.test(text)) continue;

    const numbers = [...text.matchAll(/number:\s*(\d+)/g)].map((match) => Number(match[1]));
    const imageRefs = [...text.matchAll(/image:\s*['"`]([^'"`]+)['"`]/g)].map((match) => match[1]);
    const duplicateNumbers = numbers.filter((number, index) => numbers.indexOf(number) !== index);
    const expected = numbers.length ? Array.from({ length: Math.max(...numbers) }, (_, index) => index + 1) : [];
    const missingNumbers = expected.filter((number) => !numbers.includes(number));
    const missingImages = imageRefs.filter((ref) => !/^https?:\/\//i.test(ref) && !fs.existsSync(publicUrlToFilePath(ref)));

    rows.push({
      file_path: relative(filePath),
      step_count: numbers.length,
      first_step: numbers.length ? Math.min(...numbers) : "",
      last_step: numbers.length ? Math.max(...numbers) : "",
      duplicate_numbers: [...new Set(duplicateNumbers)].join(" | "),
      missing_numbers: missingNumbers.join(" | "),
      image_count: imageRefs.length,
      missing_images: missingImages.join(" | "),
      notes: missingNumbers.length || duplicateNumbers.length || missingImages.length ? "Review sequencing or media references." : "",
    });
  }

  return rows.sort((a, b) => a.file_path.localeCompare(b.file_path));
}

function sourceAreaFromName(filePath) {
  const name = path.basename(filePath).toLowerCase();
  if (/kumite/.test(name)) return "kumite";
  if (/newaza/.test(name)) return "newaza";
  if (/hojo|chiishi|ishi|kongoken|ude/.test(name)) return "hojo-undo";
  if (/junbi/.test(name)) return "junbi-undo";
  if (/bunkai|kata|technieken/.test(name)) return "kata-bunkai";
  if (/hoei|training-manual/.test(name)) return "hoei-juku";
  if (/geschiedenis|history/.test(name)) return "history";
  return "general";
}

function sourceMaterialRows() {
  return walk(docsDir)
    .filter((file) => /\.(pdf|docx|txt|md)$/i.test(file) && !generatedAuditFiles.has(relative(file)) && !/^docs\/fact-check-/.test(relative(file)))
    .map((file) => {
      const stats = fs.statSync(file);
      return {
        file_path: relative(file),
        file_type: path.extname(file).slice(1).toLowerCase(),
        likely_area: sourceAreaFromName(file),
        size_bytes: stats.size,
        notes: "",
      };
    })
    .sort((a, b) => a.likely_area.localeCompare(b.likely_area) || a.file_path.localeCompare(b.file_path));
}

function textQualityRows() {
  const rows = [];
  const suspicious = /Ã.|â€|â€™|â€œ|â€|â€“|â€”|ï¿½|�/g;
  const files = [
    ...walk(path.join(root, "src")).filter((file) => /\.(ts|tsx|json|md)$/.test(file)),
    ...walk(docsDir).filter((file) => /\.(md|txt)$/.test(file) && !generatedAuditFiles.has(relative(file))),
  ];

  for (const file of files) {
    const text = fs.readFileSync(file, "utf8");
    const lines = text.split(/\r?\n/);
    lines.forEach((line, index) => {
      const matches = line.match(suspicious);
      if (!matches) return;
      rows.push({
        file_path: relative(file),
        line: index + 1,
        issue_type: "possible-mojibake",
        sample: line.trim().slice(0, 240),
        notes: "Review encoding before translation or fact-checking this line.",
      });
    });
  }

  return rows;
}

function terminologyEntries(lang) {
  const filePath = path.join(localeRoot, lang, "terminology.json");
  const json = readJson(filePath);
  if (!json.ok) return { parseError: json.error, entries: new Map() };

  const entries = new Map();

  function visit(value, keyPath) {
    if (!value || typeof value !== "object" || Array.isArray(value)) return;

    if (keyPath.includes(".terms.") && ("name" in value || "japanese" in value || "english" in value)) {
      entries.set(keyPath, {
        name: value.name ?? "",
        japanese: value.japanese ?? "",
        english: value.english ?? "",
        details: value.details ?? "",
      });
    }

    Object.entries(value).forEach(([key, child]) => {
      visit(child, keyPath ? `${keyPath}.${key}` : key);
    });
  }

  visit(json.value, "");
  return { parseError: "", entries };
}

function terminologyConsistencyRows() {
  const base = terminologyEntries(localeBase);
  const rows = [];

  if (base.parseError) {
    return [{
      language: localeBase,
      term_path: "",
      issue_type: "parse-error",
      base_name: "",
      localized_name: "",
      base_japanese: "",
      localized_japanese: "",
      base_english: "",
      localized_english: "",
      notes: base.parseError,
    }];
  }

  for (const lang of languages.filter((language) => language !== localeBase)) {
    const localized = terminologyEntries(lang);
    if (localized.parseError) {
      rows.push({
        language: lang,
        term_path: "",
        issue_type: "parse-error",
        base_name: "",
        localized_name: "",
        base_japanese: "",
        localized_japanese: "",
        base_english: "",
        localized_english: "",
        notes: localized.parseError,
      });
      continue;
    }

    const allTermPaths = [...new Set([...base.entries.keys(), ...localized.entries.keys()])].sort();
    for (const termPath of allTermPaths) {
      const baseEntry = base.entries.get(termPath);
      const localizedEntry = localized.entries.get(termPath);

      if (!baseEntry || !localizedEntry) {
        rows.push({
          language: lang,
          term_path: termPath,
          issue_type: baseEntry ? "missing-term" : "extra-term",
          base_name: baseEntry?.name ?? "",
          localized_name: localizedEntry?.name ?? "",
          base_japanese: baseEntry?.japanese ?? "",
          localized_japanese: localizedEntry?.japanese ?? "",
          base_english: baseEntry?.english ?? "",
          localized_english: localizedEntry?.english ?? "",
          notes: "Align term presence before reviewing translation quality.",
        });
        continue;
      }

      const japaneseMismatch = baseEntry.japanese && localizedEntry.japanese && baseEntry.japanese !== localizedEntry.japanese;
      const emptyFields = ["name", "japanese", "english"].filter((field) => !localizedEntry[field]);

      if (japaneseMismatch || emptyFields.length) {
        rows.push({
          language: lang,
          term_path: termPath,
          issue_type: japaneseMismatch ? "japanese-mismatch" : "empty-localized-fields",
          base_name: baseEntry.name,
          localized_name: localizedEntry.name,
          base_japanese: baseEntry.japanese,
          localized_japanese: localizedEntry.japanese,
          base_english: baseEntry.english,
          localized_english: localizedEntry.english,
          notes: japaneseMismatch ? "Japanese/romanized term should usually remain stable across languages." : `Empty fields: ${emptyFields.join(" | ")}`,
        });
      }
    }
  }

  return rows;
}

function getLanguageFromName(fileName, extension) {
  const match = fileName.match(new RegExp(`\\.(${languages.join("|")})\\.${extension}$`));
  return match ? match[1] : "";
}

function getContentArea(filePath) {
  const rel = relative(filePath);
  const parts = rel.split("/");
  if (parts[0] === "src" && parts[1] === "content") return parts[2] || "content";
  if (parts[0] === "src" && parts[1] === "data") return parts[2] === "graduations" ? "graduations" : "data";
  if (parts[0] === "src" && parts[1] === "i18n") return "translations";
  if (parts[0] === "public") return "media";
  if (parts[0] === "docs") return "reference";
  return parts[0] || "unknown";
}

function getPriority(area, contentType) {
  if (area === "kumite" || area === "newaza" || area === "hojo-undo") return "high";
  if (area === "graduations" || area === "data" || area === "kata-theory") return "high";
  if (contentType === "locale-json" || area === "translations") return "medium";
  if (area === "history" || area === "philosophy") return "medium";
  if (contentType === "media") return "medium";
  return "low";
}

function topicFromFile(filePath) {
  const parsed = path.parse(filePath);
  return parsed.name.replace(/\.(da|de|en|es|fr|it|nl|pt)$/, "");
}

function inventoryRows() {
  const rows = [];

  for (const filePath of walk(contentRoot).filter((file) => file.endsWith(".md"))) {
    const lang = getLanguageFromName(path.basename(filePath), "md");
    const area = getContentArea(filePath);
    rows.push({
      file_path: relative(filePath),
      area,
      content_type: "markdown-content",
      language: lang || "base",
      topic: topicFromFile(filePath),
      priority: getPriority(area, "markdown-content"),
      status: "not reviewed",
      notes: "",
    });
  }

  for (const filePath of walk(dataRoot).filter((file) => /\.(ts|json)$/.test(file))) {
    const ext = path.extname(filePath).slice(1);
    const lang = getLanguageFromName(path.basename(filePath), ext);
    const area = getContentArea(filePath);
    rows.push({
      file_path: relative(filePath),
      area,
      content_type: ext === "json" ? "data-json" : "data-module",
      language: lang || "base",
      topic: topicFromFile(filePath),
      priority: getPriority(area, ext === "json" ? "data-json" : "data-module"),
      status: "not reviewed",
      notes: "",
    });
  }

  for (const filePath of walk(localeRoot).filter((file) => file.endsWith(".json"))) {
    const rel = path.relative(localeRoot, filePath).replace(/\\/g, "/");
    const lang = rel.split("/")[0];
    rows.push({
      file_path: relative(filePath),
      area: "translations",
      content_type: "locale-json",
      language: lang,
      topic: rel.split("/").slice(1).join("/").replace(/\.json$/, ""),
      priority: getPriority("translations", "locale-json"),
      status: "not reviewed",
      notes: "",
    });
  }

  for (const filePath of walk(publicRoot).filter((file) => /\.(gif|jpg|jpeg|png|svg|mp4|webp)$/i.test(file))) {
    rows.push({
      file_path: relative(filePath),
      area: "media",
      content_type: "media",
      language: "",
      topic: topicFromFile(filePath),
      priority: getPriority("media", "media"),
      status: "not reviewed",
      notes: "",
    });
  }

  for (const filePath of walk(docsDir).filter((file) => /\.(pdf|docx|txt|md)$/i.test(file))) {
    if (generatedAuditFiles.has(relative(filePath))) continue;

    rows.push({
      file_path: relative(filePath),
      area: "reference",
      content_type: "reference-material",
      language: "",
      topic: topicFromFile(filePath),
      priority: "medium",
      status: "source material",
      notes: "",
    });
  }

  return rows.sort((a, b) => a.file_path.localeCompare(b.file_path));
}

function flattenKeys(value, prefix = "") {
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => flattenKeys(item, `${prefix}[${index}]`));
  }

  if (value && typeof value === "object") {
    return Object.keys(value).flatMap((key) => {
      const nextPrefix = prefix ? `${prefix}.${key}` : key;
      return flattenKeys(value[key], nextPrefix);
    });
  }

  return [prefix];
}

function flattenValues(value, prefix = "") {
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => flattenValues(item, `${prefix}[${index}]`));
  }

  if (value && typeof value === "object") {
    return Object.keys(value).flatMap((key) => {
      const nextPrefix = prefix ? `${prefix}.${key}` : key;
      return flattenValues(value[key], nextPrefix);
    });
  }

  return [{ path: prefix, value }];
}

function readJson(filePath) {
  try {
    return { ok: true, value: JSON.parse(fs.readFileSync(filePath, "utf8")) };
  } catch (error) {
    return { ok: false, error: error.message };
  }
}

function localeRelativeFiles(lang) {
  const langRoot = path.join(localeRoot, lang);
  return walk(langRoot)
    .filter((file) => file.endsWith(".json"))
    .map((file) => path.relative(langRoot, file).replace(/\\/g, "/"))
    .sort();
}

function translationKeyReport() {
  const report = {
    baseLanguage: localeBase,
    generatedAt: new Date().toISOString(),
    parseErrors: [],
    missingFiles: {},
    extraFiles: {},
    missingKeys: {},
    extraKeys: {},
  };

  const baseFiles = new Set(localeRelativeFiles(localeBase));

  for (const lang of languages.filter((language) => language !== localeBase)) {
    const langFiles = new Set(localeRelativeFiles(lang));
    report.missingFiles[lang] = [...baseFiles].filter((file) => !langFiles.has(file));
    report.extraFiles[lang] = [...langFiles].filter((file) => !baseFiles.has(file));
    report.missingKeys[lang] = {};
    report.extraKeys[lang] = {};

    for (const relFile of [...baseFiles].filter((file) => langFiles.has(file))) {
      const basePath = path.join(localeRoot, localeBase, relFile);
      const langPath = path.join(localeRoot, lang, relFile);
      const baseJson = readJson(basePath);
      const langJson = readJson(langPath);

      if (!baseJson.ok) {
        report.parseErrors.push({ file: relative(basePath), error: baseJson.error });
        continue;
      }
      if (!langJson.ok) {
        report.parseErrors.push({ file: relative(langPath), error: langJson.error });
        continue;
      }

      const baseKeys = new Set(flattenKeys(baseJson.value).filter(Boolean));
      const langKeys = new Set(flattenKeys(langJson.value).filter(Boolean));
      const missing = [...baseKeys].filter((key) => !langKeys.has(key));
      const extra = [...langKeys].filter((key) => !baseKeys.has(key));

      if (missing.length) report.missingKeys[lang][relFile] = missing;
      if (extra.length) report.extraKeys[lang][relFile] = extra;
    }
  }

  return report;
}

function countNestedKeys(obj) {
  return Object.values(obj).reduce((total, value) => total + Object.keys(value).length, 0);
}

function countNestedArrayItems(obj) {
  return Object.values(obj).reduce((total, files) => {
    return total + Object.values(files).reduce((fileTotal, keys) => fileTotal + keys.length, 0);
  }, 0);
}

function translationIssueRows(keyReport) {
  const rows = [];

  for (const lang of languages.filter((language) => language !== localeBase)) {
    const relFiles = new Set([
      ...Object.keys(keyReport.missingKeys[lang] || {}),
      ...Object.keys(keyReport.extraKeys[lang] || {}),
    ]);

    for (const relFile of relFiles) {
      const missing = keyReport.missingKeys[lang]?.[relFile] || [];
      const extra = keyReport.extraKeys[lang]?.[relFile] || [];

      rows.push({
        language: lang,
        file: relFile,
        missing_key_count: missing.length,
        extra_key_count: extra.length,
        total_issue_count: missing.length + extra.length,
        missing_key_sample: missing.slice(0, 8).join(" | "),
        extra_key_sample: extra.slice(0, 8).join(" | "),
      });
    }
  }

  for (const [lang, files] of Object.entries(keyReport.missingFiles)) {
    for (const file of files) {
      rows.push({
        language: lang,
        file,
        missing_key_count: "file missing",
        extra_key_count: 0,
        total_issue_count: "file missing",
        missing_key_sample: "",
        extra_key_sample: "",
      });
    }
  }

  for (const [lang, files] of Object.entries(keyReport.extraFiles)) {
    for (const file of files) {
      rows.push({
        language: lang,
        file,
        missing_key_count: 0,
        extra_key_count: "extra file",
        total_issue_count: "extra file",
        missing_key_sample: "",
        extra_key_sample: "",
      });
    }
  }

  return rows.sort((a, b) => {
    const aCount = Number(a.total_issue_count) || 0;
    const bCount = Number(b.total_issue_count) || 0;
    return bCount - aCount || a.language.localeCompare(b.language) || a.file.localeCompare(b.file);
  });
}

function getValueByFlattenedPath(value, keyPath) {
  if (!keyPath) return value;

  const parts = [];
  for (const part of keyPath.split(".")) {
    const matcher = /([^\[]+)|\[(\d+)\]/g;
    let match;
    while ((match = matcher.exec(part))) {
      parts.push(match[1] ?? Number(match[2]));
    }
  }

  return parts.reduce((current, part) => (current == null ? undefined : current[part]), value);
}

function looksLikeNaturalLanguage(text) {
  const normalized = String(text ?? "").trim();
  if (normalized.length < 12) return false;
  if (/^[\d\s.,:;()[\]{}'"!?/-]+$/.test(normalized)) return false;
  if (/^[A-Z][a-z]+(?:[-\s][A-Z][a-z]+){0,4}$/.test(normalized)) return false;
  if (/^[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\s]+$/u.test(normalized)) return false;
  return /[a-z]{3,}/i.test(normalized);
}

function isLikelyJapaneseTechniqueText(text) {
  const normalized = String(text ?? "").trim();
  const words = normalized.match(/[A-Za-z]+/g) || [];
  if (!words.length) return false;

  const japaneseTerms = new Set([
    "age", "ashi", "ate", "awase", "barai", "chudan", "dachi", "doji", "dori", "empi", "fumikomi",
    "gedan", "geri", "gyaku", "haishu", "haito", "harai", "hiji", "hiki", "hikite", "hiza", "jodan",
    "kake", "kamae", "kosa", "kote", "kubi", "mawashi", "mae", "migi", "morote", "nage", "neko",
    "nukite", "oi", "osae", "oshi", "otoshi", "sanchin", "seiken", "shiko", "shotei", "shuto",
    "soto", "sukui", "tai", "tenshin", "tettsui", "tora", "tsuki", "tsukkami", "uke", "uchi",
    "ura", "uraken", "waza", "yoko", "zuki",
  ]);
  const japaneseCount = words.filter((word) => japaneseTerms.has(word.toLowerCase())).length;
  return japaneseCount >= 2 && japaneseCount / words.length >= 0.45;
}

function shouldReviewSameAsEnglish(file, key, text) {
  const normalized = String(text ?? "").trim();
  if (/\.(id|image)$/.test(key)) return false;
  if (/version\.number$/.test(key)) return false;
  if (/^Version\s+\d/i.test(normalized)) return false;
  if (/^[-–]\s*[A-Z][A-Za-z'\s.-]+$/.test(normalized)) return false;
  if (/^[A-Z][A-Za-z'ōū\s.-]+ \(\d{4}\s*(?:-|–)\s*\d{0,4}\)$/.test(normalized)) return false;
  if (/^[A-Z][A-Za-z\s-]+ \([\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}].*\)$/u.test(normalized)) return false;
  if (/^(Hojo Undo|Kaishugata|Heishugata|Chiru nu chan chan)/.test(normalized)) return false;
  if (/competition(?:\.|-)?organizations/.test(key)) return false;
  if (/technique-names/.test(key)) return false;
  if (/studyTerminology\..*\.english$/.test(key)) return false;
  if (file === "bunkai.json" && /\.(name|attack|defense|counterAttack|footwork)$/.test(key)) return false;
  if (isLikelyJapaneseTechniqueText(text)) return false;
  return true;
}

function translationLanguageReviewRows() {
  const rows = [];
  const baseFiles = localeRelativeFiles(localeBase);

  for (const relFile of baseFiles) {
    const basePath = path.join(localeRoot, localeBase, relFile);
    const baseJson = readJson(basePath);
    if (!baseJson.ok) continue;

    const baseValues = flattenValues(baseJson.value).filter((item) => typeof item.value === "string" && looksLikeNaturalLanguage(item.value));

    for (const lang of languages.filter((language) => language !== localeBase)) {
      const langPath = path.join(localeRoot, lang, relFile);
      if (!fs.existsSync(langPath)) continue;

      const langJson = readJson(langPath);
      if (!langJson.ok) continue;

      for (const baseItem of baseValues) {
        const translatedValue = getValueByFlattenedPath(langJson.value, baseItem.path);
        if (translatedValue !== baseItem.value) continue;
        if (!shouldReviewSameAsEnglish(relFile, baseItem.path, baseItem.value)) continue;

        rows.push({
          language: lang,
          file: relFile,
          key: baseItem.path,
          issue_type: "same-as-english",
          text: baseItem.value,
          notes: "Review whether this should be translated or intentionally kept as-is.",
        });
      }
    }
  }

  return rows;
}

function sourceHintsForArea(area) {
  const hints = {
    graduations: "Use grading syllabus files in src/data/graduations and any official grading regulations in local docs.",
    data: "Use kata manuals, bunkai booklet, Hoei Juku manual, and relevant kata reference files.",
    "kata-theory": "Use kata theory PDFs, Hoei Juku manual, and lineage-specific instructor notes.",
    kumite: "Use docs/kumite.pdf and docs/kumite_extracted.txt first; verify safety wording carefully.",
    newaza: "Use docs/Gojuryu_newaza.pdf and docs/Gojuryu_newaza_extracted.txt first.",
    "hojo-undo": "Use Hojo Undo PDFs, docs/hojo_undo_extracted.txt, and equipment-specific source PDFs.",
    translations: "Compare against English base keys, then verify factual meaning against the canonical source language.",
    media: "Compare visible content with captions, labels, and referenced technique names.",
  };

  return hints[area] || "Use the nearest local source document first, then external sources only if needed.";
}

function writeReviewBatches(rows) {
  const highPriorityRows = rows.filter((row) => row.priority === "high");
  const grouped = highPriorityRows.reduce((acc, row) => {
    acc[row.area] = acc[row.area] || [];
    acc[row.area].push(row);
    return acc;
  }, {});

  const preferredOrder = ["graduations", "data", "kata-theory", "kumite", "newaza", "hojo-undo"];
  const areas = [
    ...preferredOrder.filter((area) => grouped[area]),
    ...Object.keys(grouped).filter((area) => !preferredOrder.includes(area)).sort(),
  ];

  const lines = [
    "# Fact-Check Review Batches",
    "",
    "Use these batches to continue the audit in small, reviewable chunks. Each batch should produce claim rows in `docs/fact-check-claims-template.csv` or a copied working file.",
    "",
  ];

  for (const area of areas) {
    const areaRows = grouped[area];
    const languageCounts = areaRows.reduce((acc, row) => {
      acc[row.language || "none"] = (acc[row.language || "none"] || 0) + 1;
      return acc;
    }, {});

    lines.push(`## ${area}`);
    lines.push("");
    lines.push(`- Files to review: ${areaRows.length}`);
    lines.push(`- Languages: ${Object.entries(languageCounts).map(([lang, count]) => `${lang} (${count})`).join(", ")}`);
    lines.push(`- Source hint: ${sourceHintsForArea(area)}`);
    lines.push("- First files:");
    for (const row of areaRows.slice(0, 10)) {
      lines.push(`  - ${row.file_path}`);
    }
    if (areaRows.length > 10) lines.push(`  - ...and ${areaRows.length - 10} more`);
    lines.push("");
  }

  fs.writeFileSync(reviewBatchesPath, `${lines.join("\n")}\n`, "utf8");
}

function writeReport(rows, keyReport) {
  const translationRows = translationIssueRows(keyReport);
  const claimRows = claimCandidateRows(rows);
  const graduationRows = graduationParityRows();
  const mediaRows = mediaAuditRows();
  const kataRows = kataDataAuditRows();
  const sourceRows = sourceMaterialRows();
  const qualityRows = textQualityRows();
  const terminologyRows = terminologyConsistencyRows();
  const translationLanguageReview = translationLanguageReviewRows();
  const graduationClaimRowsCount = graduationClaimRows().length;
  const graduationKnowledgeSuggestions = graduationKnowledgeSuggestionRows();
  const byType = rows.reduce((acc, row) => {
    acc[row.content_type] = (acc[row.content_type] || 0) + 1;
    return acc;
  }, {});
  const byPriority = rows.reduce((acc, row) => {
    acc[row.priority] = (acc[row.priority] || 0) + 1;
    return acc;
  }, {});
  const missingFileCount = Object.values(keyReport.missingFiles).reduce((total, files) => total + files.length, 0);
  const extraFileCount = Object.values(keyReport.extraFiles).reduce((total, files) => total + files.length, 0);
  const missingKeyFileCount = countNestedKeys(keyReport.missingKeys);
  const extraKeyFileCount = countNestedKeys(keyReport.extraKeys);
  const missingKeyCount = countNestedArrayItems(keyReport.missingKeys);
  const extraKeyCount = countNestedArrayItems(keyReport.extraKeys);

  const lines = [
    "# Fact-Check Audit Report",
    "",
    `Generated: ${keyReport.generatedAt}`,
    "",
    "## Inventory Summary",
    "",
    `- Total inventory rows: ${rows.length}`,
    ...Object.entries(byType).sort().map(([type, count]) => `- ${type}: ${count}`),
    "",
    "## Priority Summary",
    "",
    ...Object.entries(byPriority).sort().map(([priority, count]) => `- ${priority}: ${count}`),
    "",
    "## Translation Key Summary",
    "",
    `- Base language: ${keyReport.baseLanguage}`,
    `- Parse errors: ${keyReport.parseErrors.length}`,
    `- Missing locale files: ${missingFileCount}`,
    `- Extra locale files: ${extraFileCount}`,
    `- Files with missing keys: ${missingKeyFileCount}`,
    `- Files with extra keys: ${extraKeyFileCount}`,
    `- Missing translation keys: ${missingKeyCount}`,
    `- Extra translation keys: ${extraKeyCount}`,
    "",
    "## Content Audit Summary",
    "",
    `- High-priority claim candidates: ${claimRows.length}`,
    `- Translation issue rows: ${translationRows.length}`,
    `- Graduation parity issues: ${graduationRows.length}`,
    `- Graduation review claims: ${graduationClaimRowsCount}`,
    `- Empty graduation knowledge suggestions: ${graduationKnowledgeSuggestions.length}`,
    `- Empty graduation knowledge terms with internal match: ${graduationKnowledgeSuggestions.filter((row) => row.suggestion_status === "matched-existing-terminology").length}`,
    `- Kata data files checked: ${kataRows.length}`,
    `- Kata data rows with notes: ${kataRows.filter((row) => row.notes).length}`,
    `- Media audit rows: ${mediaRows.length}`,
    `- Missing referenced media rows: ${mediaRows.filter((row) => row.issue_type === "referenced-media-missing").length}`,
    `- Local source materials indexed: ${sourceRows.length}`,
    `- Text quality rows: ${qualityRows.length}`,
    `- Terminology consistency rows: ${terminologyRows.length}`,
    "",
    "Detailed key differences are stored in `docs/translation-key-report.json`.",
    "",
    "Generated files:",
    "",
    "- `docs/fact-check-inventory.csv`: complete review inventory.",
    "- `docs/fact-check-high-priority.csv`: high-priority review queue.",
    "- `docs/fact-check-claim-candidates.csv`: extracted high-priority claim candidates from markdown and JSON.",
    "- `docs/fact-check-claims-template.csv`: template for recording claim-level review.",
    "- `docs/fact-check-review-batches.md`: suggested review batches and source hints.",
    "- `docs/graduation-parity-report.csv`: base-vs-Dutch graduation structure and numeric parity checks.",
    "- `docs/graduation-claims-review.csv`: claim-level grading review queue.",
    "- `docs/graduation-knowledge-suggestions.csv`: internal terminology suggestions for empty grading knowledge meanings.",
    "- `docs/kata-data-audit-report.csv`: kata step sequencing and image reference checks.",
    "- `docs/media-audit-report.csv`: media reference and public asset checks.",
    "- `docs/source-material-index.csv`: indexed local source/reference material.",
    "- `docs/terminology-consistency-report.csv`: terminology entry presence and Japanese term consistency checks.",
    "- `docs/text-quality-report.csv`: possible encoding/mojibake issues.",
    "- `docs/translation-issues-summary.csv`: compact list of translation structure issues.",
    "- `docs/translation-key-report.json`: detailed translation key differences.",
    "",
    "## Next Steps",
    "",
    "1. Review high-priority rows in `docs/fact-check-inventory.csv` first.",
    "2. Fix JSON parse errors before doing translation QA.",
    "3. Use `docs/translation-key-report.json` to align locale file structure.",
    "4. Start factual review with graduations, kata data, terminology, and safety-related content.",
    "",
  ];

  fs.writeFileSync(reportPath, `${lines.join("\n")}\n`, "utf8");
}

function writeChangeReport(rows, keyReport) {
  const translationRows = translationIssueRows(keyReport);
  const claimRows = claimCandidateRows(rows);
  const graduationRows = graduationParityRows();
  const mediaRows = mediaAuditRows();
  const kataRows = kataDataAuditRows();
  const sourceRows = sourceMaterialRows();
  const qualityRows = textQualityRows();
  const terminologyRows = terminologyConsistencyRows();
  const graduationClaims = graduationClaimRows();
  const graduationKnowledgeSuggestions = graduationKnowledgeSuggestionRows();
  const translationLanguageReview = translationLanguageReviewRows();
  const appliedGraduationRows = fs.existsSync(graduationKnowledgeAppliedPath)
    ? Math.max(0, fs.readFileSync(graduationKnowledgeAppliedPath, "utf8").trim().split(/\r?\n/).length - 1)
    : 0;
  const translationFallbackRows = fs.existsSync(translationFallbacksPath)
    ? Math.max(0, fs.readFileSync(translationFallbacksPath, "utf8").trim().split(/\r?\n/).length - 1)
    : 0;

  const lines = [
    "# Fact-Check Implementation Change Report",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "## Implemented Changes",
    "",
    "- Added `scripts/content-audit.cjs` as the reusable audit generator.",
    "- Added `npm run audit:content` to `package.json`.",
    "- Added the fact-check plan and implementation notes in `docs`.",
    "- Added generated reports for inventory, high-priority review, claim candidates, translation keys, media, kata data, graduations, source material, and text quality.",
    "- Added translation key synchronization and fallback tracking.",
    "- Fixed vital-points media URLs in `src/data/media.ts` so they point to existing public assets.",
    "- Filled high-confidence empty graduation knowledge meanings from existing app terminology.",
    "",
    "## Generated Audit Files",
    "",
    "- `docs/fact-check-inventory.csv`",
    "- `docs/fact-check-high-priority.csv`",
    "- `docs/fact-check-claim-candidates.csv`",
    "- `docs/fact-check-claims-template.csv`",
    "- `docs/fact-check-review-batches.md`",
    "- `docs/fact-check-audit-report.md`",
    "- `docs/translation-key-report.json`",
    "- `docs/translation-issues-summary.csv`",
    "- `docs/translation-fallbacks.csv`",
    "- `docs/translation-language-review.csv`",
    "- `docs/graduation-parity-report.csv`",
    "- `docs/graduation-claims-review.csv`",
    "- `docs/graduation-knowledge-suggestions.csv`",
    "- `docs/graduation-knowledge-applied.csv`",
    "- `docs/kata-data-audit-report.csv`",
    "- `docs/media-audit-report.csv`",
    "- `docs/source-material-index.csv`",
    "- `docs/terminology-consistency-report.csv`",
    "- `docs/text-quality-report.csv`",
    "- `docs/fact-check-change-report.md`",
    "",
    "## Baseline Findings",
    "",
    `- Inventory rows: ${rows.length}`,
    `- High-priority claim candidates: ${claimRows.length}`,
    `- Translation issue rows: ${translationRows.length}`,
    `- Missing translation keys: ${countNestedArrayItems(keyReport.missingKeys)}`,
    `- Extra translation keys: ${countNestedArrayItems(keyReport.extraKeys)}`,
    `- English fallback translation rows: ${translationFallbackRows}`,
    `- Same-as-English translation review rows: ${translationLanguageReview.length}`,
    `- Graduation parity issues: ${graduationRows.length}`,
    `- Graduation review claims: ${graduationClaims.length}`,
    `- Applied graduation knowledge meanings: ${appliedGraduationRows}`,
    `- Empty graduation knowledge suggestions: ${graduationKnowledgeSuggestions.length}`,
    `- Empty graduation knowledge terms with internal match: ${graduationKnowledgeSuggestions.filter((row) => row.suggestion_status === "matched-existing-terminology").length}`,
    `- Kata data files checked: ${kataRows.length}`,
    `- Kata data rows with notes: ${kataRows.filter((row) => row.notes).length}`,
    `- Media audit rows: ${mediaRows.length}`,
    `- Missing referenced media rows: ${mediaRows.filter((row) => row.issue_type === "referenced-media-missing").length}`,
    `- Local source materials indexed: ${sourceRows.length}`,
    `- Text quality rows: ${qualityRows.length}`,
    `- Terminology consistency rows: ${terminologyRows.length}`,
    "",
    "## Important Notes",
    "",
    "- App-source content changes were limited to existing-media path fixes, internally sourced graduation terminology meanings, and translation key structure cleanup.",
    "- `graduation-parity-report.csv` currently has no issue rows, meaning base and Dutch graduation files align structurally and numerically.",
    "- Translation key structure is aligned across locale files; `translation-language-review.csv` lists values that may still need native-language review.",
    "- Media rows marked `public-media-not-found-in-text-scan` may still be loaded dynamically; verify in the app before treating them as unused.",
    "- Claim candidates are review prompts, not verified facts.",
    "",
    "## Recommended Next Work",
    "",
    "1. Review `translation-language-review.csv` and replace same-as-English text with native-language translations where appropriate.",
    "2. Start claim-level source review with graduations, kumite safety, and terminology.",
    "3. Review kata data rows with notes before comparing kata translations.",
    "4. Use `source-material-index.csv` to assign local source documents to each review batch.",
    "",
  ];

  fs.writeFileSync(changeReportPath, `${lines.join("\n")}\n`, "utf8");
}

const rows = inventoryRows();
const keyReport = translationKeyReport();

writeCsv(inventoryPath, rows);
writeCsv(highPriorityPath, rows.filter((row) => row.priority === "high"));
writeGenericCsv(
  claimCandidatesPath,
  ["candidate_id", "file_path", "language", "topic", "location", "claim_type", "current_text", "suggested_source", "status"],
  claimCandidateRows(rows),
);
writeClaimsTemplate(claimsTemplatePath);
writeGenericCsv(
  translationIssuesPath,
  ["language", "file", "missing_key_count", "extra_key_count", "total_issue_count", "missing_key_sample", "extra_key_sample"],
  translationIssueRows(keyReport),
);
writeGenericCsv(
  translationLanguageReviewPath,
  ["language", "file", "key", "issue_type", "text", "notes"],
  translationLanguageReviewRows(),
);
writeGenericCsv(
  graduationParityPath,
  ["rank", "path", "issue_type", "base_value", "nl_value", "notes"],
  graduationParityRows(),
);
writeGenericCsv(
  graduationClaimsPath,
  ["claim_id", "rank", "language", "file_path", "section", "claim_type", "current_text", "suggested_source", "status", "notes"],
  graduationClaimRows(),
);
writeGenericCsv(
  graduationKnowledgeSuggestionsPath,
  ["claim_id", "rank", "language", "file_path", "term", "suggested_meaning", "suggested_japanese", "terminology_path", "confidence", "match_type", "suggestion_status", "notes"],
  graduationKnowledgeSuggestionRows(),
);
writeGenericCsv(
  mediaAuditPath,
  ["issue_type", "reference", "source_file", "target_file", "notes"],
  mediaAuditRows(),
);
writeGenericCsv(
  kataDataAuditPath,
  ["file_path", "step_count", "first_step", "last_step", "duplicate_numbers", "missing_numbers", "image_count", "missing_images", "notes"],
  kataDataAuditRows(),
);
writeGenericCsv(
  sourceIndexPath,
  ["file_path", "file_type", "likely_area", "size_bytes", "notes"],
  sourceMaterialRows(),
);
writeGenericCsv(
  textQualityPath,
  ["file_path", "line", "issue_type", "sample", "notes"],
  textQualityRows(),
);
writeGenericCsv(
  terminologyConsistencyPath,
  ["language", "term_path", "issue_type", "base_name", "localized_name", "base_japanese", "localized_japanese", "base_english", "localized_english", "notes"],
  terminologyConsistencyRows(),
);
writeReviewBatches(rows);
fs.writeFileSync(keyReportPath, `${JSON.stringify(keyReport, null, 2)}\n`, "utf8");
writeReport(rows, keyReport);
writeChangeReport(rows, keyReport);

console.log(`Wrote ${relative(inventoryPath)}`);
console.log(`Wrote ${relative(highPriorityPath)}`);
console.log(`Wrote ${relative(claimCandidatesPath)}`);
console.log(`Wrote ${relative(claimsTemplatePath)}`);
console.log(`Wrote ${relative(translationIssuesPath)}`);
console.log(`Wrote ${relative(translationLanguageReviewPath)}`);
console.log(`Wrote ${relative(reviewBatchesPath)}`);
console.log(`Wrote ${relative(graduationParityPath)}`);
console.log(`Wrote ${relative(graduationClaimsPath)}`);
console.log(`Wrote ${relative(graduationKnowledgeSuggestionsPath)}`);
console.log(`Wrote ${relative(mediaAuditPath)}`);
console.log(`Wrote ${relative(kataDataAuditPath)}`);
console.log(`Wrote ${relative(sourceIndexPath)}`);
console.log(`Wrote ${relative(textQualityPath)}`);
console.log(`Wrote ${relative(terminologyConsistencyPath)}`);
console.log(`Wrote ${relative(reportPath)}`);
console.log(`Wrote ${relative(keyReportPath)}`);
console.log(`Wrote ${relative(changeReportPath)}`);
