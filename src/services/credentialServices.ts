import * as credentialRepository from "./../repositories/credentialRepository.js";
import * as dataUtils from "./../utils/dataUtils.js";

export const create = async ( credentialsData : credentialRepository.credentialsData, userId: number) => {
    const { title, url, username, password } = credentialsData;
    const encryptedPassword = dataUtils.encrypt(password);
    const data = { title, url, username, password: encryptedPassword, userId};
    return await credentialRepository.create(data);
}



