import types from "./types";

const getall = tasks => ({
  type: types.GET_TASKS,
  payload: tasks
});
const getTask = task_id => ({
  type: types.GET_TASK,
  payload: task_id
});

export default {
  getall,
  getTask
};
