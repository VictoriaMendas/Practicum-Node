import { initMongoDB } from "./db/mongoDBCollection.js";
import { startServer } from "./server.js";

(async () => {
  await initMongoDB();
  startServer();
})();
