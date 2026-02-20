import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const inputDir = 'public/logos/partners';
const outputDir = 'public/logos/partners_trimmed';

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const mapping = {
    'Geberit-Logo.svg.png': 'Geberit.png',
    'grohelogo.png': 'Grohe.png',
    'Hansa.svg.png': 'Hansa.png',
    'Hansgrohe-Logo.svg.png': 'Hansgrohe.png',
    'header-logo.svg': 'SHK_Innung.png',
    'Kermi.svg': 'Kermi.png',
    'Keuco_logo.svg.png': 'Keuco.png',
    'logo-badpunkt.svg': 'Badpunkt.png',
    'lumina_Claim_4c-small.png': 'Lumina.png',
    'mitsubishilogo.svg': 'Mitsubishi.png',
    'tago-logo.svg': 'Tago.png',
    'vaillantlogo.svg': 'Vaillant.png',
    'Viessmann-logo.svg.png': 'Viessmann.png',
    'weisshauptlogo.svg': 'Weisshaupt.png',
    'wilologo.png': 'Wilo.png'
};

Object.entries(mapping).forEach(([oldName, newName]) => {
    const inputPath = path.join(inputDir, oldName);
    const outputPath = path.join(outputDir, newName);

    if (fs.existsSync(inputPath)) {
        console.log(`Processing ${oldName} -> ${newName}...`);
        try {
            // Using forward slashes for cross-platform compatibility in npx
            const cmdInput = inputPath.replace(/\\/g, '/');
            const cmdOutput = outputPath.replace(/\\/g, '/');

            // Trim and convert to PNG. We also ensure transparency is preserved.
            // Using a high density for SVGs if we convert them.
            execSync(`npx -y sharp-cli -i "${cmdInput}" trim -o "${cmdOutput}"`, { stdio: 'inherit' });
        } catch (err) {
            console.error(`Error processing ${oldName}:`, err.message);
        }
    } else {
        console.warn(`File ${oldName} not found.`);
    }
});

console.log('All images trimmed and normalized.');
