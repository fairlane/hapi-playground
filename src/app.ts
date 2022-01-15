import {createConnection} from "typeorm";
import {Settings} from "./config/Settings";
import { AppServer } from "./AppServer";

createConnection().then(connection => {
  const settings = new Settings();
  const app = new AppServer(connection, settings);
  app.init()
});
process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});


