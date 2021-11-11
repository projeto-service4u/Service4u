Given(/^que sou um prestador cadastrado$/, () => {
  return true
})

When(/^efetuo login com sucesso$/, () => {
  cy.visit('/')
})

Then(/^devo visualizar o título "([^"]*)"$/, Clientes => {
  cy.get('.sc-jrAFXE').should('contain', Clientes)
})

Then(/^o botão Novo Cliente$/, () => {
  cy.get('.MuiButtonBase-root').should('contain', 'Novo Cliente')
})

Then(
  /^visualizar as colunas "([^"]*)", "([^"]*)", "([^"]*)" e "([^"]*)"$/,
  (Nome, Email, Telefone, Ações) => {
    cy.get('thead > tr > :nth-child(1)').should('contain', Nome)
    cy.get('thead > tr > :nth-child(2)').should('contain', Email)
    cy.get('thead > tr > :nth-child(3)').should('contain', Telefone)
    cy.get('thead > tr > :nth-child(4)').should('contain', Ações)
  }
)

Then(/^a listagem de itens já cadastrados ou não$/, () => {
  cy.get('tbody').should('be.visible')
})
When(/^acesso a tela de Clientes$/, () => {
  cy.visit('/')
})

When(/^clico no botão Novo Cliente$/, () => {
  cy.get('.MuiButtonBase-root').click()
})

Then(/^devo visualizar o modal com o título "([^"]*)"$/, () => {
  cy.get('#contained-modal-title-vcenter').should(
    'contain',
    'Adicionar novo cliente'
  )
})

Then(/^os campos Nome "([^"]*)", E-mail e "([^"]*)"$/, (Nome, Telefone) => {
  cy.get('.modal-body').should('contain', Nome)
  cy.get('.modal-body').should('contain', 'E-mail')
  cy.get('.modal-body').should('contain', Telefone)
})

Then(/^os botões de Salvar e Fechar$/, () => {
  cy.get('.col-lg-2').should('be.visible').contains('Salvar')
  cy.get('.modal-footer > .btn').should('be.visible').contains('Fechar')
})
Then(/^ao clicar no botão Fechar devo voltar para a tela de "([^"]*)"$/, () => {
  cy.get('.btn-close').click()
  cy.get('.modal').should('not.exist')
})
Then(/^ao deixar os campos vazios o botão Salvar estar desabilitado$/, () => {
  cy.get(':nth-child(1) > .form-control').should('be.empty')
  cy.get(':nth-child(2) > .form-control').should('be.empty')
  cy.get(':nth-child(3) > .form-control').should('be.empty')
  cy.get('.btn.btn-primary.btn-lg').should('be.disabled')
})
Then(
  /^após preencher os dados de Nome, E-mail, Telefone e clicar em Salvar devo receber uma mensagem de sucesso$/,
  () => {
    cy.get(':nth-child(1) > .form-control').type('Matheus')
    cy.get(':nth-child(2) > .form-control').type('matheus@teste.com')
    cy.get(':nth-child(3) > .form-control').type('51998877661')
    cy.get('.col-lg-2 > .btn').click()
    cy.get('.Toastify__toast-body').should(
      'contain',
      'Cliente criado com sucesso'
    )
  }
)

Then(/^visualizar na listagem após fechar o modal$/, () => {
  cy.get('.btn-close').click()
  cy.get('tbody >> :nth-child(1)').last().should('contain', 'Matheus')
  cy.get('tbody >> :nth-child(2)').last().should('contain', 'matheus@teste.com')
  cy.get('tbody >> :nth-child(3)').last().should('contain', '51998877661')
})

Then(
  /^clico no botão "([^"]*)" na coluna Ações de determinado cliente$/,
  () => {
    cy.get(':nth-child(4) > .btn-danger').last().click()
  }
)

Then(/^o cliente em questão deve ser excluído e removido da listagem$/, () => {
  cy.contains('matheus@teste.com').should('not.exist')
  cy.get('.logout').click({ force: true })
  cy.wait(6000)
})
Then(
  /^clico no botão Visualizar na coluna Ações de determinado cliente$/,
  () => {
    cy.get(':nth-child(4) > .btn-primary').last().click()
  }
)

Then(
  /^devo visualizar o título Cliente, os botões Nova lista e Voltar$/,
  () => {
    cy.get('.sc-bqyKOL').should('contain', 'Cliente')
    cy.get('.makeStyles-root-14').should('be.visible').contains('Nova Lista')
    cy.get('.makeStyles-voltar-15').should('be.visible').contains('Voltar')
  }
)

