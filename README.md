<h1>CYPRESS FRONTEND TESTING TEMPLATE</h1>

<h2>Sumário</h2>

- [1 Apresentação](#1-apresentação)
- [2 Pré-requisitos](#2-pré-requisitos)
- [3 Dependências](#3-dependências)
- [4 Scripts](#4-scripts)
- [5 Estrutura do projeto](#5-estrutura-do-projeto)
  - [5.1 Pastas](#51-pastas)
  - [5.2 Arquivos](#52-arquivos)
- [6 Por onde seguir](#6-por-onde-seguir)
- [7 Contato](#7-contato)

## 1 Apresentação

_Apresentar neste campo uma breve apresentação das respontabilidades do sistema e sua princiais funcionalidades._

**baseURL:** https://{baseURL}
| Funcionalidade | Descrição|
|----|----|
| Fazer tal coisa | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
| Fazer outra coisa | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## 2 Pré-requisitos

_Indicar aqui os pré-requisitos para executar os testes aqui presentes (quais sistemas precisam estar rodando, quais aplicações precisam estar instaladas, etc)._

- Node.js (preferencialmente LTS mais recente);
- NPM (instalado com Node.js);
- Dependências do projeto;
- Acesso à aplicação rodando;
- APIs rodando;
- _Mocks_ habilitados;

## 3 Dependências

_Neste campo deve ser apresentado e explicar o funcionamento das dependências utilizadas por este projeto._

| Nome | Função | Documentação |
|----|----|----|
Cypress | Biblioteca de testes automatizados multicamada | [Link aqui](https://docs.cypress.io/guides/overview/why-cypress)
cypress cucumber preprocessor | Aplicação de Cucumber para Cypress permitindo utilização de arquivos _.feature_ contendo as instruções do teste em Gherkin | [Link aqui](https://www.npmjs.com/package/cypress-cucumber-preprocessor)
multiple cucumber html reporter | Gera reports em HTML contendo dados da execução dos testes e seus resultados | [Link aqui](https://www.npmjs.com/package/multiple-cucumber-html-reporter)


## 4 Scripts

_Listar os scripts e suas funcionalidades._

```
npm run {scriptName}
```

| Nome | Utilização |
|----|----|
**cy:open** | Abre o runner do Cypress com painel que permite analizar passo-a-passo a execussão dos testes e acessar os dados trafegados via browser e funcionalidade de time lapse dinâmico;
**cy:run** | Executa os testes em modo _headless_.

## 5 Estrutura do projeto

_Explicar a estrutura do projeto visando o seu crescimento de maneira organizada e seguindo os padrões estabelecidos._

### 5.1 Pastas
| Nome | Função |
|----|----|
**cypress** | o que diz respeito ao projeto de testes deve estar localizado dentro da pasta _cypress_.
**support** | contém os arquivos de comandos personalizados cypress.
**integration** | os testes devem estar situados dentro desta pasta. Na raíz dela posicionamos os arquivos _.feature_ com os cenários de teste em Gherkin. Em uma subpasta **common** teremos o arquivo **common.spec.js** com a implementação dos steps que se repetem em mais de um teste. Ainda teremos aqui **subpastas nomeadas de acordo com os respectivos arquivos _.feature_** contendo as implementações dos steps específicos quando houver.
**fixtures** | esta pasta contém as massas de dados fixas.
**pages** | seguindo o padrão de projeto PageObjects, nesta pasta constam os arquivos _page.js_ que serão classes com métodos de ação específicos de cada página além dos seletores de elementos usados ao longo dos testes (e métodos _getters_ retornando estes elementos em forma de _return cy.get(seletor)_, permitindo encadear ações e validações quando invocados).

### 5.2 Arquivos

| Sufixo | Função |
|----|----|
**.feature** | contém os cenários de teste escritos em Gherkin. O sistema deste framework usa este arquivo para organizar os steps, ordem e repetições que devem ser executadas podendo também conter aqui dados a serem passados para o código em forma de parâmetros, variáveis, tabelas e objetos. Ao executar o teste o sistema acessará estes arquivos e buscará a implementação de cada _step_ listado executando em ordem. Essa busca será realizada nos arquivos dentro da pasta _integration > common_, dentro do arquivo _common.spec.js_. Caso não encontre, seguira a busca em direção à pasta e arquivo _spec_ nomeados de acordo com o arquivo _.feature_ correspondente.
**.spec.js** | implementação de cada step definido em arquivo _.feature_.Em casos de erro do tipo _missing step implementation_ o sistema possivelmente não encontrou uma implementação com o exato texto do step nas pastas adequadas durante a busca.
**cypress.config.js** | este é o arquivo de configuração geral do projeto Cypress. Aqui apontamos a _base URL_ alvo do teste, comportamentos do _runner_, uso de plugins como Cucumber e possíveis variáveis de ambiente entre outras opções.


## 6 Por onde seguir

- Defina e siga desde o início um padrão de escrita Gherkin (primeira ou terceira pessoa, verbos no infinitivo ou conjugados, granularidade das instruções);
- Procure manter as instruções (steps) concisas e independentes;
- Faça uso de instruções e commands para preparação de cenários de teste (pré-requisitos) de maneira mais otimizada e legível;
- **TESTES TAMBÉM GOSTAM DE CLEAN CODE!**
- Se o projeto está confuso demais, pode melhorar;
- Se ainda está confuso, você pode melhorar;
- Bons colegas nos ajudam a melhorar, mas isso depende do nosso esforço e disposição;
- **O TESTE É DO TIME!**
- Mantenha a organização das pastas;
- Gostamos de _mocks_ nos testes;
- Testes independentes são legais.
- Testes são feitos pra serem executados;
- Testes automatizados devem ser o mais automatizados possível;
- Testes instáveis (_flaky_) devem ser aprimorados;
- Se não der pra escrever testes para a aplicação, talvez ela tenha baixa testabilidade;
- Aplicações de baixa testabilidade devem melhorar;
- Um bom dev testa;
- Um bom QA planeja e testa;

______________________________________________________

## 7 Contato

Autor: Filipe Conde (QA Lead)

[Linkedin](https://www.linkedin.com/in/filipeconde/) | [Github](https://github.com/FilipeConde)