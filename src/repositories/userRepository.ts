import { Users } from "@prisma/client";
import { prisma } from "./../configs/database.js";

export type dataUser = Omit< Users, "id">;

export const create = async ( dataUser : dataUser ) => {
    return await prisma.users.create({
        data: dataUser
    });
}

export const getByEmail = async( email : string ) => {
    return await prisma.users.findFirst({
        where : {email}
    });
}