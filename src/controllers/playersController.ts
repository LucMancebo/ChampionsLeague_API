import { Request, Response } from "express";
import * as service from "../services/playersService";
import { badRequest, noContent } from "../utils/HTTPHelper";
import { StatisticsModel } from "../Models/statistcsModel";

export const getPlayer = async (req: Request, res: Response) => {
  const HttpResponse = service.getPlayerService();

  // Envia uma resposta "Hello World" quando a rota é acessada
  res.status((await HttpResponse).statusCode).json((await HttpResponse).body);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const HttpResponse = await service.getPlayerByIdService(id);

  res.status(HttpResponse.statusCode).json(HttpResponse.body);
};

export const postPlayer = async (req: Request, res: Response) => {
  const bodyValue = req.body;
  const HttpResponse = await service.createPlayerService(bodyValue);

  if (HttpResponse) {
    res.status(HttpResponse.statusCode).json(HttpResponse.body);
  } else {
    const response = await badRequest();
    res.status(response.statusCode).json(response.body);
  }
};

export const deletePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const HttpResponse = await service.deletePlayerService(id);

  res.status(HttpResponse.statusCode).json(HttpResponse.body);
};

export const updatePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const bodyValue: StatisticsModel = req.body;
  const HttpResponse = await service.updatePlayerService(id, bodyValue);
  res.status(HttpResponse.statusCode).json(HttpResponse.body);
};
