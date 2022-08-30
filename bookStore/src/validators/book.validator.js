import Joi from '@hapi/joi';
export const bookValidator = (req, res, next) => {
  const schema = Joi.object({
   
    bookName: Joi.string().required(),
    author: Joi.string().required(),
    quantity: Joi.string().required(),
    price: Joi.string().required(),

  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};

