import {Connection, createConnection} from "typeorm";
import {getSettings} from "../config/Settings";
import {ConnectionOptions} from "typeorm/connection/ConnectionOptions";

const connect = async (): Promise<Connection> => {
  const opts = databaseConfigFromSettings();
  return await createConnection(opts);
}

const databaseConfigFromSettings = (): ConnectionOptions =>  {
  return getSettings().databaseConfig;
}

const c2 = () => {
  // return connect().then(c => {
  //   return c;
  // });
}

export {connect, c2};