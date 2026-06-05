import {Router} from "express";
import { getPlayers } from "../controllers/player-controller";

const router = Router();

router.get("/players", getPlayers);
router.post("/players", getPlayers);

export default router;