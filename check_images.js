import fs from 'fs';
import path from 'path';

const dir = 'public/logos/partners';
const files = fs.readdirSync(dir);

console.log('File | Size (bytes)');
console.log('---|---');
files.forEach(file => {
    const stats = fs.statSync(path.join(dir, file));
    console.log(`${file} | ${stats.size}`);
});
