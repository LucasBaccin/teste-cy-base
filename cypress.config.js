const { defineConfig } = require("cypress");
const { allureCypress } = require('allure-cypress/reporter');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config);
      
      return config;
    },
    baseUrl: process.env.BASE_URL || 'http://localhost:3000' //Deve ser feita desse maneira, pois é um arquivo de configuração, tendo prioridade ao cypress.env; || delimita um OU, já que se o primeiro metódo não passar, o segundo é executado
  },
});
