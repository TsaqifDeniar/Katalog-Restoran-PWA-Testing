const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

setCommonPlugins();

exports.config = {
  tests: 'e2e/**/*.spec.js',
  output: 'e2e/outputs',
  helpers: {
    Puppeteer: {
      url: 'http://127.0.0.1:3000',
      show: true,
      windowSize: '1200x900',
    },
  },
  include: {
    I: './steps_file.js',
  },
  name: 'submission-katalog-restoran-3',
}
