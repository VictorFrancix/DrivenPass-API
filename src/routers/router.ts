import { Router } from "express";
import "express-async-errors";

import userRouter  from "./userRouter.js";
import credentialRouter from "./credentialRouter.js";

const router = Router();

router.use(userRouter);
router.use(credentialRouter);

export default router;