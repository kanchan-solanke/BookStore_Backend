import Joi from '@hapi/joi';
export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    fullName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(4).required(),
    phone: Joi.string().required(),

  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};

