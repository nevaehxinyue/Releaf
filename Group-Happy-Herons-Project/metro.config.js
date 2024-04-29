const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);

  if (!config.resolver.assetExts.includes("bin")) {
    config.resolver.assetExts.push("bin");
  }

  return config;
})();
