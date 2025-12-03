const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require('@cypress/browserify-preprocessor');

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        reportDir: 'cypress/reports',
        charts: true,
        reportPageTitle: 'Cypress report',
        embeddedScreenshots: true,
        inlineAssets: true,
    },
  e2e: {
      specPattern: [
          'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
          'cypress/e2e/cucumber/features/**/*.feature',
      ],
      supportFile: 'cypress/support/e2e.ts',
      viewportWidth: 1965,
      viewportHeight: 1200,
      videoCompression: 0,
      video: false,

    setupNodeEvents(on, config) {
        const options = {
            ...browserify.defaultOptions,
            typescript: require.resolve('typescript'),
        };

        on('file:preprocessor', cucumber(options));
        require('cypress-mochawesome-reporter/plugin')(on);

        return config;
    },
  },
    env: {
      apiBaseUrl: 'https://practice.expandtesting.com/notes/api'
    },
});
