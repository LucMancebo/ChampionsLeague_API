import * as playerData from "../data/playersData";
import { noContent, ok } from "../utils/HTTPHelper";

export const getPlayerService = async () => {
  const data = await playerData.findAllPlayers()
  let response = null

  if(data){
    response = await ok(data)
  } else{
    response = await noContent()
  }
 
  return response
};
