const Joi = require("joi");
const contactsSchema = Joi.object().keys({
  name: Joi.string().required().messages({
    "any.required": "Field 'name' is missing",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "Field 'email' is missing",
  }),
  phone: Joi.string().required().messages({
    "any.required": "Field 'phone' is missing",
  }),
  favorite: Joi.boolean().messages({
    "any.required": "Field 'favorite' is missing",
  }),
});
const favoriteSchema = Joi.object().keys({
  favorite: Joi.boolean().required().messages({
    "any.required": "missing field favorite",
  }),
});

module.exports = {
  contactsSchema,
  favoriteSchema,
};
