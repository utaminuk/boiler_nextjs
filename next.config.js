const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
module.exports = {
  target: "serverless",
  webpack: (config, options) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    return config;
  },
  cssModules: true
};
