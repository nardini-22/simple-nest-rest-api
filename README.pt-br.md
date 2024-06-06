# Simple Nest Rest API

[![en](https://img.shields.io/badge/README-English-red.svg)](https://github.com/nardini-22/simple-nest-rest-api/blob/master/README.md)

## ✏️ Introdução

Usando como base o curso de NestJS do [freeCodeCamp.org](https://www.youtube.com/@freecodecamp), criei uma simples API REST que pode cadastrar e logar usuários, além de ter um CRUD completo referente a links favoritos dos usuários (bookmarks). Utilizo NestJS como framework principal, Docker + Postgres para criação fácil e rápida do meu banco de dados, Drizzle como ORM, Pactum + Jest para testes automatizados e2e, além de outras bibliotecas utilitárias. Esse projeto é para fins de estudos, fiz com o intuito de reforçar o conceito de API REST, mexer pela primeira vez com banco de dados (algo que nunca tinha me interessado) e me aprofundar um pouco no back-end. 

## 📋 Features

Algumas coisas que esse projeto faz:

* Cadastra e loga usuários;
* Existem validações, tanto para cadastro, quanto para login;
* Utiliza de JWT para retornar os dados do usuário logado;
* Lê, cadastra, edita e remove favoritos (bookmarks);
* Tratamento de erros;
* Apresenta testes automatizados e2e.

## 💻 Tecnologias

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

# Crie a database no Docker
$ npm run db:dev:restart

# Crie um .env com os mesmos valores do .env.example

# Rode a aplicação
$ npm run start:dev

# Se achar necessário, abra a GUI do drizzle
$ npx drizzle-kit studio

# Caso queira rodar os testes da aplicação
$ npm run test:e2e
```

> **Observação**
> Se você está utilizando Linux Bash for Windows, [siga esse guia](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) ou use `node` no prompt de comando.

## ❤️ Gostou desse projeto? 
Desenvolvido por Arthur Nardini.

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/arthur-nardini/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/nardini-22)
