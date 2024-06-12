const StyleDictionary = require('style-dictionary');

StyleDictionary.registerFormat({
  name: 'scss/themes',
  formatter: function(dictionary) {
    return `.dark-theme {
      ${dictionary.allProperties.map(prop => `--${prop.name}: ${prop.value};`).join('\n')}
    }`;
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
          destination: 'theme-dark.scss',
          format: 'scss/themes',
        }
      ]
    }
  }
};
