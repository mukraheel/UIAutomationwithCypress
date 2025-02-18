const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl: 'https://www.google.com/',  // example base URL
    specPattern: 'cypress/e2e/**/*.cy.js',  // pattern for test files
    supportFile: 'cypress/support/e2e.js', // path to support file
    viewportWidth: 1280,  // example viewport settings
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    reporter: 'mochawesome',
    reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true
  }
  },
});
