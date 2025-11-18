import { Router } from "express";
import * as playersController from "../controllers/playersController";

const router = Router();

router.get("/players", playersController.getPlayer);
router.post("/players", playersController.postPlayer)
router.delete("/players/:id", playersController.deletePlayer )
router.patch("/players/:id", playersController.updatePlayer)
router.get("/players/:id", playersController.getPlayerById)



export default router;
