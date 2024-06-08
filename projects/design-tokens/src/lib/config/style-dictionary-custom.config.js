const StyleDictionary = require('style-dictionary');

StyleDictionary.registerFilter({
  name: 'isCustomTheme',
  matcher: (token) => {
    return token.filePath.indexOf('/custom') > -1
  }
});

StyleDictionary.registerFormat({
  name: 'scss/themes',
  formatter: function(dictionary, config) {
    return `:root .custom-theme {
      ${dictionary.allProperties.filter(prop => prop.filePath.includes('custom')).map(prop => `--${prop.name}: ${prop.value};`).join('\n')}
    }`;
  }
});

module.exports = {
  source: ['projects/design-tokens/src/lib/tokens/custom/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'projects/design-tokens/styles/',
      files: [
        {
          destination: 'theme-custom.scss',
          format: 'scss/themes',
          filter: 'isCustomTheme'
        }
      ]
    }
  }
};
