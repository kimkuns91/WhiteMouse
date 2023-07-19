const express = require('express');

const router = express.Router();

const controller = require("../controllers/openai.controller");

router.post("/", controller.chatAi);

module.exports = router;