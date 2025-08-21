const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  logLevel: 'debug',
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-docs',
    '@storybook/addon-a11y'
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, '../src'),
    };

    return config;
  },
}
