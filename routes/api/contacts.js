const express = require("express");
const router = express.Router();

const { contactsSchema } = require("../../Schemas/contacts");
const { validateBody } = require("../../validate");
const controller = require("../../controller/contacts");

router.get("/", controller.getAll);

router.get("/:contactId", controller.getById);

router.post("/", validateBody(contactsSchema), controller.add);

router.delete("/:contactId", controller.deleteById);

router.put("/:contactId", validateBody(contactsSchema), controller.updateById);

module.exports = router;
