const Todos = require("../models/Todo");

// ========================
//      Get controller
// ========================
const get_all = async (req, res) => {
  try {
    const todos = await Todos.find().sort({ date: -1 });
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// ========================
//      Post controller
// ========================
const create_todo = async (req, res) => {
  const { todo } = req.body;
  try {
    const new_todo = new Todos({
      body: todo,
    });

    const todo_to_save = await new_todo.save();
    res.status(201).json(todo_to_save);
  } catch (err) {
    res.status(500).json(`create error: ${err.message}`);
  }
};

// ========================
//     Delete controller
// ========================
const delete_todo = async (req, res) => {
  try {
    await Todos.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = {
  get_all,
  create_todo,
  delete_todo,
};
