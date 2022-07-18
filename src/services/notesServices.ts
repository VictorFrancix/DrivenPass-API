import * as notesRepository from './../repositories/notesRepository.js';
import * as dataUtils from '../utils/dataUtils.js';

export async function create(
    secureNoteData: notesRepository.notesData, userId : number
) {
    const { title } = secureNoteData;

    await checkNoteTitleExists(title);

    const data = { ...secureNoteData, userId };

    return await notesRepository.create(data);
}

async function checkNoteTitleExists(title: string) {
    const credential = await notesRepository.getByTitle(title);

    if (credential) {
        throw {
            type: "conflict",
            message: "Title already exists",
        };
    }
}

export async function getAll(userId: number) {
    const notes = await notesRepository.getAll(userId);

    return notes;
}

export async function getById(userId: number, id: number) {
    const note = await notesRepository.getById(id);

    if (!note) {
        throw {
            type: "notFound",
            message: "Secure note not found",
        };
    }

    dataUtils.checkUser(note.userId, userId);

    return note;
}

export async function deleteById(userId: number, id: number) {
    const note = await notesRepository.getById(id);

    if (!note) {
        throw {
            type: "notFound",
            message: "Note not found",
        };
    }

    dataUtils.checkUser(note.userId, userId);

    return await notesRepository.deleteById(id);
}