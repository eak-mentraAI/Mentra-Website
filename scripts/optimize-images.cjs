#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

const PUBLIC_DIR = './public';
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png'];

async function optimizeImages() {
  try {
    console.log('🔍 Scanning for images to optimize...');
    
    const files = await getAllFiles(PUBLIC_DIR);
    const imageFiles = files.filter(file => 
      IMAGE_EXTENSIONS.some(ext => file.toLowerCase().endsWith(ext))
    );
    
    console.log(`📸 Found ${imageFiles.length} images to optimize`);
    
    for (const imagePath of imageFiles) {
      await optimizeImage(imagePath);
    }
    
    console.log('✅ Image optimization complete!');
  } catch (error) {
    console.error('❌ Error optimizing images:', error);
  }
}

async function getAllFiles(dir) {
  const files = [];
  const items = await fs.readdir(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    
    if (item.isDirectory()) {
      files.push(...await getAllFiles(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  
  return files;
}

async function optimizeImage(imagePath) {
  const ext = path.extname(imagePath).toLowerCase();
  const baseName = imagePath.replace(ext, '');
  
  try {
    // Convert to WebP
    const webpPath = `${baseName}.webp`;
    console.log(`🔄 Converting ${path.basename(imagePath)} to WebP...`);
    
    execSync(`cwebp -q 80 "${imagePath}" -o "${webpPath}"`, { stdio: 'pipe' });
    
    // Convert to AVIF (if avifenc is available)
    try {
      const avifPath = `${baseName}.avif`;
      console.log(`🔄 Converting ${path.basename(imagePath)} to AVIF...`);
      
      execSync(`avifenc --min 0 --max 63 "${imagePath}" "${avifPath}"`, { stdio: 'pipe' });
    } catch (avifError) {
      console.log(`⚠️  AVIF conversion skipped (avifenc not available): ${path.basename(imagePath)}`);
    }
    
    console.log(`✅ Optimized: ${path.basename(imagePath)}`);
  } catch (error) {
    console.error(`❌ Failed to optimize ${path.basename(imagePath)}:`, error.message);
  }
}

// Run the optimization
optimizeImages(); 