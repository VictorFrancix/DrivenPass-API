import { prisma } from "./../configs/database.js";
import { Notes } from "@prisma/client";

export type notesData = Omit<Notes, "id">;

export const create = async ( notesData : notesData ) => {
    return await prisma.notes.create({
        data: notesData
    });
}

export const getAll = async ( userId : number ) => {
    return await prisma.notes.findMany({
        where : { userId }
    });
}

export const getById = async ( id : number ) => {
    return await prisma.notes.findFirst({
        where: {
            id
        }
    });
}

export const getByTitle = async ( title : string ) => {
    return await prisma.notes.findFirst({
        where: {title}
    });
}

export const deleteById = async ( id : number ) => {
    return await prisma.notes.delete({
        where: {
            id
        }
    });
}

