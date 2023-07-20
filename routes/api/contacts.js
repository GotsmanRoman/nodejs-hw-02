const express = require("express");
const router = express.Router();
const { contactsSchema, favoriteSchema } = require("../../Schemas/contacts");
const {
  validateBody,
  isValidId,
  validateFavorite,
  authenticate,
} = require("../../middlewares");
const controller = require("../../controller/contacts");

router.get("/", authenticate, controller.getAll);

router.get("/:contactId", authenticate, isValidId, controller.getById);

router.post("/", authenticate, validateBody(contactsSchema), controller.add);

router.delete("/:contactId", authenticate, isValidId, controller.deleteById);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateFavorite(favoriteSchema),
  controller.updateStatusContact
);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(contactsSchema),
  controller.updateById
);

module.exports = router;
