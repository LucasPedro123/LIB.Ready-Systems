const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.nodeModulesPaths = [
  '../../node_modules', 
  './node_modules'
];

config.resolver.extraNodeModules = {
  'app-config': require('path').resolve(__dirname, '../app-config'),
};

config.watchFolders = [
  require('path').resolve(__dirname, '../app-config')
];

module.exports = config;
