import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

/** Member */

router.post("/member/login", memberController.login);
router.post("/member/signup", memberController.signup);
router.get("/member/detail", memberController.verifyAuth);

/** Product */

/** Order */

export default router;
