const fs = require('fs');
const path = require('path');

// Color mappings for dark mode
const colorMappings = {
  'text-gray-800': 'text-foreground',
  'text-stone-800': 'text-foreground',
  'text-gray-600': 'text-muted-foreground',
  'text-stone-600': 'text-muted-foreground',
  'text-gray-900': 'text-foreground',
  'text-stone-900': 'text-foreground',
  'text-gray-400': 'text-muted-foreground',
  'text-stone-400': 'text-muted-foreground',
  'text-gray-500': 'text-muted-foreground',
  'text-stone-500': 'text-muted-foreground',
  'text-gray-700': 'text-foreground',
  'text-stone-700': 'text-foreground',
};

// Files to update
const filesToUpdate = [
  'src/pages/KataTheoryPage.tsx',
  'src/pages/KataPage.tsx',
  'src/pages/KataDetailPage.tsx',
  'src/pages/BunkaiPage.tsx',
  'src/pages/BunkaiDetailPage.tsx',
  'src/pages/StudyDetailPage.tsx',
  'src/pages/SearchPage.tsx',
  'src/pages/PhilosophyPage.tsx',
  'src/pages/philosophy/Respect.tsx',
  'src/pages/philosophy/MindBody.tsx',
  'src/pages/philosophy/KarateDo.tsx',
  'src/pages/philosophy/GojuRyu.tsx',
  'src/pages/philosophy/DojoKun.tsx',
  'src/pages/NotFound.tsx',
  'src/pages/NewazaPage.tsx',
  'src/pages/JunbiUndoPage.tsx',
  'src/pages/GraduationsPage.tsx',
  'src/pages/GradingsPage.tsx',
  'src/pages/terminology/Warmup.tsx',
  'src/pages/terminology/Strikes.tsx',
  'src/pages/terminology/Stances.tsx',
  'src/pages/terminology/Punches.tsx',
  'src/pages/terminology/Kicks.tsx',
  'src/pages/terminology/Blocks.tsx',
  'src/pages/theory/kata/KataTheoryDetailPage.tsx',
  'src/components/media/MediaManager.tsx',
  'src/components/media/MediaGallery.tsx',
  'src/components/ui/page-header.tsx',
  'src/components/theory/TheorySection.tsx',
  'src/components/theory/InteractiveVitalPoints.tsx',
  'src/components/study/StudyCard.tsx',
  'src/components/layout/SidebarLayout.tsx',
  'src/components/learning/InteractiveQuiz.tsx',
  'src/components/history/TimelineSection.tsx',
];

function updateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;

    // Apply color mappings
    for (const [oldColor, newColor] of Object.entries(colorMappings)) {
      const regex = new RegExp(`\\b${oldColor}\\b`, 'g');
      if (regex.test(content)) {
        content = content.replace(regex, newColor);
        updated = true;
      }
    }

    // Special cases for hover states
    content = content.replace(/hover:text-stone-900/g, 'hover:text-foreground');
    content = content.replace(/hover:text-gray-900/g, 'hover:text-foreground');
    content = content.replace(/hover:text-stone-800/g, 'hover:text-foreground');
    content = content.replace(/hover:text-gray-800/g, 'hover:text-foreground');

    if (updated) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated: ${filePath}`);
    } else {
      console.log(`⏭️  No changes needed: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
  }
}

// Update all files
console.log('🔄 Updating dark mode colors...\n');

filesToUpdate.forEach(file => {
  if (fs.existsSync(file)) {
    updateFile(file);
  } else {
    console.log(`⚠️  File not found: ${file}`);
  }
});

console.log('\n✅ Dark mode color update complete!'); 