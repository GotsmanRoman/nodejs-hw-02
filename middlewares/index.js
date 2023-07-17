const { validateBody, validateFavorite } = require("./validateBody");
const isValidId = require("./isValidId");
const authenticate = require("./auth");

module.exports = { validateBody, isValidId, validateFavorite, authenticate };
