# Another movie api ;)

> Written in TypeScript with Express

This is an app made to show my code style.

## Getting started

NPM have to be installed, then install globally `typescript`:

```shell
$ npm install -g typescript
```

**To run this project type:**

On first run don't forget to:
```shell
$ npm install
```
and then:
```shell
$ npm run compile 
$ npm start
```

## Configuration

Configuration is read from the following environment variables:

- `DATABASE_CONNECTION_STRING` [String] - connection string to MongoDB. Default value : "mongodb://localhost"
- `PORT` - HTTP port for REST API (default: 8090)
- `MOVIE_API_KEY` - key to fetch data from api with movies
- `MOVIE_API_URL` - url to movie api
- `LOG_LEVEL` - log level one of: `info`, `debug`, `warn`, `error`

## Running with Docker

This project have a docker-compose script delivered you can easly start aplication with database by typing:

```shell
$ npm run compose
```

to stop it type:

```shell
$ npm run compose:down
```