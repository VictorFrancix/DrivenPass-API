import {Request, Response} from "express";
import * as credentialService from "./../services/credentialServices.js";


export const createCredential = async (req: Request, res: Response) => {
    const userId = Number(res.locals.user.id)
    const  credentialsData = req.body;
    const createdCredential = await credentialService.create(credentialsData, userId);
    
    res.status(201).send(createdCredential);
}
