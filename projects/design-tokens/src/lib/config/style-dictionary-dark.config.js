const StyleDictionary = require('style-dictionary');

StyleDictionary.registerFilter({
  name: 'isDarkTheme',
  matcher: (token) => {
    return token.filePath.indexOf('dark') > -1
  }
});

StyleDictionary.registerFormat({
  name: 'scss/themes',
  formatter: function(dictionary, config) {
    return `:root.dark-theme {
      ${dictionary.allProperties.filter(prop => prop.filePath.includes('dark')).map(prop => `--${prop.name}: ${prop.value};`).join('\n')}
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
          filter: 'isDarkTheme'
        }
      ]
    }
  }
};
