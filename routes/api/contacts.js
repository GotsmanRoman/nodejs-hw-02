const express = require("express");
const router = express.Router();
const { contactsSchema, favoriteSchema } = require("../../Schemas/contacts");
const { validateBody, isValidId, validateFavorite } = require("../../validate");
const controller = require("../../controller/contacts");

router.get("/", controller.getAll);

router.get("/:contactId", isValidId, controller.getById);

router.post("/", validateBody(contactsSchema), controller.add);

router.delete("/:contactId", isValidId, controller.deleteById);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateFavorite(favoriteSchema),
  controller.updateStatusContact
);

router.put(
  "/:contactId",
  isValidId,
  validateBody(contactsSchema),
  controller.updateById
);

module.exports = router;
