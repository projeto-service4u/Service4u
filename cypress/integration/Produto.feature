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

Scenario: Validar itens do modal
    Given que sou um prestador cadastrado
    When acesso a tela de Produtos
    And clico no botão Adicionar item
    Then devo visualizar o modal com o título "Adicionar Item"
    And os campos Nome "Produto" e "Unidade/Medida"
    And os botões de Enviar e Fechar

Scenario: Validar fechamento do modal
    Given que sou um prestador cadastrado
    When acesso a tela de Produtos
    And clico no botão Adicionar item
    Then ao clicar no botão Fechar devo voltar para a tela de "Produtos"

Scenario: Validar botão Enviar desabilitado
    Given que sou um prestador cadastrado
    When acesso a tela de Produtos
    And clico no botão Adicionar item
    Then ao deixar os campos vazios o botão Enviar estar desabilitado

Scenario: Cadastro de produto com sucesso
    Given que sou um prestador cadastrado
    When acesso a tela de Produtos
    And clico no botão Adicionar item
    Then após preencher os dados de "Nome" e "Unidade/Medida" e clicar em Enviar devo receber uma mensagem de sucesso
    And visualizar na listagem após fechar o modal