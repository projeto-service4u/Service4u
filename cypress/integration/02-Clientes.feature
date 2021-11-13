Feature: Clientes

    Como usuário cadastrado, desejo realizar login
    Para que possa cadastrar novos clientes

Scenario: Validacoes gerais da tela de Clientes
    Given que sou um prestador cadastrado
    When efetuo login com sucesso
    Then devo visualizar o título "Clientes"
    And o botão Novo Cliente
    And visualizar as colunas "Nome", "Email", "Telefone" e "Ações"
    And a listagem de itens já cadastrados ou não

Scenario: Validar itens do modal
    Given que sou um prestador cadastrado
    When acesso a tela de Clientes
    And clico no botão Novo Cliente
    Then devo visualizar o modal com o título "Adicionar novo cliente"
    And os campos Nome "Nome", E-mail e "Telefone"
    And os botões de Salvar e Fechar

Scenario: Validar fechamento do modal
    Given que sou um prestador cadastrado
    When acesso a tela de Clientes
    And clico no botão Novo Cliente
    Then ao clicar no botão Fechar devo voltar para a tela de "Clientes"

Scenario: Validar botão Salvar desabilitado
    Given que sou um prestador cadastrado
    When acesso a tela de Clientes
    And clico no botão Novo Cliente
    Then ao deixar os campos vazios o botão Salvar estar desabilitado

Scenario: Cadastro de cliente com sucesso
    Given que sou um prestador cadastrado
    When acesso a tela de Clientes
    And clico no botão Novo Cliente
    Then após preencher os dados de Nome, E-mail, Telefone e clicar em Salvar devo receber uma mensagem de sucesso
    And visualizar na listagem após fechar o modal

Scenario: Validar tela de Nova Lista Padrão para um cliente
    Given que sou um prestador cadastrado
    When acesso a tela de Clientes
    And clico no botão Visualizar na coluna Ações de determinado cliente
    And clico no botão Nova Lista
    Then devo visualizar o título Nova Lista Padrão, os botões Salvar Lista, Voltar e Adicionar
    And os dados de Produto, Quantidade, Unidade - Medida
    And as informações de lista desse cliente, com as colunas Nome, Quantidade e Unidade - Medida

Scenario: Vincular lista padrão ao cliente
    Given que sou um prestador cadastrado
    When acesso a tela de Clientes
    And clico no botão Visualizar na coluna Ações de determinado cliente
    And clico no botão Nova Lista
    And devo preencher o Nome da Lista, selecionar Produto, Quantidade e Unidade-Medida
    Then após clicar em Salvar Lista a mesma deve ser criada com sucesso
    And os dados de Nome, Data e Ações devem ser mostrados na tela de dados do cliente

Scenario: Visualizar dados e listas do cliente
    Given que sou um prestador cadastrado
    When acesso a tela de Clientes
    And clico no botão Visualizar na coluna Ações de determinado cliente
    Then devo visualizar o título Cliente, os botões Nova lista e Voltar
    And os dados de Nome, Email, Telefone
    And as informações de lista desse cliente, com as colunas Nome, Data e Ações

Scenario: Exclusão de Lista Padrão do cliente
    Given que sou um prestador cadastrado
    When acesso a tela de Clientes
    And clico no botão Visualizar na coluna Ações de determinado cliente
    Then ao clicar no botão Excluir em uma das listas existentes a mesma deve deixar de ser exibida

Scenario: Exclusão de cliente
    Given que sou um prestador cadastrado
    When acesso a tela de Clientes
    And clico no botão "Excluir" na coluna Ações de determinado cliente
    Then o cliente em questão deve ser excluído e removido da listagem