import { initMongoConnection } from "./db/initMongoConnection.js";
// import getAllUsers from "./services/users.js";
import setupServer from "./server.js";

const bootstrap = async () => {
  await initMongoConnection();
  setupServer();
  // getAllUsers();
};

bootstrap();
