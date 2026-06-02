# Gojupedia Fact-Check And Translation Audit Plan

Use this plan to audit all factual information in the app, including translated content. The goal is to verify claims, preserve meaning across languages, document sources, and leave repeatable checks behind for future changes.

## 1. Build The Content Inventory

Create a full audit inventory of all user-facing content sources:

- `src/data`: kata steps, techniques, graduations, study content, quiz data, search data.
- `src/content`: markdown articles for history, philosophy, kata theory, kumite, newaza, hojo undo, kakie, and related sections.
- `src/i18n/locales`: UI text and translated factual content for `da`, `de`, `en`, `es`, `fr`, `it`, `nl`, and `pt`.
- `public/Images` and `public/Video`: media that illustrates kata, stances, blocks, exercises, and vital points.
- `docs`: local PDFs, extracted text, manuals, and reference material.

Recommended audit sheet columns:

- File path
- Page or topic
- Language
- Claim or translation unit
- Claim type
- Current text
- Source checked
- Status
- Notes
- Suggested correction
- Reviewer
- Review date

Suggested statuses:

- `verified`
- `needs correction`
- `ambiguous`
- `source missing`
- `style-specific`
- `translation issue`

## 2. Define Source Priority

Use a consistent source hierarchy:

1. Primary/local school sources: Hoei Juku manuals, internal PDFs, grading syllabi, authored dojo material.
2. Recognized Goju-ryu sources: books, federation materials, historical documents, named instructors, and lineage material.
3. Japanese/Okinawan language references for terminology, kanji, romanization, pronunciation, and literal meanings.
4. Secondary web sources only when primary sources are missing.

For disputed history, lineage, or interpretation claims, record the competing versions instead of forcing a single answer without evidence.

## 3. Audit By Risk Area

Work from highest risk to lowest risk:

1. Safety-critical training content: kumite rules, vital points, throws, newaza, hojo undo, junbi undo.
2. Grading requirements: kyu and dan requirements, terminology expected per grade, kata lists.
3. Kata and bunkai: names, sequences, counts, stance names, movement descriptions, and applications.
4. History and lineage: dates, names, relationships, organizations, founder biographies.
5. Terminology: Japanese terms, translations, spellings, romanization, and category placement.
6. UI and navigation labels: lower factual risk, but important for translation consistency.

## 4. Extract Checkable Claims

Split content into small claims that can be verified independently.

Examples:

- Names: `Chojun Miyagi`, `Kanryo Higaonna`, `Sanchin`.
- Dates: birth and death years, travel dates, founding dates.
- Technical descriptions: stance mechanics, targets, breathing, weight distribution.
- Lists: kata order, grading requirements, required techniques.
- Translation units: whether each target language preserves the source meaning.

For each claim, record the exact source used and the audit status.

## 5. Translation Audit

Use English or Dutch as the canonical base for each section, depending on which source is closest to the original material. Then compare every translated version against that base.

Check for:

- Missing factual content.
- Added claims that are not present in the source.
- Mistranslated karate terms.
- Incorrect Japanese romanization.
- False friends and overly literal translations.
- Inconsistent translation of repeated terms.
- Terms that should remain untranslated, such as `kata`, `bunkai`, `kakie`, `hojo undo`, and `rei`.
- Quiz answers or study cards that no longer match terminology pages.

The translation target is fact-preserving natural language, not word-for-word sameness.

## 6. Create A Terminology And Style Standard

Before changing translated content, create or update a small glossary/style guide.

Include:

- Preferred romanization for style names, kata, stances, techniques, and equipment.
- Capitalization rules.
- Whether macrons or simplified romanization are used.
- Terms that remain in Japanese or Okinawan.
- Language-specific preferred translations for Dutch, German, French, Spanish, Italian, Portuguese, and Danish.
- Known lineage-specific terms used by Hoei Juku or the app.

Use this guide to keep future corrections consistent.

## 7. Run Cross-File Consistency Checks

Add repeatable checks where possible:

- Locale key parity across all languages.
- Missing or empty translations.
- Duplicate terminology entries.
- Conflicting definitions for the same term.
- Kata step counts across language files.
- Graduation requirement parity between English and Dutch.
- Search index entries that no longer match live content.
- Quiz answers that contradict terminology or kata data.

Where automation is not practical, document the manual check and the expected result.

## 8. Verify Media

For each image and video:

- Confirm the asset shows the named stance, technique, kata, exercise, or vital point.
- Confirm captions, labels, and alt text match the media.
- Check whether manual-derived images need attribution or usage notes.
- Flag placeholders, unclear visuals, and mismatched files.

Media issues should be tracked separately from text issues, because they often need a different correction path.

## 9. Apply Corrections In Small Batches

Use small, reviewable batches:

1. Inventory and source mapping.
2. High-risk factual corrections.
3. Kata, bunkai, and grading corrections.
4. Terminology normalization.
5. Translation corrections by language.
6. Media and caption corrections.
7. Automated consistency checks.

For each correction, record:

- Current text.
- Proposed text.
- Reason for change.
- Source citation.
- Files changed.
- Whether the change affects meaning, spelling, terminology, translation, or display only.

## 10. Verify In The App

After each correction batch:

- Run the build.
- Check affected pages in the browser.
- Check language switching for edited pages.
- Check quizzes, study cards, search, and navigation if their source data changed.
- Confirm no locale keys are missing.

## 11. Final Deliverables

At the end of the audit, produce:

- Fact-check report.
- Translation QA report.
- Source list.
- Terminology and style guide.
- List of corrected files.
- List of remaining ambiguous claims.
- List of claims needing instructor or lineage-specific confirmation.
- Optional scripts or checks for future translation and content drift.

## Suggested Review Order

1. `src/data/graduations`
2. `src/data/*kata*.ts` and kata locale files
3. `src/i18n/locales/*/terminology.json`
4. `src/content/history`
5. `src/content/kata-theory`
6. `src/content/kumite`
7. `src/content/newaza`
8. `src/content/hojo-undo`
9. `src/content/philosophy`
10. Remaining UI locale files
11. `public/Images` and `public/Video`

## Notes For Future Reviewers

Do not treat every difference between languages as an error. Some phrasing can differ naturally. Flag only differences that change meaning, add unsupported claims, remove important details, use inconsistent terminology, or make the app harder to understand.

When a claim depends on lineage, school tradition, or instructor interpretation, mark it as `style-specific` and cite the source rather than rewriting it as universal fact.
