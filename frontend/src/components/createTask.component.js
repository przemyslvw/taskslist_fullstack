import React from "react";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import { addTask } from "../reducers/tasks/operations";
import { useHistory } from "react-router-dom";

const CreateTask = () => {
  const model = useSelector(state => state.tasks.model);
  const history = useHistory();

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Create New Todo</h3>
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={model}
        onSubmit={(values, { resetForm }) => {
          addTask(values);
          alert("Task " + values.title + " has been added.");
          resetForm();
          history.push("/");
        }}
        render={({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name: </label>
              <input
                name="name"
                type="text"
                value={values.name}
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Lastname: </label>
              <input
                name="lastname"
                type="text"
                value={values.lastname}
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email: </label>
              <input
                name="email"
                type="email"
                value={values.email}
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Category: </label>
              <input
                name="category"
                type="text"
                value={values.category}
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Title: </label>
              <input
                name="title"
                type="text"
                value={values.title}
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Description: </label>
              <input
                name="description"
                type="text"
                value={values.description}
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Data completion: </label>
              <input
                name="data_end"
                type="date"
                value={values.data_end}
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <select
                name="priority"
                value={values.priority}
                className="form-control"
                onChange={handleChange}
              >
                <option disabled value="">
                  choose one ...
                </option>
                <option value="INFO">INFO</option>
                <option value="WARNING">WARNING</option>
                <option value="ERROR">ERROR</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Create Todo"
                className="btn btn-primary"
              />
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default CreateTask;
