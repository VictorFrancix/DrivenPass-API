import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import * as sessionRepository from '../repositories/sessionRepository.js';
import * as userRepository from '../repositories/userRepository.js';

dotenv.config();

export const signup = async (dataUser: userRepository.dataUser) => {

    const { email, password } = dataUser;

    await checkUserExists(email);

    const encryptedPassword = encryptPassword(password);

    await userRepository.create({ email : email, password: encryptedPassword });

}

const checkUserExists = async (email: string) => {
    const user = await userRepository.getByEmail(email);
    if (user) {
        throw {
            type: "conflict",
            message: "Email already registered"
        }
}
}

const encryptPassword = (password: string) => {
    const salt = bcrypt.genSaltSync(+process.env.SALT_ROUNDS);
    const encryptPassword = bcrypt.hashSync(password, salt);
    return encryptPassword;
}

export const signin = async (dataUser: userRepository.dataUser) => {
    const {email, password} = dataUser;
    const user = await userRepository.getByEmail(email);

    if (!user) {
        throw {
            type: "unauthorized",
            message: "invalid email or password"
        }
    }

    comparePassword(password, user.password);
    
    const token = createToken(user.id);

    await sessionRepository.create({ userId: user.id, token: token });

    return {token}
}

const comparePassword = (password: string, encryptPassword: string) => {
    const isValid = bcrypt.compareSync(password, encryptPassword);
    if (!isValid) {
        throw {
            type: "unauthorized",
            message: "invalid email or password"
        }
    }
}

const createToken = (id: number) => {
    
    const config = { expiresIn: "1h" };

    const token = Jwt.sign({ id }, process.env.JWT_SECRET, config);

    return token;
}
