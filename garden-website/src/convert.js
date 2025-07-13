import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Path setup (assuming script is in src/)
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..'); // Go up from src/ to project root
const inputDir = path.join(projectRoot, 'public/images/gallery');
const outputDir = path.join(projectRoot, 'public/images/gallery_optimized');

// Create output directory if missing
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Process images
fs.readdirSync(inputDir).forEach(async (file) => {
  if (/\.(jpg|png)$/i.test(file)) {
    try {
      const outputFile = file.replace(/\.(jpg|png)$/i, '.webp');
      await sharp(path.join(inputDir, file))
        .webp({ quality: 80 })
        .toFile(path.join(outputDir, outputFile));
      console.log(`✅ Converted ${file} → ${outputFile}`);
    } catch (err) {
      console.error(`❌ Failed ${file}:`, err.message);
    }
  }
});