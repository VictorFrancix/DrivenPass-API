import Cryptr from "cryptr";
import dotenv from "dotenv";

dotenv.config();

export const encrypt = (password: string) => {
    const cryptr = new Cryptr(process.env.CRYPT_KEY);
    return cryptr.encrypt(password);
    }

export const decrypt = (cryptedPassword: string) => {
    const cryptr = new Cryptr(process.env.CRYPT_KEY);
    return cryptr.decrypt(cryptedPassword);
    }

export const checkUser = (userIdToken: number, userIdBody: number) => {
    if (userIdToken !== userIdBody) {
        throw {
            type: "unauthorized",
            message: "user id mismatch"
        }
    }
}