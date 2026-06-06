# Fact-Check Audit Report

Generated: 2026-06-04T09:34:18.395Z

## Inventory Summary

- Total inventory rows: 685
- data-json: 22
- data-module: 99
- locale-json: 280
- markdown-content: 147
- media: 98
- reference-material: 39

## Priority Summary

- high: 190
- low: 3
- medium: 492

## Translation Key Summary

- Base language: en
- Parse errors: 0
- Missing locale files: 0
- Extra locale files: 0
- Files with missing keys: 0
- Files with extra keys: 0
- Missing translation keys: 0
- Extra translation keys: 0

## Content Audit Summary

- High-priority claim candidates: 3843
- Translation issue rows: 0
- Graduation parity issues: 0
- Graduation review claims: 756
- Empty graduation knowledge suggestions: 0
- Empty graduation knowledge terms with internal match: 0
- Kata data files checked: 92
- Kata data rows with notes: 0
- Media audit rows: 122
- Missing referenced media rows: 0
- Local source materials indexed: 37
- Text quality rows: 0
- Terminology consistency rows: 0

Detailed key differences are stored in `docs/translation-key-report.json`.

Generated files:

- `docs/fact-check-inventory.csv`: complete review inventory.
- `docs/fact-check-high-priority.csv`: high-priority review queue.
- `docs/fact-check-claim-candidates.csv`: extracted high-priority claim candidates from markdown and JSON.
- `docs/fact-check-claims-template.csv`: template for recording claim-level review.
- `docs/fact-check-review-batches.md`: suggested review batches and source hints.
- `docs/graduation-parity-report.csv`: base-vs-Dutch graduation structure and numeric parity checks.
- `docs/graduation-claims-review.csv`: claim-level grading review queue.
- `docs/graduation-knowledge-suggestions.csv`: internal terminology suggestions for empty grading knowledge meanings.
- `docs/kata-data-audit-report.csv`: kata step sequencing and image reference checks.
- `docs/media-audit-report.csv`: media reference and public asset checks.
- `docs/source-material-index.csv`: indexed local source/reference material.
- `docs/terminology-consistency-report.csv`: terminology entry presence and Japanese term consistency checks.
- `docs/text-quality-report.csv`: possible encoding/mojibake issues.
- `docs/translation-issues-summary.csv`: compact list of translation structure issues.
- `docs/translation-key-report.json`: detailed translation key differences.

## Next Steps

1. No generated structural cleanup reports currently have issue rows.
2. Continue source-backed editorial fact-checking using `docs/fact-check-claim-candidates.csv` and `docs/source-material-index.csv`.

