import { Request, Response } from "express";
import * as wifiServices from "../services/wifiServices.js";

export const createWifi = async (req: Request, res: Response) => {
    const userId = Number(res.locals.user.id);
    const wifiData = req.body;
    const wifi = await wifiServices.create(wifiData, userId);
    res.status(201).send(wifi);
}

export const getAllWifis = async (req: Request, res: Response) => {
    const userId = Number(res.locals.user.id);
    const wifis = await wifiServices.getAll(userId);
    res.status(200).send(wifis);
}

export const getWifiById = async (req: Request, res: Response) => {
    const userId = Number(res.locals.user.id);
    const id = Number(req.params.id);
    const wifi = await wifiServices.getById(userId, id);
    res.status(200).send(wifi);
}

export const deleteWifiById = async (req: Request, res: Response) => {
    const userId = Number(res.locals.user.id);
    const id = Number(req.params.id);
    const deleted = await wifiServices.deleteById(userId, id);
    res.status(204).send(deleted);
}