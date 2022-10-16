Js Client actions tracker
-

Client actions tracker using NodeJS & MongoDb

## To run with docker

```
    docker-compose build
    docker-compose up -d
```

## To run locally

```
    cp .env.dist .env
```

You need to set up `MONGO_INITDB_ROOT_USERNAME`, `MONGO_INITDB_ROOT_PASSWORD`
and create mongodb database according these credentials.

You can also change `MONGO_DB_NAME`, `TRACKER_PORT`, `WEBSITE_PORT` variables.


```
    npm i
    npm i && npm run clean && npm run build && npm run browserify:client
    npm start
```

From development watch mode

```
    npm watch
```