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

export const getAll = async () => {
    return await prisma.credentials.findMany();
}

export const deleteById = async ( id : number ) => {
    return await prisma.credentials.delete({
        where: {
            id
        }
    });
}
