# Modular Translation Structure

This directory contains the internationalization (i18n) files for the Goju Ryu Wiki application, organized in a modular structure for easier maintenance and updates.

## Structure

The translations are now organized by language and then by section:

```
src/i18n/
├── index.ts                 # Main i18n configuration
├── locales/
│   ├── en/                  # English translations
│   │   ├── common.json      # Common UI elements
│   │   ├── navigation.json  # Navigation labels
│   │   ├── home.json        # Homepage content
│   │   ├── theory.json      # Theory section
│   │   ├── terminology.json # Terminology (largest section)
│   │   ├── history.json     # History content
│   │   ├── practice.json    # Practice section
│   │   ├── study.json       # Study section
│   │   ├── settings.json    # Settings page
│   │   ├── kata.json        # Kata definitions
│   │   ├── bunkai.json      # Bunkai applications
│   │   ├── philosophy.json  # Philosophy content
│   │   └── vitalPoints.json # Vital points
│   ├── de/                  # German translations
│   ├── es/                  # Spanish translations
│   ├── fr/                  # French translations
│   ├── it/                  # Italian translations
│   └── nl/                  # Dutch translations
```

## Benefits

### 1. **Easier Maintenance**
- Each section is in its own file, making it easier to find and update specific content
- Smaller files are easier to work with than large monolithic translation files
- Reduces merge conflicts when multiple people work on translations

### 2. **Better Organization**
- Related translations are grouped together logically
- Clear separation between different app sections
- Easier to identify which translations belong to which features

### 3. **Improved Performance**
- All files are still loaded at startup, maintaining current performance
- Future optimization could implement lazy loading of sections if needed

### 4. **Simplified Translation Workflow**
- Translators can focus on specific sections without being overwhelmed
- Easier to track translation progress per section
- Better suited for translation management tools

## File Descriptions

### Core Files
- **common.json**: Basic UI elements like buttons, error messages, loading states
- **navigation.json**: Main navigation labels and menu items
- **settings.json**: Settings page content including theme and language options

### Content Sections
- **home.json**: Homepage content including hero text and introductions
- **theory.json**: Theory section navigation and basic content
- **practice.json**: Practice section navigation and descriptions
- **study.json**: Study section content for quizzes and learning materials

### Detailed Content
- **terminology.json**: The largest section containing all Japanese terminology with translations, organized by categories (blocks, kicks, punches, stances, etc.)
- **history.json**: Historical content about Goju Ryu development and lineage
- **kata.json**: Kata definitions, steps, and related content
- **bunkai.json**: Bunkai (application) content and analysis
- **philosophy.json**: Philosophy and principles of Goju Ryu
- **vitalPoints.json**: Vital points (pressure points) definitions and interactive content

## How to Update Translations

### Adding New Content
1. Identify which section the new content belongs to
2. Add the translation keys to the appropriate JSON file
3. Update all language files with the new keys
4. The content will be automatically available in the app

### Updating Existing Content
1. Find the relevant section file
2. Update the translation text
3. Ensure consistency across all languages
4. Test the changes in the application

### Adding New Languages
1. Create a new directory under `locales/` with the language code
2. Copy all JSON files from the `en/` directory as templates
3. Translate the content in each file
4. Add the language to the `supportedLanguages` object in `index.ts`

## Technical Implementation

The modular files are combined at runtime using the `combineTranslations` function in `index.ts`. This maintains backward compatibility with the existing translation key structure while providing the benefits of modular organization.

The translation keys remain the same (e.g., `t('common.appName')`, `t('terminology.title')`), so no changes are needed in the React components.

## Migration Notes

- The original large translation files (`en.json`, `de.json`, etc.) are still present for reference
- These can be removed once all translations have been properly migrated to the modular structure
- The new structure is fully functional and ready for use
- All existing translation keys continue to work without modification

## Future Improvements

1. **Lazy Loading**: Implement section-based lazy loading for better performance
2. **Translation Management**: Integrate with translation management tools
3. **Validation**: Add validation to ensure all languages have the same keys
4. **Automation**: Create scripts to help maintain consistency across languages 