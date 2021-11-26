Given(/^que sou um prestador cadastrado$/, () => {
  return true
})

When(/^efetuo login com sucesso$/, () => {
  cy.visit('/')
})

When(/^clico no menu Lista Padrão$/, () => {
  cy.get('[href="/lista-padrao"]').click()
})

Then(/^devo visualizar o título Lista Padrão$/, () => {
  cy.get('.sc-hHfuMS').should('contain', 'Lista Padrão')
})

Then(/^o botão Adicionar nova lista$/, () => {
  cy.get('.MuiButtonBase-root').should('contain', 'Adicionar Nova lista')
})

Then(/^visualizar as colunas Nome e Ações$/, () => {
  cy.get('thead > tr > :nth-child(1)').should('contain', 'Nome')
  cy.get('thead > tr > :nth-child(2)').should('contain', 'Ações')
})

Then(/^a listagem de listas já cadastrados ou não.$/, () => {
  cy.get('tbody').should('be.visible')
})
When(/^acesso a tela de Lista Padrão$/, () => {
  cy.visit('/')
  cy.get('[href="/lista-padrao"]').click()
})

When(/^clico no botão Adicionar nova lista$/, () => {
  cy.get('.MuiButtonBase-root').click()
})

When(
  /^após preencher os dados de Nome da lista, Produto, Quantidade,  Unidade-Medida$/,
  () => {
    cy.get('.sc-iwyWTf > .input-group > .form-control').type(
      'Nova Lista Padrão'
    )
    cy.wait(2000)
    cy.get('.mySelect__input-container.css-ackcql').type(
      'Tinta Amarela{enter}, { force: true }'
    )
    cy.get('.sc-iJuVqt > :nth-child(2) > .input-group > .form-control').type(
      '5'
    )
    cy.get('.btn').click()
    cy.get('.mySelect__input-container.css-ackcql').type(
      'Tinta Vermelha{enter}, { force: true }'
    )
    cy.get('.sc-iJuVqt > :nth-child(2) > .input-group > .form-control')
      .clear()
      .type('2')
  }
)

Then(
  /^ao clicar nos botões Adicionar e Enviar, devo receber uma mensagem de sucesso$/,
  () => {
    cy.get('.btn').click()
    cy.get('.jss18').click()
    cy.get('.Toastify__toast-body').should(
      'contain',
      'Lista adicionada com sucesso'
    )
  }
)

Then(/^visualizar a lista na listagem após fechar o modal$/, () => {
  cy.get('.jss19').click()
  cy.get('tbody >> :nth-child(1)').last().should('contain', 'Lista Padrão')
})
Then(/^clico no botão Visualizar na coluna Ações de determinado lista$/, () => {
  cy.get(':nth-child(2) > .btn-primary').last().click()
})

Then(
  /^devo visualizar o título Lista Padrão, os botões Imprimir lista e Voltar$/,
  () => {
    cy.get('.sc-hiSbEG').last().should('contain', 'Nova Lista Padrão')
    cy.get('.input-group-text').should('contain', 'Email Cliente')
    cy.get('.sc-jJEKmz > :nth-child(1)').should('contain', 'Imprimir lista')
    cy.get('.sc-jJEKmz > :nth-child(2)').should('contain', 'Enviar lista')
    cy.get('.jss19').last().should('contain', 'Voltar')
  }
)

Then(/^as colunas Nome, Quantidade, Unidade-Medida$/, () => {
  cy.get('thead > tr > :nth-child(1)').should('contain', 'Nome')
  cy.get('thead > tr > :nth-child(2)').should('contain', 'Quantidade')
  cy.get('thead > tr > :nth-child(3)').should('contain', 'Unidade - Medida')
})

Then(/^as informações de itens pertencentes à lista$/, () => {
  cy.get('tbody > :nth-child(1) > :nth-child(1)').should(
    'contain',
    'Tinta Amarela'
  )
  cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain', '5')
  cy.get('tbody > :nth-child(1) > :nth-child(3)').should('contain', 'Litros')
  cy.get('tbody > :nth-child(2) > :nth-child(1)').should(
    'contain',
    'Tinta Vermelha'
  )
  cy.get('tbody > :nth-child(2) > :nth-child(2)').should('contain', '2')
  cy.get('tbody > :nth-child(2) > :nth-child(3)').should('contain', 'Litros')
})

Then(
  /^ao clicar no botão Imprimir lista devo ser direcionado para a tela de impressão$/,
  () => {
    cy.visit('/').then(xhr => {
      cy.window().then(function (win) {
        cy.stub(win, 'print')
        cy.get('[href="/lista-padrao"]').click()
        cy.get(':nth-child(2) > .btn-primary').last().click()
        cy.get('.sc-jJEKmz > :nth-child(1)')
          .click()
          .then(() => {
            expect(win.print).to.be.called
          })
      })
    })
  }
)

Then(/^clico no botão Excluir na coluna Ações de determinado lista$/, () => {
  cy.get(':nth-child(2) > .btn-danger').last().click()
})

Then(/^a Lista Padrão em questão deve ser removida da lista$/, () => {
  cy.get('.Toastify__toast-body').should(
    'contain',
    'Lista deletada com sucesso!'
  )
  cy.contains('Nova Lista Padrão').should('not.exist')
})
