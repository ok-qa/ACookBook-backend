import { initMongoConnection } from "./db/initMongoConnection.js";
import runAreasSeed from "./seeds/areas.js";
import runCategoriesSeed from "./seeds/categories.js";
// import getAllUsers from "./services/users.js";
import setupServer from "./server.js";

const bootstrap = async () => {
  await initMongoConnection();
  // await runCategoriesSeed();
  // await runAreasSeed();
  setupServer();
  // getAllUsers();
};

bootstrap();
