import express from "express";
import cors from "cors";
import "dotenv/config";
import productRouter from "./router/productRouter.js";
import userRouter from "./router/userRouter.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { notFoundHandler } from "./middleware/notFoundHandler.js";

const PORT = process.env.PORT;

export const startServer = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use("/products", productRouter);
  app.use("/users", userRouter);
  app.use(notFoundHandler);
  app.use(errorHandler);
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
};
