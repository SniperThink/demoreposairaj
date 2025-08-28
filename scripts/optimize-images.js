#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Image optimization script
console.log('🔍 Analyzing image sizes...');

const imgDir = path.join(process.cwd(), 'public', 'img');
const largeImages = [];

// Check if directory exists
if (!fs.existsSync(imgDir)) {
  console.log('❌ Image directory not found');
  process.exit(1);
}

// Get all image files
const files = fs.readdirSync(imgDir);

files.forEach(file => {
  const filePath = path.join(imgDir, file);
  const stats = fs.statSync(filePath);
  const sizeInMB = stats.size / (1024 * 1024);
  
  if (sizeInMB > 1) {
    largeImages.push({
      name: file,
      size: sizeInMB,
      path: filePath
    });
  }
});

// Sort by size (largest first)
largeImages.sort((a, b) => b.size - a.size);

console.log('\n📊 Large Images Found:');
largeImages.forEach(img => {
  console.log(`  ${img.name}: ${img.size.toFixed(2)} MB`);
});

if (largeImages.length === 0) {
  console.log('✅ No large images found!');
  process.exit(0);
}

console.log('\n⚠️  Performance Impact:');
console.log('  Large images can significantly impact page load times.');
console.log('  Consider optimizing these images:');

largeImages.forEach(img => {
  console.log(`\n  📸 ${img.name} (${img.size.toFixed(2)} MB)`);
  
  if (img.name.endsWith('.svg')) {
    console.log('    → SVG files should be optimized using SVGO');
    console.log('    → Consider converting to WebP for better compression');
  } else if (img.name.endsWith('.png')) {
    console.log('    → PNG files should be converted to WebP');
    console.log('    → Use tools like imagemin or squoosh');
  } else if (img.name.endsWith('.jpg') || img.name.endsWith('.jpeg')) {
    console.log('    → JPEG files should be optimized');
    console.log('    → Consider converting to WebP for better quality/size ratio');
  }
});

console.log('\n🚀 Optimization Recommendations:');
console.log('1. Install and use SVGO for SVG optimization:');
console.log('   npm install -g svgo');
console.log('   svgo public/img/*.svg');

console.log('\n2. Use Next.js Image component with optimization:');
console.log('   import Image from "next/image"');
console.log('   <Image src="/img/file.svg" width={800} height={600} />');

console.log('\n3. Convert large images to WebP format:');
console.log('   Use tools like squoosh.app or imagemin-webp');

console.log('\n4. Implement lazy loading for images below the fold:');
console.log('   <Image loading="lazy" ... />');

console.log('\n5. Use responsive images with srcset:');
console.log('   <Image srcSet="/img/small.jpg 300w, /img/large.jpg 800w" ... />');

// Check if optimization tools are available
try {
  execSync('which svgo', { stdio: 'ignore' });
  console.log('\n✅ SVGO is available for SVG optimization');
} catch {
  console.log('\n❌ SVGO not found. Install with: npm install -g svgo');
}

try {
  execSync('which imagemin', { stdio: 'ignore' });
  console.log('✅ Imagemin is available for image optimization');
} catch {
  console.log('❌ Imagemin not found. Install with: npm install -g imagemin-cli');
}

console.log('\n📈 Expected Performance Improvements:');
console.log('  • 50-80% reduction in image file sizes');
console.log('  • 30-60% faster page load times');
console.log('  • Better Core Web Vitals scores');
console.log('  • Improved user experience');

console.log('\n🎯 Next Steps:');
console.log('1. Run: npm run optimize-images');
console.log('2. Test performance with: npm run performance');
console.log('3. Monitor Core Web Vitals in production'); 