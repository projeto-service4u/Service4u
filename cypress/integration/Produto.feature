Feature: Produto

    Como usuário logado, desejo acessar o menu Produto
    Para visualizar os produtos cadastros e adicionar novos itens

Scenario: Validacoes gerais da tela de Login
    Given que sou um prestador cadastrado
    When efetuo login com sucesso
    And clico no menu Produto
    Then devo visualizar o título "Produtos"
    And o botão Adicionar Item
    And visualizar as colunas "Nome" e "Unidade/Medida"
    And a listagem de itens já cadastrados ou não