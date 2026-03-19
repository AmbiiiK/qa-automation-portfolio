const { defineConfig } = require('cypress');
const cypressOnFix = require('cypress-on-fix');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const {
  addCucumberPreprocessorPlugin,
} = require('@badeball/cypress-cucumber-preprocessor');
const {
  createEsbuildPlugin,
} = require('@badeball/cypress-cucumber-preprocessor/esbuild');

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
    supportFile: 'cypress/support/e2e.js',
    viewportWidth: 1965,
    viewportHeight: 1200,
    videoCompression: 0,
    video: false,

    async setupNodeEvents(cypressOn, config) {
      const on = cypressOnFix(cypressOn);

      await addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        createBundler({ plugins: [createEsbuildPlugin(config)] })
      );

      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    },
  },
  env: {
    apiBaseUrl: 'https://practice.expandtesting.com/notes/api',
  },
});
