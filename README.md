# Another movie api ;)

> Written in TypeScript with Express

This is an app made to show my code style.

## Getting started

NPM have to be installed, then install globally `typescript`:

```shell
npm install -g typescript
```

**To run this project type:**

On first run don't forget to:
```shell
npm install
```
and then:
```shell
npm run compile 
npm start
```

## Configuration

Configuration is read from the following environment variables:

- `DATABASE_CONNECTION_STRING` [String] - connection string to MongoDB. Default value : "mongodb://localhost"
- `PORT` - HTTP port for REST API (default: 8090)
