const Joi = require("joi");

const registerSchema = Joi.object().keys({
  email: Joi.string().email().required().messages({
    "any.required": "Missing field 'email'",
  }),
  password: Joi.string().min(6).required().messages({
    "any.required": "Missing field 'password'",
  }),
});

const subscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid("starter", "pro", "business")
    .required()
    .messages({
      "any.required": "Missing field 'subscription'",
    }),
});

const verifyEmailSchema = Joi.object({
  email: Joi.string().email().required(),
});

module.exports = {
  registerSchema,
  subscriptionSchema,
  verifyEmailSchema,
};
