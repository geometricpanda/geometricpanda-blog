module.exports = {
  stories: [],
  addons: [
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    },
    'storybook-css-modules-preset',
    '@storybook/addon-docs',
    '@storybook/addon-backgrounds'
  ]
};
