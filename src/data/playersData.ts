import { playerModel } from "../Models/playerModel";
import { StatisticsModel } from "../Models/statistcsModel";

const database: playerModel[] = [
  {
    id: 1,
    name: "Kylian Mbappé",
    club: "Real Madrid",
    nationality: "France",
    position: "ST",
    statistics: {
      overall: 91,
      pace: 97,
      shooting: 89,
      passing: 80,
      driblbling: 92,
      defending: 36,
      physical: 77,
    },
  },
  {
    id: 2,
    name: "Erling Haaland",
    club: "Manchester City",
    nationality: "Norway",
    position: "ST",
    statistics: {
      overall: 91,
      pace: 89,
      shooting: 94,
      passing: 65,
      driblbling: 80,
      defending: 45,
      physical: 88,
    },
  },
  {
    id: 3,
    name: "Kevin De Bruyne",
    club: "Manchester City",
    nationality: "Belgium",
    position: "CM",
    statistics: {
      overall: 91,
      pace: 74,
      shooting: 88,
      passing: 93,
      driblbling: 87,
      defending: 64,
      physical: 78,
    },
  },
  {
    id: 4,
    name: "Lionel Messi",
    club: "Inter Miami",
    nationality: "Argentina",
    position: "RW",
    statistics: {
      overall: 90,
      pace: 80,
      shooting: 89,
      passing: 90,
      driblbling: 94,
      defending: 34,
      physical: 65,
    },
  },
  {
    id: 5,
    name: "Virgil van Dijk",
    club: "Liverpool",
    nationality: "Netherlands",
    position: "CB",
    statistics: {
      overall: 89,
      pace: 72,
      shooting: 60,
      passing: 71,
      driblbling: 72,
      defending: 90,
      physical: 86,
    },
  },
  {
    id: 6,
    name: "Jude Bellingham",
    club: "Real Madrid",
    nationality: "England",
    position: "CM",
    statistics: {
      overall: 88,
      pace: 77,
      shooting: 82,
      passing: 83,
      driblbling: 88,
      defending: 75,
      physical: 82,
    },
  },
  {
    id: 7,
    name: "Vinícius Júnior",
    club: "Real Madrid",
    nationality: "Brazil",
    position: "LW",
    statistics: {
      overall: 89,
      pace: 95,
      shooting: 83,
      passing: 78,
      driblbling: 90,
      defending: 32,
      physical: 68,
    },
  },
  {
    id: 8,
    name: "Mohamed Salah",
    club: "Liverpool",
    nationality: "Egypt",
    position: "RW",
    statistics: {
      overall: 89,
      pace: 92,
      shooting: 86,
      passing: 81,
      driblbling: 88,
      defending: 45,
      physical: 75,
    },
  },
];


export const findAllPlayers = async (): Promise<playerModel[]> => {
  return database;
};

export const findPlayerById = async (id: number): Promise<playerModel | undefined> => {
  return database.find((player) => player.id === id)
};

export const insertPlayer = async(player: playerModel) =>{
  database.push(player)
}

export const deleteOnePlayer = async (id: number) => {
  const index = database.findIndex(player => player.id === id)

  if (index !== -1) {
    database.splice(index, 1)
    return true
  } else {
    return false
  }
}

export const updatePlayer = async(id: number, statistics: StatisticsModel) =>{
  const playerIndex = database.findIndex(player => player.id === id)

if(playerIndex !== -1){
  database[playerIndex].statistics = statistics
}

return database[playerIndex]
}