import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getTasks,
  getTask,
  startTask,
  stopTask
} from "../reducers/tasks/operations";
import { useHistory } from "react-router-dom";
import { SpinLoader } from "react-css-loaders";

const TasksList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getTasks());
    }, 100);
  }, []);

  return (
    <div>
      {!tasks.loading ? (
        <div>
          <h3>Tasks List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>End data</th>
                <th>Category</th>
                <th>Priority</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.list
                .filter(task => {
                  return task.visible === true;
                })
                .map(task => (
                  <tr key={task._id}>
                    <td className={task.completed ? "completed" : ""}>
                      {task.title}
                    </td>
                    <td className={task.completed ? "completed" : ""}>
                      {task.description}
                    </td>
                    <td className={task.completed ? "completed" : ""}>
                      {task.data_end}
                    </td>
                    <td className={task.completed ? "completed" : ""}>
                      {task.category}
                    </td>
                    <td className={task.completed ? "completed" : ""}>
                      {task.priority}
                    </td>
                    <td>
                      <button
                        className="btn btn-primary btn-success"
                        disabled={task.started}
                        onClick={() => (startTask(task), history.push("/"))}
                      >
                        Start
                      </button>
                      <button
                        className="btn btn-primary btn-danger"
                        disabled={!task.started}
                        onClick={() => (stopTask(task), history.push("/"))}
                      >
                        Stop
                      </button>
                      <Link
                        to={"/edit/" + task._id}
                        onClick={() => dispatch(getTask(task._id))}
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="errorPage">
          <div className="errorPage__content">
            <SpinLoader />
          </div>
        </div>
      )}
    </div>
  );
};

export default TasksList;
