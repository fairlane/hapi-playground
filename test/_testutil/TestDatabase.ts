import {Connection, createConnection, getConnection} from "typeorm";
import {rejects} from "assert";

// TODO - should create a connection for test db
const ENTITIES_DIR = __dirname + "/../../src/entity/*{.js,.ts}";
const createTestConnection = (): Promise<Connection> => {

  try {
    const conn: Connection = getConnection();
    return new Promise<Connection>(function(resolve, reject) {
      resolve(conn);
    });
  } catch (ConnectionNotFoundError) {
    return createConnection({
      type: 'postgres',
      url: process.env.TEST_DATABASE_URL,
      synchronize: true,
      entities: [ENTITIES_DIR]
    });
  }
}

export {createTestConnection};