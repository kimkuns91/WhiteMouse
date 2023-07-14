
const express = require('express');

const router = express.Router();

const userRouter = require('./user.routes');
const boardRouter = require('./board.routes');
const chatRouter = require('./chat.routes');

router.use('/user', userRouter);
router.use('/board', boardRouter);
router.use('/chat', chatRouter);

module.exports = router;