
import React from 'react';

const Sitemap = () => {
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://faketickets.online/</loc>
    <lastmod>2025-01-09</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://faketickets.online/about</loc>
    <lastmod>2025-01-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://faketickets.online/contact</loc>
    <lastmod>2025-01-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>`;

  React.useEffect(() => {
    document.querySelector('html')?.setAttribute('data-content-type', 'application/xml');
    return () => {
      document.querySelector('html')?.removeAttribute('data-content-type');
    };
  }, []);

  return (
    <div style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap', padding: '20px' }}>
      {sitemapXml}
    </div>
  );
};

export default Sitemap;
