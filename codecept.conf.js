const { setHeadlessWhen } = require('@codeceptjs/configure');
// const url = process.env.LOCAL || 'https://dev.acronis.com';

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './e2e/tests/*.spec.js',
  output: './e2e/output',
  helpers: {
    TestCafe: {
      browser: "chrome",
      show: true,
    }
  },
  include: {
    I: './e2e/steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'back-office-test-app',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}