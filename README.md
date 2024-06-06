# Simple Nest Rest API

[![pt](https://img.shields.io/badge/README-Portuguese-green.svg)](https://github.com/nardini-22/simple-nest-rest-api/blob/master/README.pt-br.md)

## ✏️ Introduction

Using the NestJS course from [freeCodeCamp.org](https://www.youtube.com/@freecodecamp) as a basis, I created a simple REST API that can register and log in users, as well as provide a complete CRUD for users' favorite links (bookmarks). I use NestJS as the main framework, Docker + Postgres for quick and easy database creation, Drizzle as the ORM, Pactum + Jest for automated e2e testing, along with other utility libraries. This project is for study purposes; I did it with the intent of reinforcing the concept of REST API, working with databases for the first time (something I had never been interested in before), and delving a bit deeper into back-end development.

## 📋 Features

A few of the things this project do:

* Signup and signin users;
* Validates signup and signin;
* Uses JWT to return user data;
* Read, create, edit and remove bookmarks;
* Error handling;
* Tests e2e.

## 💻 Technologies
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

## 🚀 Installation

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/download/) and [Docker](https://docs.docker.com/desktop/install/windows-install/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/nardini-22/simple-nest-rest-api.git

# Go into the repository
$ cd simple-nest-rest-api

# Install dependencies
$ npm install

# Create Docker database
$ npm run db:dev:restart

# Create a .env with same values as .env.example

# Run the app
$ npm run start:dev

# If necessary, open Drizzle GUI
$ npx drizzle-kit studio

# In case you want to run tests
$ npm run test:e2e
```

> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.


## ❤️ Enjoy this project? 
Developed by Arthur Nardini.

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/arthur-nardini/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/nardini-22)
