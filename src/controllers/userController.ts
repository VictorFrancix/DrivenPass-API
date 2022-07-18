import { Request, Response } from "express";

import { dataUser } from "../repositories/userRepository.js";
import * as userService from "./../services/userServices.js"

export const signup = async (req: Request, res: Response) => {
    const dataUser: dataUser = req.body;

    await userService.signup(dataUser)

    res.status(200).send({ message: "User created" });

}

export const signin = async (req: Request, res: Response) => {
    const dataUser: dataUser = req.body;

    const data = await userService.signin(dataUser)

    res.status(200).send(data);

}