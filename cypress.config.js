const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    baseUrl: process.env.BASE_URL || 'http://localhost:3000' //Deve ser feita desse maneira, pois é um arquivo de configuração, tendo prioridade ao cypress.env; || delimita um OU, já que se o primeiro metódo não passar, o segundo é executado
  },
});
