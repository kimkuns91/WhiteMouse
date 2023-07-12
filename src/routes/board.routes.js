const express = require('express');
const router = express.Router();

const controller = require("../controllers/board.controller");

router.post("/", controller.create);
router.get("/:board_id", controller.read);
router.get("/", controller.load);
router.put("/:board_id", controller.update);
router.delete("/:board_id", controller.delete);

module.exports = router;