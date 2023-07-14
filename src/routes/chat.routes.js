const express = require('express');

const router = express.Router();

const controller = require("../controllers/chat.controller");

router.post("/", controller.createRoom);

module.exports = router;