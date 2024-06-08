const StyleDictionary = require('style-dictionary');

StyleDictionary.registerFilter({
  name: 'isLightTheme',
  matcher: (token) => {
    return token.filePath.indexOf('/light') > -1
  }
});

module.exports = {
  source: ['projects/design-tokens/src/lib/tokens/light/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'projects/design-tokens/styles/',
      files: [
        {
          destination: 'thema-light.scss',
          format: 'scss/variables',
          filter: 'isLightTheme'
        }
      ]
    }
  }
};
