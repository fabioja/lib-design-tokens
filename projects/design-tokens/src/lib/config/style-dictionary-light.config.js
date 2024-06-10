const StyleDictionary = require('style-dictionary');

StyleDictionary.registerFilter({
  name: 'isLightTheme',
  matcher: (token) => {
    return token.filePath.indexOf('/light') > -1
  }
});

StyleDictionary.registerFormat({
  name: 'scss/themes',
  formatter: function(dictionary, config) {
    return `.light-theme {
      ${dictionary.allProperties.filter(prop => prop.filePath.includes('light')).map(prop => `--${prop.name}: ${prop.value};`).join('\n')}
    }`;
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
          destination: 'theme-light.scss',
          format: 'scss/themes',
          filter: 'isLightTheme'
        }
      ]
    }
  }
};
