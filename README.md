# Description
This is a just a nodejs playground using [hapi](https://hapi.dev/) & [typeorm](https://typeorm.io/#/).   

# Setting up
* Install `ts-node` globally (`npm install -g ts-node`)
* Install project dependencies (`npm install`)
* Define env variable `DATABASE_URL` (for example `DATABASE_URL=postgres://postgres:password@localhost:5432/hapi_db`)
* For tests, you must define `TEST_DATABASE_URL` (for example `TEST_DATABASE_URL=postgres://postgres:password@localhost:5432/test_hapi_db`)
# Running the app
Once you have done the setup run `npm start`.

# Migrations
* Create new migration: `tyopeorm migration:create -n MigrationName`
* Show migrations: `npm run migrations-show`
* Run migrations: `npm run migrations-run`
* Revert migrations: `npm run migrations-revert`

# ToDos
* Add a separate routing configuration
* Escape html and js (in case we decide to use them)
* Add mocking to test cases where applicable
* Check how to do the REST API properly