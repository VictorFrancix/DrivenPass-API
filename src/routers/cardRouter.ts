import { Router } from "express";

import { validateToken } from "../middlewares/validateToken.js";
import * as cardController from "./../controllers/cardController.js";
import { cardSchema } from "./../schemas/cardSchema.js";
import { validateSchema } from "./../middlewares/validateSchemaMiddleware.js";

const cardRouter = Router();

cardRouter.post("/cards", validateToken, validateSchema(cardSchema), cardController.createCard);
cardRouter.get("/cards", validateToken, cardController.getAllCards);
cardRouter.get("/cards/:id", validateToken, cardController.getCardById);
cardRouter.delete("/cards/:id", validateToken, cardController.deleteCardById);

export default cardRouter;