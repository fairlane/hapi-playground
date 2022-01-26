import {Env, Settings} from "../types/Types";
import {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions";
import * as PostgresConnectionStringParser from "pg-connection-string";

const resolveEnv = (): Env => {
  const envString = process.env.NODE_ENV ?? "test";
  for (const envValue in Env) {
    if (envValue.toUpperCase() === envString.toUpperCase()) {
      return Env[envValue];
    }
  }
  throw new Error(`Invalid / not supported env in NODE_ENV: ${envString}`);
}

const getSettings = (): Settings => {
  let dbUrl = process.env.TEST_DATABASE_URL
  let synchronize = true;
  const env:Env = resolveEnv();
  if (env != Env.TEST) {
    dbUrl = process.env.DATABASE_URL;
    synchronize = false;
  }
  const connectionOptions = PostgresConnectionStringParser.parse(dbUrl);
  const databaseOrmConfig: PostgresConnectionOptions = {
    type: "postgres",
    name: "default",
    host: connectionOptions.host,
    port: +connectionOptions.port,
    username: connectionOptions.user,
    database: connectionOptions.database,
    password: connectionOptions.password,
    synchronize: synchronize,
    logging: false,
    entities: [
      "src/entity/**/*.ts"
    ],
    migrationsTableName: "database_migration",
    migrations: [
      "src/migration/**/*.ts"
    ],
    cli: {
      entitiesDir: "src/entity",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber"
    }
  }
  return {
    databaseConfig: databaseOrmConfig,
    host: process.env.HAPI_HOST || "localhost",
    passwordSalt: process.env.PASSWORD_SALT || "34209ewfpoewkf0w3irier=)I=)€#I=Err325RERT3??%%!",
    port: process.env.HAPI_PORT || "3000",
    nodeEnv: process.env.NODE_ENV,
    env: env
  }
}
export {getSettings};
