/// <reference types="cypress"/>

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

When('realizar uma requisição do tipo {string}', (metodoHttp) => {

  cy.get('@ENDPOINT').then(endpoint => {
    switch (metodoHttp) {
      case GET:
        cy.httpGet(endpoint)
        break;
      case POST:
        cy.httpPost(endpoint)
        break;
      case PUT:
        cy.httpPut(endpoint)
        break;
      case DELETE:
        cy.httpDelete(endpoint)
        break;
      default:
        cy.log('ERRO AO EXECUTAR MÉTODO HTTP!')
        break;
    }
  })

});

Given('que esteja na página inicial', () => {
  cy.visit('/')
})

Then('deve conter o title {string}', (title) => {
  cy.validarTitle(title)
})

Then('deve acessar a página {string}', (rota) => {
  cy.validarRota(rota)
})

And('deve exibir tal elemento', () => {
  // código para validar exibição de tal elemento
})
