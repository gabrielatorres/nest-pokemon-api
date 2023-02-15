<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

[PokeAPI](https://github.com/nestjs/nest) es un proyecto de prueba para iniciar con la programación de API REST con el framework nest.js.

## Stack

- MongoDB
- Nest.JS

## Installation

### Development enviroment requirements

1. Clonar el proyecto desde su repositorio.
2. Ejecutar

```bash
$ npm install
```

3. Instalar nest cli

```bash
$ npm install -g @nestjs/cli
```

4. Levantar la base de datos

```bash
$ docker-compose up -d
```

5. Reconstruir la base de datos

```bash
$ localhost:3000/api/v1/seed
```

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- Author - [Gabriela Torres]()
- Twitter - [@bygadev](https://twitter.com/bygadev)

## License

[MIT licensed](LICENSE).
