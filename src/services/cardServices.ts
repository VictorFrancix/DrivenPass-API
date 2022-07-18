import * as cardRepository from "../repositories/cardRepository.js";
import * as dataUtils from "../utils/dataUtils.js"

export async function create(cardData: cardRepository.CardData, userId: number) {
    const {title, password, cvv} = cardData;

    await checkCardTitleExists(title, userId);

    cardData.password = dataUtils.encrypt(password);
    cardData.cvv = dataUtils.encrypt(cvv);

    const data = {...cardData, userId};

    return await cardRepository.create(data);
}

async function checkCardTitleExists(title: string, userId: number) {
    const card = await cardRepository.getByTitle(title);

    if(card && card.userId === userId){
        throw {
            type: "conflict",
            message: "Title already exists"
        }
    }
}

export async function get(userId: number){
    const cards = await cardRepository.getAll(userId);

    return cards
}

export async function getById(userId: number, id: number){
    const card = await cardRepository.getById(id);

    if(!card){
        throw {
            type: "notFound",
            message: "Card not found"
        }
    }

    dataUtils.checkUser(card.userId, userId);

    card.password = dataUtils.decrypt(card.password);
    card.cvv = dataUtils.decrypt(card.cvv);

    return card;
}

export async function deleteById(id: number, userId: number){
    const card = await cardRepository.getById(id);

    if(!card){
        throw {
            type: "notFound",
            message: "Card not found"
        }
    }

    dataUtils.checkUser(card.userId, userId);

    return await cardRepository.deleteById(id);
}