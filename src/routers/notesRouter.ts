import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js";
import * as notesController from "../controllers/notesController.js";
import { notesSchema } from "../schemas/notesSchema.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";


const notesRouter = Router();

notesRouter.post("/notes", validateToken, validateSchema(notesSchema), notesController.createNote);
notesRouter.get("/notes", validateToken, notesController.getAllNotes);
notesRouter.get("/notes/:id", validateToken, notesController.getNoteById);
notesRouter.delete("/notes/:id", validateToken, notesController.deleteNoteById);

export default notesRouter;

