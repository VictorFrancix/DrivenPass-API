import { Router } from "express";

import * as userController from "../controllers/userController.js";
import { userSchema } from "../schemas/userSchema.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";

const userRouter = Router();

userRouter.post("/signin", validateSchema(userSchema), userController.signin);
userRouter.post("/signup", validateSchema(userSchema), userController.signup);


export default userRouter;