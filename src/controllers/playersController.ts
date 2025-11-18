import { Request, Response } from "express";
import { getPlayerService } from "../services/playersService";

export const getPlayer = async (req: Request, res: Response) => {
  const HttpResponse = getPlayerService();

  // Envia uma resposta "Hello World" quando a rota é acessada
  res.status( (await HttpResponse).statusCode).json( (await HttpResponse).body );
};
