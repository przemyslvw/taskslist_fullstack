import actions from "./actions";
import axios from "axios";

// nnew operations
export const getTasks = () => async dispatch => {
  axios
    .get("http://localhost:4000/tasks/")
    .then(response => {
      dispatch(actions.getall(response.data));
    })
    .catch(error => {
      console.log(error.response);
    });
};

export const addTask = task => {
  axios
    .post("http://localhost:4000/tasks/add", task)
    .then(res => console.log(res.data))
    .catch(error => {
      console.log(error.response);
    });
};

export const getTask = taskId => async dispatch => {
  dispatch(actions.getTask(taskId));
};

export const saveTask = task => {
  axios
    .post("http://localhost:4000/tasks/update/" + task._id, task)
    .then(res => console.log(res.data))
    .catch(error => {
      console.log(error.response);
    });
};

export const startTask = task => {
  let d = new Date();
  task.start = d;
  task.started = true;
  axios
    .post("http://localhost:4000/tasks/update/" + task._id, task)
    .then(res => console.log(res.data));
};
export const stopTask = task => {
  let d = new Date();
  task.stop = d;
  task.visible = false;
  axios
    .post("http://localhost:4000/tasks/update/" + task._id, task)
    .then(res => console.log(res.data));
};
