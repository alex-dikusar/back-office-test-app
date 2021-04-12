const { setHeadlessWhen } = require('@codeceptjs/configure');
const url = process.env.LOCAL || 'http://localhost:3007';

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
      url: url
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