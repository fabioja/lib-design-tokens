const StyleDictionary = require('style-dictionary');

StyleDictionary.registerFormat({
  name: 'scss/themes',
  formatter: function(dictionary) {
    return `.light-theme {
      ${dictionary.allProperties.map(prop => `--${prop.name}: ${prop.value};`).join('\n')}
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
        }
      ]
    }
  }
};
