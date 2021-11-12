Given(/^que sou um prestador cadastrado$/, () => {
  return true
})

When(/^efetuo login com sucesso$/, () => {
  cy.visit('/')
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
  cy.get('thead > tr > :nth-child(2)').should('contain', 'Unidade - Medida')
})

And(/^a listagem de itens já cadastrados ou não$/, () => {
  cy.get('.MuiPaper-root').should('be.visible')
})

When(/^acesso a tela de Produtos$/, () => {
  cy.visit('/')
  cy.get('[href="/produtos"]').click()
})

When(/^clico no botão Adicionar item$/, () => {
  cy.get('.MuiButtonBase-root').click()
})

Then(/^devo visualizar o modal com o título "([^"]*)"$/, () => {
  cy.get('#contained-modal-title-vcenter').should('contain', 'Adicionar Item')
})

And(/^os campos Nome "([^"]*)" e "([^"]*)"$/, () => {
  cy.get('.row > :nth-child(1)').should('be.visible').contains('Nome Produto')
  cy.get('.row > :nth-child(2)').should('be.visible').contains('Unidade/Medida')
})

And(/^os botões de Enviar e Fechar$/, () => {
  cy.get('.col-lg-2').should('be.visible').contains('Enviar')
  cy.get('.modal-footer > .btn').should('be.visible').contains('Fechar')
})

Then(/^ao clicar no botão Fechar devo voltar para a tela de "([^"]*)"$/, () => {
  cy.get('.modal-footer > .btn').click()
  cy.get('.modal').should('not.exist')
})

Then(/^ao deixar os campos vazios o botão Enviar estar desabilitado$/, () => {
  cy.get(':nth-child(1) > .form-control').should('be.empty')
  cy.get(':nth-child(2) > .form-control').should('be.empty')
  cy.get('.btn.btn-primary.btn-lg').should('be.disabled')
})

Then(
  /^após preencher os dados de "([^"]*)" e "([^"]*)" e clicar em Enviar devo receber uma mensagem de sucesso$/,
  () => {
    cy.get(':nth-child(1) > .form-control').type('Tinta Fosca Preta')
    cy.get(':nth-child(2) > .form-control').type('10 Litros')
    cy.get('.btn.btn-primary.btn-lg').click()
    cy.get('.Toastify__toast-body').should(
      'contain',
      'Produto adicionado com sucesso'
    )
  }
)

And(/^visualizar na listagem após fechar o modal$/, () => {
  cy.get('.modal-footer > .btn').click()
  cy.get('.MuiPaper-root').should('contain', 'Tinta Fosca Preta')
  cy.get('.MuiPaper-root').should('contain', '10 Litros')
})
