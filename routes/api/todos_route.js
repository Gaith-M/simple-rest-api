const express = require("express");
const router = express.Router();
const {
  get_all,
  create_todo,
  delete_todo,
} = require("../../controllers/todo_controller");

// =========================
//      Get All Todos
// =========================
router.get("/", get_all);

// =========================
//  Post: Create New Todo
// =========================
router.post("/", create_todo);

// =========================
//  Delete: One Todo By Id
// =========================
router.delete("/:id", delete_todo);

module.exports = router;
