  /** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://codinggenie.vercel.app',
  generateRobotsTxt: true, // adds /robots.txt automatically
  sitemapSize: 7000,       // split only if >7000 URLs
  changefreq: 'weekly',
  priority: 0.8,
  exclude: ['/404', '/_app', '/_error'], // exclude internal pages

  // Optional: Add your static tool routes manually if not pre-rendered
  additionalPaths: async (config) => [
    await config.transform(config, '/tools/json-formatter'),
    await config.transform(config, '/tools/universal-unit-converter'),
    await config.transform(config, '/tools/case-converter'),
    await config.transform(config, '/tools/lorem-ipsum-generator'),
    await config.transform(config, '/tools/uuid-generator'),
    await config.transform(config, '/tools/timestamp-converter'),
    await config.transform(config, '/tools/base64-encoder-decoder'),
  ],
};
