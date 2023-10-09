[//]: # ([![MIT License]&#40;https://img.shields.io/apm/l/atomic-design-ui.svg?&#41;]&#40;https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs&#41;)
[![Tests](https://github.com/mpluiz/ticket-hub-client/actions/workflows/ci.yml/badge.svg)](https://github.com/mpluiz/ticket-hub-client/actions/workflows/ci.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/377a4a0a-1a79-490c-b5cc-46d8fa2c139b/deploy-status)](https://app.netlify.com/sites/tickethubapp/deploys)

![logo](./docs/cover.jpg 'Cover')

# TICKET HUB

- [app](https://tickethub.mpluiz.com.br)
- [storybook](https://storybook.tickethub.mpluiz.com.br)

## Roadmap

- E2E Test with Cypress
- Internationalization with i18n

## Requirements
- Node `<lts-version>`

## Environment Variables

Required*

`VITE_SERVER_URL`*

`VITE_APP_URL`

`VITE_SENTRY_DNS`

## Installation

Instructions to install dependencies and start the dev server\
put required variables in the `env` file*

```bash
cd <your-project-name>
npm i
cp .env-example .env
npm run dev
```

## Tests

Instructions to run tests

```bash
  npm run test
```

Commands for tests

```bash
  npm run test:watch
  npm run test:ui
  npm run test:ci
```

Coverage Report

```bash
  npm run test:coverage
```

## Storybook

Instructions to start storybook

```bash
  npm run storybook
```

## Documentation

### Fluxo de Pesquisa por Nome:

1. O usuário insere o nome de um ingresso na barra de busca na interface do usuário do frontend.

2. Quando o usuário pressiona "Enter" ou aciona a busca, o frontend envia uma solicitação GraphQL ao backend, incluindo o nome do ingresso como parâmetro.

3. O backend processa a solicitação e retorna uma lista de ingressos disponíveis.

4. O frontend exibe os resultados da pesquisa ao usuário, incluindo informações como nome do evento, data, preço, etc.

5. O usuário pode navegar pelas páginas de resultados se a pesquisa retornar mais ingressos do que os que cabem em uma única página.

### Fluxo de Paginação de Resultados:

1. O frontend exibe uma interface de paginação para o usuário, no inferior da lista de resultados.

2. O usuário pode clicar em números de página ou nas setas de navegação para avançar ou retroceder nas páginas de resultados.

3. Quando o usuário interage com os controles de paginação, o frontend envia uma solicitação GraphQL ao backend, especificando a página desejada.

4. O backend processa a solicitação e retorna os resultados da página solicitada.

5. O frontend atualiza a lista de resultados exibida ao usuário com os novos dados da página selecionada.

### Fluxo de Visualização de Detalhes do Ingresso:

1. O usuário clica em um ingresso específico na lista de resultados da pesquisa ou em qualquer outra parte da interface que permita a visualização de detalhes.

2. O frontend envia uma solicitação GraphQL ao backend, incluindo o ID do ingresso que o usuário deseja visualizar.

3. O backend recupera os detalhes do ingresso com base no ID fornecido e retorna essas informações para o frontend.

4. O frontend exibe os detalhes do ingresso, incluindo nome do evento, data, preço, localização e outras informações relevantes.

### Fluxo de Adição e Remoção de Ingressos no Carrinho:

1. Quando o usuário decide adicionar um ingresso ao carrinho, o frontend envia uma solicitação GraphQL ao backend, incluindo o ID do ingresso a ser adicionado.

2. O backend processa a solicitação e adiciona o ingresso ao carrinho associado ao usuário.

3. O frontend atualiza a visualização do carrinho para refletir o ingresso adicionado, mostrando detalhes como nome do evento, quantidade, preço, etc.

4. O usuário pode continuar navegando e adicionando mais ingressos ao carrinho ou remover ingressos do carrinho conforme desejado.

5. Quando o usuário decide finalizar a compra, o frontend envia uma solicitação GraphQL ao backend para concluir a compra, incluindo informações sobre os itens no carrinho.

6. O backend processa a solicitação, registra a compra e remove os ingressos do carrinho do usuário.

7. O backend pode gerar um recibo de compra e enviá-lo ao frontend para exibição ao usuário.

### Diagram

```mermaid 
sequenceDiagram

    participant User as Usuário
    participant Frontend as Frontend
    participant Backend as Backend
    participant Database as Banco de Dados

    User ->> Frontend: Insere nome do Ingresso
    Frontend ->> Backend: Solicitação de pesquisa por nome (GraphQL)
    Backend ->> Database: Consulta a base de dados
    Database -->> Backend: Resultados da pesquisa
    Backend -->> Frontend: Resultados da pesquisa
    Frontend -->> User: Exibe resultados

    User ->> Frontend: Clica em um ingresso
    Frontend ->> Backend: Solicitação de detalhes do ingresso (GraphQL)
    Backend ->> Database: Consulta a base de dados
    Database -->> Backend: Detalhes do ingresso
    Backend -->> Frontend: Detalhes do ingresso
    Frontend -->> User: Exibe detalhes

    User ->> Frontend: Adiciona ingresso ao carrinho
    Frontend ->> Backend: Solicitação para adicionar ao carrinho (GraphQL)
    Backend ->> Database: Atualiza o carrinho do usuário na base de dados
    Database -->> Backend: Carrinho atualizado
    Backend -->> Frontend: Confirmação de adição ao carrinho
    Frontend -->> User: Atualiza carrinho

    User ->> Frontend: Remove ingresso do carrinho
    Frontend ->> Backend: Solicitação para remover do carrinho (GraphQL)
    Backend ->> Database: Atualiza o carrinho do usuário na base de dados
    Database -->> Backend: Carrinho atualizado
    Backend -->> Frontend: Confirmação de remoção do carrinho
    Frontend -->> User: Atualiza carrinho
```

## Documentation reference
- [Typescript](https://www.typescriptlang.org/docs/)
- [React](https://react.dev/reference/react)
- [React Router](https://reactrouter.com/en/main/start/overview)
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Vite](https://vitejs.dev/guide/)
- [Vitest](https://vitest.dev/guide/)

## How to contribute

- Make a fork of this repository;
- Create a branch with your feature: `git checkout -b <your-branch>`;
- Make a commit : `git commit -m '<commit-message>'`;
- Push to your branch: `git push <origin> your-branch`;

## License

[MIT](https://choosealicense.com/licenses/mit/)
