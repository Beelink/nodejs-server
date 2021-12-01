import { Router } from "express";
import AuthJwtMiddleware from "../middlewares/AuthJwt.middleware";
import UserController from "../controllers/User.controller";

const router = Router();

router.post(
  "/user",
  [AuthJwtMiddleware.verifyToken],
  UserController.getCurrentUser
);

export default router;
