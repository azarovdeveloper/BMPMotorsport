const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // Simple regex to match: data-i18n="key">fallback<
            // Works for single-line tags
            const regex = /data-i18n="([^"]+)">([^<]*)<\/([^>]+)>/g;
            if (regex.test(content)) {
                modified = true;
                content = content.replace(regex, (match, key, fallback, tag) => {
                    return `>{t('${key}', '${fallback.trim()}')}</${tag}>`;
                });
            }

            // Also for empty tags like <input data-i18n="key" /> ? (none in this app likely)
            
            // Add import if modified
            if (modified) {
                if (!content.includes('useTranslation')) {
                    content = "import { useTranslation } from '../i18n';\n" + content;
                }
                // add const { t } = useTranslation(); inside the component.
                // find the first component declaration: const ComponentName = () => {
                const componentRegex = /const\s+\w+\s*=\s*\([^)]*\)\s*=>\s*{/;
                content = content.replace(componentRegex, match => {
                    return match + "\n    const { t } = useTranslation();";
                });
                
                fs.writeFileSync(fullPath, content);
                console.log('Modified', fullPath);
            }
        }
    }
}

processDir(path.join(__dirname, 'src', 'components'));
