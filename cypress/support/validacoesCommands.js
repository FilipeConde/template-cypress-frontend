/// <reference types="cypress" />

Cypress.Commands.add('validarMensagem', (body, mensagem) => {
  expect(Object.values(body)).to.contain(mensagem)
})

Cypress.Commands.add('validarStatusCode', (statusCode) => {
  cy.get('@RES_STATUS').then(resStatus => {
    expect(statusCode).equals(resStatus)
  })

})

Cypress.Commands.add('validarQuantidade', (listaDeElementos, qtd) => {
  listaDeElementos.should('have.length', qtd)
})

Cypress.Commands.add('validarTitle', (title) => {
  cy.title().should('equal', title)
})

Cypress.Commands.add('validarElementosPorTexto', (elementos) => {
  elementos.forEach(elemento => {
    cy.contains(elemento).should('exist').and('be.visible')
  });
})
