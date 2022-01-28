import {Request, ResponseToolkit, server as createServer} from "@hapi/hapi";
import {Connection, getConnection} from "typeorm";
import {UserRepository} from "./repository/UserRepository";
import {getSettings} from "./config/Settings";
import {Settings} from "./types/Types";
import { User } from "./entity/User";
import { EntityMapper } from "./util/EntityMapper";
import { HtmlModel } from "./templates/model/HtmlModel";
import {UserService} from "./service/UserService";
import PasswordUtil from "./util/PasswordUtil";
import * as Path from "path";
import * as Vision from "@hapi/vision";
import * as Handlebars from "handlebars";

export class AppServer {

  private connection: Connection;
  private settings: Settings;
  private userService: UserService;

  constructor() {
    this.connection = getConnection();
    this.settings = getSettings();
    this.userService = new UserService(User);
  }

  async init() {
    const server = createServer({
      port: this.settings.port,
      host: this.settings.host,
      routes: {
        files: {
          relativeTo: Path.join(__dirname, 'public')
        },
        cors: true
      }
    });

    await server.register(Vision);
    // @ts-ignore
    server.views({
      engines: {
        html: Handlebars
      },
      relativeTo: __dirname,
      path: 'templates/html',
      layout: 'layout'
    });

    await server.start();
    
    server.route({
      method: 'GET',
      path: '/',
      handler: (request: Request, h) => {
        let htmlModel = new HtmlModel("Test title", {
          testvar: "ok"
        });
        // @ts-ignore
        return h.view(
            'index',
            htmlModel
        );
      }
    });

    server.route({
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

    server.route({
      method: 'POST',
      path: '/create-user',
      handler: (request: Request, h: ResponseToolkit) => {
        let user: User = EntityMapper.fromRequest(request, new User);
        user.password = PasswordUtil.encrypt(user.password);
        const userRepo = this.connection.getRepository(User);
        return userRepo.save(user).then(savedUser => {
          return savedUser;
        }).catch(err => {
          console.log(err);
          return err;
        });
      }
    });

    server.route({
      method: 'GET',
      path: '/list-users',
      handler: async (request: Request, h: ResponseToolkit) => {
        return await this.userService.findAll();
      }
    });
  }
}