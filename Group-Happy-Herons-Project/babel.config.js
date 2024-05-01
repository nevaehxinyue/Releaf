module.exports = function (api) {
  api.cache.using(() => process.env.NODE_ENV);
  const isTest = api.env("test");

  // Define plugins, starting with an empty array
  let plugins = [];

  // Only add 'nativewind/babel' if not in test environment
  if (!isTest) {
    plugins.push("nativewind/babel");
  }

  // Always include 'react-native-dotenv', even in test environment
  plugins.push([
    "module:react-native-dotenv",
    {
      moduleName: "@env",
      path: ".env",
    },
  ]);

  return {
    presets: ["babel-preset-expo"],
    plugins: plugins,
  };
};
