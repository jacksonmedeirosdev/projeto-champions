import {Router} from "express";
import * as controller from "../controllers/player-controller";

const router = Router();

router.get("/players", controller.getPlayers);
router.get("/players/:id", controller.getPlayerById);
router.post("/players", controller.createPlayer);
router.patch("/players/:id", controller.updatePlayer);
router.delete("/players/:id", controller.deletePlayer);

export default router;