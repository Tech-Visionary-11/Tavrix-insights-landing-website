/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: true, // (optional but recommended)
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  // Optionally, you can set exclude or additional paths
  // exclude: ['/admin', '/dashboard'],
};
