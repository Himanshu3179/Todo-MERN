const express = require('express');
const { createTodo, getTodos } = require('./controllers');
const router = express.Router();


router.post('/', createTodo);
router.get('/', getTodos);

module.exports = router;
