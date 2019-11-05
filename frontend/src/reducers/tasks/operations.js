import actions from "./actions";
import axios from "axios";

const baseURL = "http://localhost:4000/tasks";

export const getTasks = () => async dispatch => {
  try {
    const response = await axios.get(baseURL);
    const data = await response.data;
    dispatch(actions.getall(data));
  } catch (error) {
    console.log(error.response);
  }
};

export const addTask = task => {
  axios
    .post(`${baseURL}/add`, task)
    .then(res => console.log(res.data))
    .catch(error => {
      console.log(error.response);
    });
};

export const getTask = taskId => dispatch => {
  dispatch(actions.getTask(taskId));
};

export const saveTask = task => {
  axios
    .post(`${baseURL}/update/${task._id}`, task)
    .then(res => console.log(res.data))
    .catch(error => {
      console.log(error.response);
    });
};

export const startTask = task => {
  const d = new Date();
  task.start = d;
  task.started = true;
  axios
    .post(`${baseURL}/update/${task._id}`, task)
    .then(res => console.log(res.data));
};
export const stopTask = task => {
  const d = new Date();
  task.stop = d;
  task.visible = false;
  axios
    .post(`${baseURL}/update/${task._id}`, task)
    .then(res => console.log(res.data));
};
