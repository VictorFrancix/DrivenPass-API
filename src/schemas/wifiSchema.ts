import Joi from "joi";

export const wifiSchema = Joi.object().keys({
    name : Joi.string().required(),
    title : Joi.string().required(),
    password : Joi.string().required()
});