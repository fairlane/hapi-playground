import {Connection, createConnection} from "typeorm";

// TODO - should create a connection for test db
const ENTITIES_DIR = __dirname + "/../../src/entity/*{.js,.ts}";
const createTestConnection = (): Promise<Connection> => {

  return createConnection({
    type: 'postgres',
    url: process.env.TEST_DATABASE_URL,
    synchronize: true,
    entities: [ENTITIES_DIR]
  })
}

export {createTestConnection};