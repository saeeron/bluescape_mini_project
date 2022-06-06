const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://bluescapeqainterview.wordpress.com/',
      browser: 'chrome',
      host: '127.0.0.1',
      port: 4444,
      restart: false,
    },
    FakeDataGenerator: {
      require: './custom_helpers/fakedatagenerator_helper.js'
    },
    NewAssertions: {
      require: './custom_helpers/assertions_helper.js'
    }
  },
  include: {
    I: './steps_file.js',
    IonContactPage: './pages/contact_page.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'demo1',
  plugins: {
    allure: {
      enabled: true
    },
    retryFailedStep:{
      enabled: true
    },
    screenshotOnFail:{
      enabled: false,
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  }
}