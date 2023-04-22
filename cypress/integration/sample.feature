#language: pt

Funcionalidade: Sample

  Contexto: Condições iniciais genéricas 
		Dado que satisfaça uma condição inicial genérica

  Cenário: Teste simples
    Então deve conter o title "title da página"
    E deve exibir tal elemento

  Esquema do Cenário: Teste com diferentes elementos
    Quando clicar em tal botão
    Então deve conter as opções "<Lista>"
      Exemplos:
      | Lista                                         |
      | Um elemento, Outro elemento, Mais um elemento |