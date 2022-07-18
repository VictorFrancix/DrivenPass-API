import { Router } from "express";
import "express-async-errors";

import userRouter  from "./userRouter.js";

const router = Router();

router.use(userRouter);

export default router;