And(/^os dados de Nome, Email, Telefone$/, () => {
  cy.get(':nth-child(1) > .input-group > .input-group-text').should(
    'contain',
    'Nome'
  )
  cy.get(':nth-child(1) > .input-group > .form-control').should(
    'have.value',
    'Matheus'
  )
  cy.get(':nth-child(2) > .input-group > .input-group-text').should(
    'contain',
    'Email'
  )
  cy.get(':nth-child(2) > .input-group > .form-control').should(
    'have.value',
    'matheus@teste.com'
  )
  cy.get(':nth-child(3) > .input-group > .input-group-text').should(
    'contain',
    'Telefone'
  )
  cy.get(':nth-child(3) > .input-group > .form-control').should(
    'have.value',
    '51998877661'
  )
})

And(
  /^as informações de lista desse cliente, com as colunas Nome, Data e Ações$/,
  () => {
    cy.get('tr > :nth-child(1)').should('contain', 'Nome')
    cy.get('tr > :nth-child(2)').should('contain', 'Data')
    cy.get('tr > :nth-child(3)').should('contain', 'Ações')
  }
)
Then(/^clico no botão Nova Lista$/, () => {
  cy.get('.makeStyles-root-14').click()
})

Then(
  /^devo visualizar o título Nova Lista Padrão, os botões Salvar Lista, Voltar e Adicionar$/,
  () => {
    cy.get('.sc-iwyWTf').should('contain', 'Nova Lista Padrão')
    cy.get(
      '.MuiButtonBase-root.MuiButton-root.MuiButton-contained.makeStyles-root-19.MuiButton-containedPrimary.Mui-disabled.Mui-disabled'
    )
      .should('be.disabled')
      .contains('Salvar lista')
    cy.get('.makeStyles-voltar-20').should('be.visible').contains('Voltar')
    cy.get('.btn').should('contain', 'Adicionar')
  }
)

And(/^os dados de Produto, Quantidade, Unidade - Medida$/, () => {
  cy.get('.mySelect__control').should('be.visible').contains('Select...')
  cy.get('.sc-lmoMya > :nth-child(2) > .input-group > .input-group-text')
    .should('be.visible')
    .contains('Quantidade')
  cy.get(':nth-child(3) > .input-group > .input-group-text')
    .should('be.visible')
    .contains('Unidade/Medida')
})

And(
  /^as informações de lista desse cliente, com as colunas Nome, Quantidade e Unidade - Medida$/,
  () => {
    cy.get('tr > :nth-child(1)').should('contain', 'Nome')
    cy.get('tr > :nth-child(2)').should('contain', 'Quantidade')
    cy.get('tr > :nth-child(3)').should('contain', 'Unidade - Medida')
  }
)
And(
  /^devo preencher o Nome da Lista, selecionar Produto, Quantidade e Unidade-Medida$/,
  () => {
    cy.get('.sc-bBXrwG > .input-group > .form-control').type(
      'Lista Padrão Matheus'
    )
    cy.get('.mySelect__value-container.css-319lph-ValueContainer').type(
      '233{enter}'
    )
    cy.get('.sc-lmoMya > :nth-child(2) > .input-group > .form-control').type(
      '5'
    )
    cy.get('.btn').click()
    cy.get('.mySelect__value-container.css-319lph-ValueContainer').type(
      '321321{enter}'
    )
    cy.get('.sc-lmoMya > :nth-child(2) > .input-group > .form-control')
      .clear()
      .type('2')
    cy.get('.btn').click()
  }
)

Then(
  /^após clicar em Salvar Lista a mesma deve ser criada com sucesso$/,
  () => {
    cy.get('.makeStyles-root-19').click()
    cy.get('.Toastify__toast-body').should(
      'contain',
      'Lista criada com sucesso!'
    )
    cy.get('.makeStyles-voltar-20').click()
  }
)

And(
  /^os dados de Nome, Data e Ações devem ser mostrados na tela de dados do cliente$/,
  () => {
    cy.get('tbody >> :nth-child(1)').should('contain', 'Lista Padrão Matheus')
    cy.get('tbody >> :nth-child(2)').should('contain', '2021')
    cy.get('.btn-primary').should('be.visible').contains('Visualizar')
    cy.get('.btn-danger').should('be.visible').contains('Excluir')
  }
)
Then(
  /^ao clicar no botão Excluir em uma das listas existentes a mesma deve deixar de ser exibida$/,
  () => {
    cy.get('.btn-danger').click()
    cy.get('tbody >:nth-child(1)').should('not.exist')
  }
)
