module.exports = {
  verbose: true,
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/*.tests.js',
  ],
  testMatch: ['<rootDir>/src/**/*.tests.js'],
  modulePaths: [
    '<rootDir>/src/',
  ],
  globals: {
    NODE_ENV: 'testing',
  },
  transform: {
    '^.+\\.js$': '<rootDir>/src/jest/transformer.js'
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$', '^.+\\.module\\.(css|sass|scss)$'],
};
