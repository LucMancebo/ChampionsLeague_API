import * as playerData from "../data/playersData";
import { playerModel } from "../Models/playerModel";
import { StatisticsModel } from "../Models/statistcsModel";
import * as HttpResponse from "../utils/HTTPHelper";

export const getPlayerService = async () => {
  const data = await playerData.findAllPlayers();
  let response = null;

  response = data
    ? await HttpResponse.ok(data)
    : await HttpResponse.noContent();

  return response;
};

export const getPlayerByIdService = async (id: number) => {
  const data = await playerData.findPlayerById(id);
  let response = null;

  response = data
    ? await HttpResponse.ok(data)
    : await HttpResponse.noContent();

  return response;
};

export const createPlayerService = async (player: playerModel) => {
  let response = null;

  response =
    Object.keys(player).length !== 0
      ? await HttpResponse.created(await playerData.insertPlayer(player))
      : await HttpResponse.badRequest();

  return response;
};

export const deletePlayerService = async (id: number) => {
  let response = null;

  const isDeleted = await playerData.deleteOnePlayer(id);

  response = isDeleted ? await HttpResponse.ok({ message: "deleted" }) : await HttpResponse.badRequest()
  return response;
};

export const updatePlayerService = async (
  id: number,
  statistics: StatisticsModel
) => {
  let response = null;
  const data = await playerData.updatePlayer(id, statistics);

  response =
    Object.keys(data).length === 0
      ? (response = await HttpResponse.badRequest())
      : (response = await HttpResponse.ok(data));

  return response;
};
