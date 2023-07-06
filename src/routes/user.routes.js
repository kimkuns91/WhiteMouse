const express = require('express');

const router = express.Router();

const controller = require("../controllers/user.controller");

router.post("/", controller.signin);

module.exports = router;