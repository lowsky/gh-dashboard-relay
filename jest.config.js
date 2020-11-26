module.exports = {
  verbose: true,
  transform:{ "\\.[jt]sx?$": "babel-jest"},
  moduleNameMapper:{
    "\\.(css|less|scss)$": "identity-obj-proxy"
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
};