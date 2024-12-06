import { initMongoConnection } from "./db/initMongoConnection.js";

import setupServer from "./server.js";
import runAllSeeds from "./seeds/index.js";

const bootstrap = async () => {
  await initMongoConnection();
  // runAllSeeds();
  setupServer();
};

bootstrap();
