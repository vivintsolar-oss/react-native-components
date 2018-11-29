module.exports = {
  preset: 'jest-expo',
  coverageDirectory: 'coverage',
  coverageReporters: [
    'json-summary',
  ],
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/scripts/**',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!react-native|@vivintsolar|@vivintsolar-oss)/',
  ],
  testPathIgnorePatterns: [
    'node_modules/',
  ],
};
