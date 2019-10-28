import types from "./types";

const INITIAL_STATE = {
  list: [],
  model: {
    name: "",
    lastname: "",
    email: "",
    category: "",
    title: "",
    description: "",
    data_end: 0,
    priority: "",
    started: false,
    start: "",
    stop: "",
    visible: true,
    completed: false
  },
  editedTask: {
    name: "",
    lastname: "",
    email: "",
    category: "",
    title: "",
    description: "",
    data_end: 0,
    priority: "",
    started: false,
    start: "",
    stop: "",
    visible: true,
    completed: false
  },
  loading: true
};

const tasksReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case types.GET_TASKS:
      return {
        ...state,
        list: action.payload.sort((a, b) => {
          if (a.data_end > b.data_end) {
            return 1;
          } else {
            return -1;
          }
        }),
        loading: false
      };
    case types.GET_TASK:
      return {
        ...state,
        editedTask: state.list.find(task => task._id === action.payload)
      };
    default:
      return state;
  }
};

export default tasksReducer;
