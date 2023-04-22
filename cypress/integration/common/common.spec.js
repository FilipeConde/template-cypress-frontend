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

Given('que satisfaça uma condição inicial genérica', () => {
  // código para satisfazer uma condição genérica
})

Then('deve conter o title {string}', (title) => {
  cy.validarTitle(title)
})

And('deve exibir tal elemento', () => {
  // código para validar exibição de tal elemento
})
