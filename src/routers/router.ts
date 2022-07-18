import { Router } from "express";
import "express-async-errors";

import userRouter  from "./userRouter.js";
import credentialRouter from "./credentialRouter.js";
import notesRouter from "./notesRouter.js";

const router = Router();

router.use(userRouter);
router.use(credentialRouter);
router.use(notesRouter);

export default router;