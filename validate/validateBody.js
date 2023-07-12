const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  return (req, __, next) => {
    if (Object.keys(req.body).length === 0) {
      next(HttpError(400, "missing fields"));
    }
    const { error } = schema.validate(req.body);
    console.log(error);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };
};
module.exports = validateBody;
