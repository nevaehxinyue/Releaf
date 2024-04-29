module.exports = function (api) {
  api.cache.using(() => process.env.NODE_ENV);
  const isTest = api.env("test");
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      isTest ? [] : ["nativewind/babel"],
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
    ],
  };
};
