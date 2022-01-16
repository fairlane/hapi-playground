# Description
This is a just a nodejs playground using [hapi](https://hapi.dev/) & [typeorm](https://typeorm.io/#/).   

# Setting up
* Install `ts-node` globally (`npm install -g ts-node`)
* Install project dependencies (`npm install`)
* Define env variable `DATABASE_URL` (for example `DATABASE_URL=DATABASE_URL=postgres://postgres:password@localhost:5432/hapi_db`)

# Running the app
Once you have done the setup run `npm start`.

# Migrations
* Create new migration: `tyopeorm migration:create -n MigrationName`
* Show migrations: `npm run migrations-show`
* Run migrations: `npm run migrations-run`
* Revert migrations: `npm run migrations-revert`

# ToDos
- Introduce a proper service layer for user management (password hashing etc. should go here)
- Add a separate routing configuration
- Escape html and js
- Add templating