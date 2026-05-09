const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(dirPath);
    });
}

walk('./src/components', (filePath) => {
    if (!filePath.endsWith('.tsx')) return;
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Scale text opacities up for readability on light themes
    content = content.replace(/\btext-gray-900\/5\b/g, 'text-gray-900/20');
    content = content.replace(/\btext-gray-900\/10\b/g, 'text-gray-900/30');
    content = content.replace(/\btext-gray-900\/20\b/g, 'text-gray-900/40');
    content = content.replace(/\btext-gray-900\/30\b/g, 'text-gray-900/50');
    content = content.replace(/\btext-gray-900\/40\b/g, 'text-gray-900/70');
    content = content.replace(/\btext-gray-900\/50\b/g, 'text-gray-900/80');
    content = content.replace(/\btext-gray-900\/60\b/g, 'text-gray-900/90');
    content = content.replace(/\btext-gray-900\/70\b/g, 'text-gray-900');
    content = content.replace(/\btext-gray-900\/80\b/g, 'text-gray-900');

    fs.writeFileSync(filePath, content);
});
console.log('Opacity scaled');
