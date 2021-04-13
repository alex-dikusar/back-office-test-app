const { setHeadlessWhen } = require('@codeceptjs/configure');

const localConfig = {
  pattern: './e2e/tests/*.spec.js',
  url: 'http://localhost:3007',
  include: './e2e/steps_file.js'
}

const remoteConfig = {
  pattern: './e2e/tests_remote/*.spec.js',
  url: 'http://localhost:3007',
  include: './e2e/steps_file_remote.js'
}

const config = localConfig;
const url = process.env.LOCAL || config.url;

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: config.pattern,
  output: './e2e/output',
  helpers: {
    TestCafe: {
      waitForTimeout: 2000,
      getPageTimeout: 3000,
      browser: 'chrome',
      show: true,
      url: url
    }
  },
  include: {
    I: config.include
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