import { playerModel } from "../Models/playerModel";

const database: playerModel[] = [
  { id: 1, name: "Messi" },
  { id: 1, name: "Ronaldo" },
];

export const findAllPlayers = async (): Promise<playerModel[]> => {
  return database;
};

export const findPlayerById = async (id: number): Promise<playerModel | undefined> => {
  return database.find((player) => player.id === id)
};
