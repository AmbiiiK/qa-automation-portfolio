const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
      baseUrl: 'https://practice.expandtesting.com',
      specPattern: [
          'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
          'cypress/e2e/cucumber/features/**/*.feature',
      ],
      supportFile: false,

    setupNodeEvents(on, config) {
        on('file:preprocessor', cucumber());
        return config;
    },
  },
});
