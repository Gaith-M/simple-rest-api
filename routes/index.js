const express = require("express");
const router = express.Router();
const todos_route = require("./api/todos_route");

router.use(todos_route);

module.exports = router;
