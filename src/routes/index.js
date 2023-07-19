
const express = require('express');

const router = express.Router();

const userRouter = require('./user.routes');
const boardRouter = require('./board.routes');
const chatRouter = require('./chat.routes');
const openaiRouter = require('./openai.routes');

router.use('/user', userRouter);
router.use('/board', boardRouter);
router.use('/chat', chatRouter);
router.use('/openai', openaiRouter);

module.exports = router;