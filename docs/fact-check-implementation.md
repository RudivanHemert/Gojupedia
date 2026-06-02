# Fact-Check Implementation Notes

This document describes the first implemented audit tooling for the Gojupedia fact-check and translation review.

## What Exists Now

- `docs/fact-check-plan.md`: the overall audit plan.
- `scripts/content-audit.cjs`: generates the current content inventory and translation key report.
- `docs/fact-check-inventory.csv`: generated inventory of app content, translations, media, data files, and reference material.
- `docs/fact-check-high-priority.csv`: generated queue for the highest-risk review areas.
- `docs/fact-check-claim-candidates.csv`: generated claim candidates extracted from high-priority markdown and JSON.
- `docs/fact-check-claims-template.csv`: template for recording claim-level factual review and source citations.
- `docs/fact-check-review-batches.md`: suggested batches for continuing the audit in practical chunks.
- `docs/graduation-parity-report.csv`: base-vs-Dutch graduation structure and numeric parity checks.
- `docs/graduation-claims-review.csv`: claim-level grading review queue.
- `docs/graduation-knowledge-suggestions.csv`: internal terminology suggestions for empty grading knowledge meanings.
- `docs/graduation-knowledge-applied.csv`: log of high-confidence graduation knowledge meanings applied from existing terminology.
- `docs/kata-data-audit-report.csv`: kata step sequencing and image reference checks.
- `docs/media-audit-report.csv`: media reference and public asset checks.
- `docs/source-material-index.csv`: indexed local source/reference material.
- `docs/terminology-consistency-report.csv`: terminology entry presence and Japanese term consistency checks.
- `docs/text-quality-report.csv`: possible encoding/mojibake issues that can affect translation and review quality.
- `docs/fact-check-audit-report.md`: generated summary report.
- `docs/fact-check-change-report.md`: generated implementation summary and baseline findings.
- `docs/translation-issues-summary.csv`: compact list of translation key issues by language and file.
- `docs/translation-fallbacks.csv`: missing or incompatible translation values filled from English for later native-language review.
- `docs/translation-language-review.csv`: values that are still identical to English and should be reviewed for native-language translation.
- `docs/translation-key-report.json`: generated detailed comparison of locale keys against English.

## How To Run

Use:

```bash
npm run audit:content
```

To align locale JSON structure with English and record fallback text, use:

```bash
npm run sync:translations
```

If `npm` is not available in the current environment, run the script with any local Node.js executable:

```bash
node scripts/content-audit.cjs
```

## Current Audit Baseline

The script currently checks:

- All markdown content in `src/content`.
- All data files in `src/data`.
- All locale JSON files in `src/i18n/locales`.
- Media files in `public`.
- Source/reference files in `docs`.
- Translation file and key parity against `src/i18n/locales/en`.
- High-priority review batches with source hints.
- A compact translation issue summary for triage.
- Same-as-English translation values that may still need native-language review.
- Claim candidates from high-priority markdown and JSON files.
- Graduation parity between base and Dutch grading files.
- Claim-level graduation requirements, techniques, knowledge terms, and history claims.
- Internal terminology matches for empty graduation knowledge meanings.
- Applied high-confidence graduation knowledge meanings, with terminology paths.
- Kata step numbering and image references.
- Media references against files in `public`.
- Local source material grouped by likely review area.
- Terminology entries across languages against the English terminology base.
- Suspicious text encoding patterns.

It does not yet fact-check claims against sources. It prepares the work by showing what needs review and where translation text still needs native-language review.

Use `docs/fact-check-claim-candidates.csv` as the starting queue for individual claims. Copy confirmed items into `docs/fact-check-claims-template.csv` or a working copy, then fill in the exact source, status, and correction notes.

## Next Implementation Steps

1. Review `docs/translation-language-review.csv` and replace same-as-English text with native-language translations where appropriate.
2. Start claim-level source review in `docs/fact-check-claim-candidates.csv`, beginning with graduations, kumite safety, and terminology.
3. Review remaining empty graduation knowledge terms in `docs/graduation-knowledge-suggestions.csv`; only apply terms with a confirmed source.
4. Verify media rows marked as not found in text scan before deciding whether assets are unused.
5. Use `docs/source-material-index.csv` to attach source documents to each review batch.

## Review Workflow

1. Run `npm run audit:content`.
2. Open `docs/fact-check-audit-report.md` for the summary.
3. Use `docs/fact-check-inventory.csv` to choose the next review batch.
4. Use `docs/fact-check-review-batches.md` for the recommended content review order.
5. Use `docs/graduation-parity-report.csv` for the first grading-content pass.
6. Use `docs/graduation-claims-review.csv` to review grading claims one by one.
7. Use `docs/graduation-knowledge-suggestions.csv` to fill empty knowledge meanings only after review.
8. Use `docs/kata-data-audit-report.csv` before reviewing kata step text.
9. Use `docs/media-audit-report.csv` when checking image/video correctness.
10. Use `docs/text-quality-report.csv` to fix encoding issues before translation QA.
11. Use `docs/terminology-consistency-report.csv` before reviewing terminology translations.
12. Use `docs/translation-issues-summary.csv` for translation triage.
13. Use `docs/translation-key-report.json` to fix missing or extra locale keys.
14. Use `docs/translation-language-review.csv` to find English-looking text that still needs proper translation.
15. Record factual corrections with sources before editing app content.
