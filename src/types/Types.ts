import {ConnectionOptions} from "typeorm/connection/ConnectionOptions";

export enum Env {
  DEV = "dev",
  PROD = "prod",
  TEST = "test"
}

export interface Settings {
  port: string;
  host: string;
  passwordSalt: string;
  databaseConfig: ConnectionOptions;
  env: Env;
  nodeEnv: string;
  aws_pool_id: string;
  aws_client_id: string;
}