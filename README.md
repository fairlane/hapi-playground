# Description
This is a just a nodejs playground using [hapi](https://hapi.dev/) & [typeorm](https://typeorm.io/#/).   

# Setting up
* Install `ts-node` globally (`npm install -g ts-node`)
* Install project dependencies (`npm install`)
* Define env variable `DATABASE_URL` (for example `DATABASE_URL=DATABASE_URL=postgres://postgres:password@localhost:5432/hapi_db`)

# Running the app
Once you have done the setup run `npm start`.

# ToDos
- Populate settings from env
- Add host and port to the settings 
- Add a separate routing configuration
- Introduce a proper service layer
- Escape html and js
- Add templating
- Add tests