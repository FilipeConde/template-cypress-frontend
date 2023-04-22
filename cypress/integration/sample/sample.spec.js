/// <reference types="cypress"/>

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

When('clicar em tal botão', () => {
  // código para clicar em botão
})

Then('deve conter as opções {string}', (lista) => {
  let opcoes = lista.split(', ')
  cy.validarElementosPorTexto(opcoes)
})
