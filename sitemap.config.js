module.exports = {
  siteUrl: 'https://www.nellyslogistics.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/admin', '/api'] },
    ],
    additionalSitemaps: [
      'https://www.nellyslogistics.com/sitemap.xml',
      'https://www.nellyslogistics.com/sitemap-0.xml',
    ],
  },
  exclude: ['/server-sitemap.xml', '/admin/*', '/api/*'],
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: true,
  autoLastmod: true,
  outDir: 'public',
};
