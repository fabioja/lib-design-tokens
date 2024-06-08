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
      transformGroup: 'scss',
      buildPath: 'projects/design-tokens/styles/',
      files: [
        {
          destination: 'thema-dark.scss',
          format: 'scss/variables',
          filter: 'isDarkTheme'
        }
      ]
    }
  }
};
