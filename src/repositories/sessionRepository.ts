import { Sessions } from "@prisma/client";
import { prisma } from "./../configs/database.js";

export type dataSession = Omit< Sessions, "id">;

export const create = async ( dataSession : dataSession ) => {
    return await prisma.sessions.create({
        data: {
            ...dataSession
        }
    });
}