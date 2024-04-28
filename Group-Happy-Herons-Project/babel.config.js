module.exports = function (api) {
  api.cache.using(() => process.env.NODE_ENV); // 使用环境变量作为缓存策略的依据
  const isTest = api.env("test");
  return {
    presets: ["babel-preset-expo"],
    plugins: isTest ? [] : ["nativewind/babel"],
  };
};
