import Joi from "joi";

export const cardSchema = Joi.object().keys({
    title: Joi.string().required(),
    holder: Joi.string().required(),
    cvv: Joi.string().required(),
    password: Joi.string().required(),
    expiry: Joi.string().required(),
    number: Joi.string().required(),
    isvirtual: Joi.boolean().required(),
    type : Joi.string().required()
});

