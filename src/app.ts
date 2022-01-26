import {AppServer} from "./AppServer";
import {connect} from "./connection/Database";

connect().then(() => {
  const app = new AppServer();
  app.init()
});

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});


