import {Request, ResponseToolkit, Server} from "@hapi/hapi";
import {Connection, createConnection} from "typeorm";
import {UserRepository} from "./repository/UserRepository";
import {Settings} from "./config/Settings";

export class AppServer {

  connection: Connection;
  server: Server;
  settings: Settings;
  constructor(connection: Connection, settings: Settings) {
    this.connection = connection;
    this.settings = settings;
    this.server = new Server({
      port: settings.port,
      host: settings.host
    });
  }

  async init() {
    await this.server.start();
    
    this.server.route({
      method: 'GET',
      path: '/',
      handler: (request: Request, h: ResponseToolkit) => {
        return `Hello service in ${this.settings.env}`;
      }
    });

    this.server.route({
      method: 'GET',
      path: '/search',
      handler: (request: Request, h: ResponseToolkit) => {
        let s = request.query.s;
        const userRepo = this.connection.getCustomRepository(UserRepository);
        return userRepo.findByUsername(s).then(user => {
          return user ? user : {"result": "not-found"};
        }).catch(err => {
          console.error(err);
          return `Damn, something is not right: ${err}`;
        })
      }
    });
  }
}