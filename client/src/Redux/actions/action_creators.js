import axios from "axios";
const {
  GET_ALL,
  CREATE_TODO,
  DELETE_TODO,
  LOADING,
} = require("./action_types");

// ==================
//     Get todos
// ==================
export const get_todos_action_creator = () => (dispatch) => {
  // DO NOT forget that action creators when dispatched neeed to be invoked
  dispatch(loading_action_creator());

  axios
    .get("/api/todos")
    .then((res) => dispatch({ type: GET_ALL, payload: res.data }))
    .catch((err) => console.log(err.message));
};

// ==================
//    Create todo
// ==================
export const create_todo_action_creator = (data) => (dispatch) => {
  axios.post("/api/todos", { todo: data }).then((res) => {
    console.log(res.data);
    dispatch({ type: CREATE_TODO, payload: res.data });
  });
};

// ==================
//    Delete todo
// ==================
export const delete_todo_action_creator = (id) => (dispatch) => {
  axios
    .delete(`/api/todos/${id}`)
    .then((res) => dispatch({ type: DELETE_TODO, payload: id }))
    .catch((err) => console.log(err.message));
};

export const loading_action_creator = () => ({ type: LOADING });
