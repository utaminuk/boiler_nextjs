const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const withSass = require('@zeit/next-sass');
module.exports = withSass({
  webpack: (config, options) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    return config;
  },
  cssModules: true
});
