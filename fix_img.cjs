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
    
    // reset all img tags
    // `<img ... / \n referrerPolicy="no-referrer">` and similar to regular `<img ... referrerPolicy="no-referrer" />`
    
    // Just find anything starting with <img and ending with >. Then recreate it.
    let updated = content.replace(/<img([\s\S]*?)>/g, (match, g1) => {
        // g1 is the attributes block
        let attrs = g1.replace(/\//g, '').replace(/referrerPolicy="no-referrer"/g, '').trim();
        return `<img ${attrs} referrerPolicy="no-referrer" />`;
    });

    if (content !== updated) {
        fs.writeFileSync(filePath, updated);
        console.log(`Updated ${filePath}`);
    }
});
