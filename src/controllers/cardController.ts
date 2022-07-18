import { Request, Response } from "express";
import * as cardService from "../services/cardServices.js";

export const createCard = async (req: Request, res: Response) => {
    const userId = Number(res.locals.user.id);
    const cardData = req.body;
    const createdCard = await cardService.create(cardData, userId);

    res.status(201).send(createdCard);
}

export const getAllCards = async (req: Request, res: Response) => {
    const userId = Number(res.locals.user.id);
    const cards = await cardService.get(userId);
    res.status(200).send(cards);
}

export const getCardById = async (req: Request, res: Response) => {
    const userId = Number(res.locals.user.id);
    const cardId = Number(req.params.id);
    const card = await cardService.getById(userId, cardId);
    res.status(200).send(card);
}

export const deleteCardById = async (req: Request, res: Response) => {
    const userId = Number(res.locals.user.id);
    const cardId = Number(req.params.id);
    const card = await cardService.deleteById(cardId, userId);
    res.status(200).send(card);
}

