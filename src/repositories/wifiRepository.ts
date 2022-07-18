import { Wifi } from "@prisma/client";

import { prisma } from "../configs/database.js";

export type WifiData = Omit<Wifi, "id">;

export async function create(wifiData: WifiData) {
    await prisma.wifi.create({
        data: wifiData,
    });
}

export async function getAll(userId: number) {
    const wifi = await prisma.wifi.findMany({
        where: { userId }
    });

    return wifi;
}

export async function getById(id: number) {
    const wifi = await prisma.wifi.findFirst({
        where: { id }
    });

    return wifi;
}

export async function deleteById(id: number) {
    await prisma.wifi.delete({
        where: { id }
    });
}