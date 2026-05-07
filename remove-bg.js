const sharp = require('sharp');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

// Images with checkerboard backgrounds to fix
const imagesToFix = [
  'baer-reinigung.jpg',
  'baer-hausmeister.jpg',
  'baer-garten.jpg',
  'baer-entruempelung.jpg',
];

async function removeBackground(filename) {
  const inputPath = path.join(publicDir, filename);
  const outputName = filename.replace('.jpg', '.png');
  const outputPath = path.join(publicDir, outputName);

  console.log(`Processing ${filename}...`);

  const image = sharp(inputPath);
  const metadata = await image.metadata();

  // Get raw pixel data with alpha
  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = Buffer.from(data);
  const w = info.width;
  const h = info.height;

  // First pass: identify checkerboard pixels
  // The checkerboard consists of alternating white (~255,255,255) and
  // light grey (~191-204,191-204,191-204) squares, typically 8x8 or 10x10 pixels
  // Strategy: detect pixels that are either very light/white or medium grey,
  // and are part of a repeating pattern

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const r = pixels[idx];
      const g = pixels[idx + 1];
      const b = pixels[idx + 2];

      // Check if pixel is achromatic (grey/white) by checking if R≈G≈B
      const maxC = Math.max(r, g, b);
      const minC = Math.min(r, g, b);
      const spread = maxC - minC;

      // Achromatic pixel (grey/white) with high luminance
      if (spread <= 15) {
        const avg = (r + g + b) / 3;

        // White pixels (>= 240)
        if (avg >= 240) {
          pixels[idx + 3] = 0; // Transparent
        }
        // Light grey checkerboard pixels (180-210 range)
        else if (avg >= 175 && avg <= 215) {
          pixels[idx + 3] = 0; // Transparent
        }
        // Medium grey (could be part of border/edge)
        else if (avg >= 215 && avg < 240) {
          pixels[idx + 3] = 0; // Also make transparent - this is likely checker
        }
      }
    }
  }

  // Second pass: edge cleanup - restore any pixel that's near a non-transparent colored pixel
  // This prevents removing grey that's part of the actual illustration
  const cleaned = Buffer.from(pixels);

  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const idx = (y * w + x) * 4;

      // Only check pixels we made transparent
      if (cleaned[idx + 3] !== 0) continue;

      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const avg = (r + g + b) / 3;

      // Only try to restore actual grey pixels (not white)
      if (avg >= 240) continue;

      // Check 8-connected neighbors in original
      let hasColoredNeighbor = false;
      let coloredCount = 0;

      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (dx === 0 && dy === 0) continue;
          const nIdx = ((y + dy) * w + (x + dx)) * 4;
          const nr = data[nIdx];
          const ng = data[nIdx + 1];
          const nb = data[nIdx + 2];
          const nSpread = Math.max(nr, ng, nb) - Math.min(nr, ng, nb);
          const nAvg = (nr + ng + nb) / 3;

          // If neighbor is a colorful pixel (not grey/white)
          if (nSpread > 25 && nAvg < 200) {
            coloredCount++;
          }
        }
      }

      // If 3+ neighbors are colored, this pixel is likely part of the illustration
      if (coloredCount >= 3) {
        cleaned[idx + 3] = 255; // Restore
      }
    }
  }

  await sharp(cleaned, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  })
    .png({ compressionLevel: 9 })
    .toFile(outputPath);

  console.log(`  -> Saved ${outputName} (${info.width}x${info.height})`);
}

async function main() {
  for (const file of imagesToFix) {
    try {
      await removeBackground(file);
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }
  console.log('Done!');
}

main();
