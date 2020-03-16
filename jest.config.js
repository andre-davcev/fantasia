module.exports = {
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest'
  },
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['html'],
  coverageThreshold: {
    global: {
      branches: 98,
      functions: 98,
      lines: 98,
      statements: 98
    }
  }
};
