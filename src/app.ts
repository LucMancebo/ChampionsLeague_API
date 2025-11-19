import express from "express";
import { getPlayer } from "./controllers/playersController";
import router from "./Routes/routes";
import cors from "cors"

function createapp() {
  // Cria uma instância do aplicativo Express
  const app = express();

  // Habilita o middleware do Express para parsear corpos de requisições em JSON
  app.use(express.json());

  app.use("/api", router);

  // Define uma rota GET para a raiz do aplicativo
  app.get("/", getPlayer);

const corsOptions = {
  origin: {},
  method: {}
}

  app.use(cors())

  return app;
}

export default createapp;
