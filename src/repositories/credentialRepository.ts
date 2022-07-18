import { Credentials } from "@prisma/client";
import { prisma } from "./../configs/database.js";


export type credentialsData = Omit<Credentials, "id">;

export const create = async ( credentialsData : credentialsData ) => {
    return await prisma.credentials.create({
        data: credentialsData
    });
}

export const getById = async ( id : number ) => {
    return await prisma.credentials.findFirst({
        where: {
            id
        }
    });
}

export const getAll = async (userId: number) => {
    return await prisma.credentials.findMany({
        where : { userId }
    });
}

export const deleteById = async ( id : number ) => {
    return await prisma.credentials.delete({
        where: {
            id
        }
    });
}

export const getByTitle = async ( title : string ) => {
    return await prisma.credentials.findFirst({
        where: {
            title
        }
    });
}
