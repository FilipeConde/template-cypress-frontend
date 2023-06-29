#language: pt

Funcionalidade: Login

  Contexto: Página inicial (login)
		Dado que esteja na página inicial

  Cenário: Login com sucesso
    Quando realizar login com "standard_user" e "secret_sauce"
    Então deve acessar a página "/inventory.html"

#  Esquema do Cenário: Login sem sucesso
#    Quando clicar em tal botão
#    Então deve conter as opções "<Lista>"
#      Exemplos:
#      | Lista                                         |
#      | Um elemento, Outro elemento, Mais um elemento |