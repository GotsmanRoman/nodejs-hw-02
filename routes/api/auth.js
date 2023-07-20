const express = require("express");
const router = express.Router();
const { registerSchema, subscriptionSchema } = require("../../Schemas/user");
const { validateBody, authenticate } = require("../../middlewares");

const controller = require("../../controller/auth");

router.post("/register", validateBody(registerSchema), controller.register);
router.post("/login", validateBody(registerSchema), controller.login);
router.get("/current", authenticate, controller.getCurrent);
router.post("/logout", authenticate, controller.logout);
router.patch(
  "/",
  authenticate,
  validateBody(subscriptionSchema),
  controller.updateSubscription
);

module.exports = router;
