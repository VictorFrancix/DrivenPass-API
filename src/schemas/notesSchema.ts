import Joi from "joi";

export const notesSchema = Joi.object().keys({
    title: Joi.string().max(50).required(),
    body: Joi.string().max(1000).required()
});