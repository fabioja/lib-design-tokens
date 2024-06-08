const StyleDictionary = require('style-dictionary');

StyleDictionary.registerFilter({
  name: 'isCustomTheme',
  matcher: (token) => {
    return token.filePath.indexOf('/custom') > -1
  }
});

module.exports = {
  source: ['projects/design-tokens/src/lib/tokens/custom/*.json'],
  platforms: {
    scss: {
      transformGroup: 'css',
      buildPath: 'projects/design-tokens/styles/',
      files: [
        {
          destination: 'theme-custom.css',
          format: 'css/variables',
          filter: 'isCustomTheme'
        }
      ]
    }
  }
};
