import { Request, Response } from 'express';
import * as notesService from '../services/notesServices.js';

export const createNote = async (req: Request, res: Response) => {
    const userId = Number(res.locals.user.id);
    const noteData = req.body;
    const createdNote = await notesService.create(noteData, userId);

    res.status(201).send(createdNote);
}