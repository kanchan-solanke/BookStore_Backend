import Joi from '@hapi/joi';
export const cartValidator = (req, res, next) => {
  const schema = Joi.object({
    bookName: Joi.string().required(),
    author: Joi.string().required(),
    quantity: Joi.string().required(),
    price: Joi.string().required(),
    description: Joi.string().required(),
    cart_total: Joi.number().required(),
    isPurchased: Joi.boolean().default(false),

  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};

