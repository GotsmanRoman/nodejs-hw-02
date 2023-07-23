const { validateBody, validateFavorite } = require("./validateBody");
const isValidId = require("./isValidId");
const authenticate = require("./auth");
const upload = require("./upload");

module.exports = {
  validateBody,
  isValidId,
  validateFavorite,
  authenticate,
  upload,
};
