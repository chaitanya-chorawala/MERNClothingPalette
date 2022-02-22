const express = require("express");
const router = express.Router();

const RegistrationController = require("../Controllers/RegistrationController");

router.get("/", RegistrationController.List);
router.post("/Add", RegistrationController.Add);
router.post("/Login", RegistrationController.Login);

module.exports = router;