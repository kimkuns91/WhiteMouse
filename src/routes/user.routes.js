const express = require('express');

const router = express.Router();

const controller = require("../controllers/user.controller");

router.post("/", controller.signin);
router.post("/create", controller.create);
router.post("/read", controller.read);
router.put("/", controller.update);
router.delete("/", controller.delete);
router.post("/unique", controller.unique);
router.post("/info", controller.info);

module.exports = router;