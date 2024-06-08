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
      transformGroup: 'css',
      buildPath: 'projects/design-tokens/styles/',
      files: [
        {
          destination: 'theme-light.css',
          format: 'css/variables',
          filter: 'isLightTheme'
        }
      ]
    }
  }
};
