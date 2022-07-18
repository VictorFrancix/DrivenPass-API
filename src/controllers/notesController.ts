import { Request, Response } from 'express';
import * as notesService from '../services/notesServices.js';

export const createNote = async (req: Request, res: Response) => {
    const userId = Number(res.locals.user.id);
    const noteData = req.body;
    const createdNote = await notesService.create(noteData, userId);

    res.status(201).send(createdNote);
}

export const getAllNotes = async (req: Request, res: Response) => {
    const userId = Number(res.locals.user.id);
    const notes = await notesService.getAll(userId);
    res.status(200).send(notes);
}

export const getNoteById = async (req: Request, res: Response) => {
    const userId = Number(res.locals.user.id);
    const noteId = Number(req.params.id);
    const note = await notesService.getById(userId, noteId);
    res.status(200).send(note);
}

export const deleteNoteById = async (req: Request, res: Response) => {
    const userId = Number(res.locals.user.id);
    const noteId = Number(req.params.id);
    const note = await notesService.deleteById(userId, noteId);
    res.status(200).send(note);
}
