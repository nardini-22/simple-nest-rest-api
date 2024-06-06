# Simple Nest Rest API

[![en](https://img.shields.io/badge/README-English-red.svg)]()

## ✏️ Introdução

Uma simples API REST que pode cadastrar e logar usuários, além de ter um CRUD completo referente a links favoritos dos usuários (bookmarks). Além disso, a aplicação conta com teste automatizados e2e.

## 📋 Features

Algumas coisas que esse projeto faz:

* Utiliza WebSocket para se conectar com a API;
* Mostra o preço de criptomoedas em tempo real;
* Exibe a flutuação de porcentagem de preço em tempo real;
* Reconecta automaticamente se a conexão for perdida, ou acontecer qualquer outro erro;
* Usa Redux para manutenção do estado da aplicação;
* É possível acessar a aplicação com desktop ou mobile, sem perda de perfomance ou quebra na interface;

## 💻 Criado com

* [NestJS](https://nestjs.com/)
* [Drizzle](https://orm.drizzle.team/)
* [Postgres](https://www.postgresql.org/)
* [Zod](https://zod.dev/)
* [Docker](https://www.docker.com/)
* [Passport-jwt](https://www.passportjs.org/packages/passport-jwt/)
* [PactumJS](https://pactumjs.github.io/)
* [DotEnv](https://www.npmjs.com/package/dotenv)
* [Express](https://expressjs.com/pt-br/)
* [Jest](https://jestjs.io/pt-BR/)

## 🚀 Instalação

Para clonar e rodar essa aplicação, é necessário [Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/download/) (que vem com o [npm](http://npmjs.com)) instalado no seu computador. Na linha de comando:

```bash
# Clone esse repositório
$ git clone https://github.com/nardini-22/simple-nest-rest-api.git

# Entre na pasta do repositório
$ cd simple-nest-rest-api

# Instale as dependências
$ npm install

# Cria a database no Docker
$ npm run db:dev:restart

# Rode a aplicação
$ npm run start:dev

# Se achar necessário, abra a GUI do drizzle
$ npx drizzle-kit studio
```

> **Observação**
> Se você está utilizando Linux Bash for Windows, [siga esse guia](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) ou use `node` no prompt de comando. 
