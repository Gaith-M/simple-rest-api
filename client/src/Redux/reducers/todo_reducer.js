const {
  GET_ALL,
  CREATE_TODO,
  DELETE_TODO,
  LOADING,
} = require("../actions/action_types");

const inital_state = {
  items: [],
  loading: false,
};

export default (state = inital_state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case GET_ALL:
      return { ...state, items: [...action.payload], loading: false };
    case CREATE_TODO:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        items: state.items.filter(({ _id }) => _id !== action.payload),
      };
    default:
      return state;
  }
};
