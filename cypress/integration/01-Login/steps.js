Given(/^que sou um prestador cadastrado$/, () => {
  return true
})

When(/^acesso o site$/, () => {
  cy.visit('/')
})

Then(/^devo visualizar o logo Service4U$/, () => {
  cy.get('.container-logo').should('be.visible').contains('Service 4U')
  cy.get('img').should('have.attr', 'src', '/static/media/s4uLogo.1ec7dc43.svg')
})

Then(/^visualizar os campos "([^"]*)" e "([^"]*)"$/, (email, senha) => {
  cy.get('#email').should('have.attr', 'name', email)
  cy.get('#senha').should('have.attr', 'name', senha)
})

Then(/^o botão "([^"]*)"$/, Login => {
  cy.get('.sc-bdfBQB').should('have.text', Login)
})

And(/^preencho meu email e senha$/, () => {
  cy.get('#email').type('admin@admin.com')
  cy.get('#senha').type('123456{enter}')
})

Then(/^devo realizar meu login com sucesso$/, () => {
  return true
})

And(/^visualizar a página principal com o texto "([^"]*)"$/, Clientes => {
  cy.contains(Clientes)
})

And(/^preencho apenas a senha$/, () => {
  cy.get('#senha').type('123456')
})

When(/^preencho apenas o email$/, () => {
  cy.get('#email').type('admin@admin.com')
})

Then(/^o botão de "([^"]*)" deve ficar desabilitado$/, () => {
  cy.get('.sc-bdfBQB').should('be.disabled')
})

And(/^preencho os campos de email e senha com dados inválidos$/, () => {
  cy.get('#email').type('admin@admin.com.br')
  cy.get('#senha').type('12345678')
})

Then(/^o botão de "([^"]*)" deve ficar desabilitado$/, args1 => {
  cy.get('.sc-bdfBQB').should('be.disabled')
})

Then(
  /^ao clicar em Login devo receber uma mensagem de que email e senha não conferem.$/,
  () => {
    cy.get('.sc-bdfBQB').click()
    cy.get('.Toastify__toast-body').should(
      'contain',
      'Usuário ou Senha Inválidos'
    )
  }
)
