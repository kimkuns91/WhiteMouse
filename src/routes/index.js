
const express = require('express');

const router = express.Router();

const userRouter = require('./user.routes');
const boardRouter = require('./board.routes');

router.use('/user', userRouter);
router.use('/board', boardRouter);

module.exports = router;