import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js";
import * as notesController from "../controllers/notesController.js";
import { notesSchema } from "../schemas/notesSchema.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";


const notesRouter = Router();

notesRouter.post("/notes", validateToken, validateSchema(notesSchema), notesController.createNote);

export default notesRouter;

