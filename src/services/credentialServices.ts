import * as credentialRepository from "./../repositories/credentialRepository.js";
import * as dataUtils from "./../utils/dataUtils.js";

export const create = async ( credentialsData : credentialRepository.credentialsData, userId: number) => {
    const { title, url, username, password } = credentialsData;
    const encryptedPassword = dataUtils.encrypt(password);
    const data = { title, url, username, password: encryptedPassword, userId};
    await checkTitleExists(title);
    return await credentialRepository.create(data);
}

const checkTitleExists = async (title: string) => {
    const credential = await credentialRepository.getByTitle(title);
    if (credential) {
        throw {
            type: "conflict",
            message: "credential already exists"
        }
    }
}

export const getAll = async ( userId : number ) => {
    return await credentialRepository.getAll(userId);
}

export const getById = async (userId: number, credentialId : number ) => {

    dataUtils.checkUser(userId, credentialId);

    if(!credentialId) {
        throw {
            type: "not found",
            message: "credential not found"
        }
    }

    const credential = await credentialRepository.getById(credentialId);
    credential.password = dataUtils.decrypt(credential.password);

    return credential;
}





