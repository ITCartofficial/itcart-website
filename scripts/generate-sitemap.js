// scripts/generate-sitemap.js
import SitemapGenerator from 'sitemap-generator';
import path from 'path';
import { fileURLToPath } from 'url';

// Handle ES module path issue
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Change this to your actual deployed domain
const BASE_URL = 'https://yourdomain.com';

// Output file inside Next.js /public
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

// Create the generator
const generator = SitemapGenerator(BASE_URL, {
    filepath: OUTPUT_PATH,
    stripQuerystring: false,
});

// Optional logging
generator.on('done', () => {
    console.log('✅ Sitemap successfully generated at:', OUTPUT_PATH);
});

generator.on('error', (error) => {
    console.error('❌ Error generating sitemap:', error);
});

// Start the crawl
generator.start();
