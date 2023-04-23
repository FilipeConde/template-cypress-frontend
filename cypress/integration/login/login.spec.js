/// <reference types="cypress"/>

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import Homepage from '../../pages/Home.page.js'

When('realizar login com {string} e {string}', (user, password) => {
  Homepage.realizarLogin(user, password)
})

Then('deve conter as opções {string}', (lista) => {
  let opcoes = lista.split(', ')
  cy.validarElementosPorTexto(opcoes)
})
