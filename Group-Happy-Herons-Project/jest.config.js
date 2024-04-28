module.exports = {
  preset: "react-native",
  transform: {
    "^.+\\.[tj]sx?$": ["babel-jest", { configFile: "./babel.config.js" }],
  },
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  testPathIgnorePatterns: ["/node_modules/", "/android/", "/ios/"],
};
