import * as Joi from "joi";

const validateCreateUser = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required().email(),
  password: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  profilePic: Joi.string().optional(),
});

const validateGetUser = Joi.object({
  id: Joi.string().required(),
});

const validateUpdateUser = Joi.object({
  name: Joi.string().optional(),
  email: Joi.string().optional().email(),
  password: Joi.string().optional(),
  phoneNumber: Joi.string().optional(),
  profilePic: Joi.string().optional(),
});

export default {
  validateCreateUser,
  validateGetUser,
  validateUpdateUser,
};
