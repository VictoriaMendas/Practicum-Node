import express from "express";
import cors from "cors";
import "dotenv/config";
import { router } from "./router/productRouter.js";

const PORT = process.env.PORT;

export const startServer = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use("/products", router);
  app.use((req, res) => {
    res.status(404).json({ messege: "Rout not Found" });
  });
  app.use((req, res) => {
    res.status(500).json({ message: "Something went  wrong" });
  });
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
};
