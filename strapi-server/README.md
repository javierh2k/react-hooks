# running Strapi

Great tool to create a backend in a matter of seconds, without exaggerating ...

## docker

```bash
docker-compose up -d
```

patience takes a while to start...

## Localhost

http://localhost:1337/admin

install graphql extension

http://localhost:1337/graphql

## Volumes

> App-CMS-Headless
> ../../data/strapi-app

> db mongo
> ../../data/db

## Environment variables

- `APP_NAME` to override the `strapi-app` generated folder name (you should also update the volumes paths).
- `DATABASE_CLIENT` a database providers supported by Strapi: MongoDB, Postgres, MySQL, Sqlite3 and Redis.
- `DATABASE_HOST` database service name.
- `DATABASE_PORT` depends on your database client.
- `DATABASE_NAME` initializes a database with specific name (default strapi). When using MongoDB, you should also update the `MONGO_INITDB_DATABASE` environment in the db service.
- `DATABASE_USERNAME` set the username of the database connection.
- `DATABASE_PASSWORD` set the password of the database connection.
- `DATABASE_SRV` boolean for SRV.
- `DATABASE_SSL` boolean for SSL.
- `DATABASE_AUTHENTICATION_DATABASE` set the authentification.
