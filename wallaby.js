process.env.NODE_ENV = 'test';

module.exports = function(wallaby) {
  return {
    files: ['!src/**/*.spec.js', 'src/**/*.js', './config/jest.setup.js', { pattern: 'package.json', load: false }],
    tests: ['src/**/*.spec.js'],
    env: { type: 'node' },
    compilers: { '**/*.js': wallaby.compilers.babel() },
    testFramework: 'jest',
    setup: function(w) {
      const jestConfig = require('./package.json').jest;
      jestConfig.rootDir = './';
      wallaby.testFramework.configure(jestConfig);
    },
  };
};
