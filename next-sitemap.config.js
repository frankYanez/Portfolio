module.exports = {
  siteUrl: 'https://todo-portfolio.dev',
  generateRobotsTxt: true,
  outDir: 'public',
  sitemapSize: 5000,
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'monthly',
      priority: path === '/' ? 1 : 0.7
    };
  }
};
