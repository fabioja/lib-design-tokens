const StyleDictionary = require('style-dictionary');

StyleDictionary.registerFilter({
  name: 'isDarkTheme',
  matcher: (token) => {
    return token.filePath.indexOf('dark') > -1
  }
});

module.exports = {
  source: ['projects/design-tokens/src/lib/tokens/dark/*.json'],
  platforms: {
    scss: {
      transformGroup: 'css',
      buildPath: 'projects/design-tokens/styles/',
      files: [
        {
          destination: 'theme-dark.css',
          format: 'css/variables',
          filter: 'isDarkTheme'
        }
      ]
    }
  }
};
