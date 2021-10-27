Given(/^que sou um prestador cadastrado$/, () => {
  return true
})

When(/^efetuo login com sucesso$/, () => {
  cy.visit('/')
  cy.get('#email').type('admin@admin.com')
  cy.get('#senha').type('123456{enter}')
})

When(/^clico no menu Produto$/, () => {
  cy.get('[href="/produtos"]').click()
})

Then(/^devo visualizar o título "([^"]*)"$/, Produtos => {
  cy.contains(Produtos)
})

And(/^o botão Adicionar Item$/, () => {
  cy.get('.MuiButtonBase-root').should('contain', 'Adicionar Item')
})

And(/^visualizar as colunas "([^"]*)" e "([^"]*)"$/, (Nome, args2) => {
  cy.get('thead > tr > :nth-child(1)').should('contain', Nome)
  cy.get('thead > tr > :nth-child(2)').should('contain', 'Unidade/Medida')
})

And(/^a listagem de itens já cadastrados ou não$/, () => {
  cy.get('.sc-fubCzh > .MuiPaper-root').should('be.visible')
})
