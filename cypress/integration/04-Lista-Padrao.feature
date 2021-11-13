Feature: Lista Padrão

    Como usuário logado, desejo acessar o menu Lista Padrão
    Para visualizar as Lista Padrões cadastradas e adicionar novas

Scenario: Validacoes gerais da tela de Lista Padrão
    Given que sou um prestador cadastrado
    When efetuo login com sucesso
    And clico no menu Lista Padrão 
    Then devo visualizar o título Lista Padrão
    And o botão Adicionar nova lista
    And visualizar as colunas Nome e Ações
    And a listagem de listas já cadastrados ou não.

Scenario: Cadastro de Lista Padrão com sucesso
    Given que sou um prestador cadastrado
    When acesso a tela de Lista Padrão
    And clico no botão Adicionar nova lista 
    And após preencher os dados de Nome da lista, Produto, Quantidade,  Unidade-Medida
    Then ao clicar nos botões Adicionar e Enviar, devo receber uma mensagem de sucesso
    And visualizar a lista na listagem após fechar o modal

Scenario: Visualizar informações de Lista Padrão
    Given que sou um prestador cadastrado
    When acesso a tela de Lista Padrão
    And clico no botão Visualizar na coluna Ações de determinado lista
    Then devo visualizar o título Lista Padrão, os botões Imprimir lista e Voltar
    And as colunas Nome, Quantidade, Unidade-Medida
    And as informações de itens pertencentes à lista

Scenario: Imprimir Lista Padrão
    Given que sou um prestador cadastrado
    When acesso a tela de Lista Padrão
    And clico no botão Visualizar na coluna Ações de determinado lista
    Then ao clicar no botão Imprimir lista devo ser direcionado para a tela de impressão

Scenario: Excluir Lista Padrão
    Given que sou um prestador cadastrado
    When acesso a tela de Lista Padrão
    And clico no botão Excluir na coluna Ações de determinado lista
    Then a Lista Padrão em questão deve ser removida da lista