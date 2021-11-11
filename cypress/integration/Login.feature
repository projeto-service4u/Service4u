Feature: Login

    Como usuário cadastrado, desejo realizar login
    Para que possa acessar o sistema

Scenario: Validacoes gerais da tela de Login
    Given que sou um prestador cadastrado
    When acesso o site
    Then devo visualizar o logo Service4U
    And visualizar os campos "email" e "senha"
    And o botão "Login"

Scenario: Validar email obrigatorio
    Given que sou um prestador cadastrado
    When acesso o site
    And preencho apenas a senha
    Then o botão de "Login" deve ficar desabilitado

Scenario: Validar senha obrigatoria
    Given que sou um prestador cadastrado
    When acesso o site
    And preencho apenas o email
    Then o botão de "Login" deve ficar desabilitado

Scenario: Requerer usuário e senha válidos
    Given que sou um prestador cadastrado
    When acesso o site
    And preencho os campos de email e senha com dados inválidos
    Then ao clicar em Login devo receber uma mensagem de que email e senha não conferem.

Scenario: Login com sucesso
    Given que sou um prestador cadastrado
    When acesso o site
    And preencho meu email e senha
    Then devo realizar meu login com sucesso
    And visualizar a página principal com o texto "Clientes"