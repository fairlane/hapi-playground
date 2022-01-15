export class Settings {
  env = process.env.NODE_ENV || "development";
  port = process.env.HAPI_PORT || 3000;
  host = process.env.HAPI_HOST || "localhost";
  dbConnectionString = process.env.DATABASE_URL;
}