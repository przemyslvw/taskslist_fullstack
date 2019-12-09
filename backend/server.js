const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const taskRoutes = express.Router();
const PORT = 4000;

let Task = require("./task.model");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/tasks", { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

taskRoutes.route("/").get(function(req, res) {
  Task.find(function(err, tasks) {
    if (err) {
      console.log(err);
    } else {
      res.json(tasks);
    }
  });
});

taskRoutes.route("/:id").get(function(req, res) {
  const id = req.params.id;
  Task.findById(id, function(err, task) {
    res.json(task);
  });
});

taskRoutes.route("/add").post(function(req, res) {
  let task = new Task(req.body);
  task
    .save()
    .then(task => {
      res.status(200).json({ task: "task added successfully" });
    })
    .catch(err => {
      res.status(400).send("adding new task failed");
    });
});

taskRoutes.route("/update/:id").post(function(req, res) {
  Task.findById(req.params.id, function(err, task) {
    if (!task) res.status(404).send("data is not found");
    else task.name = req.body.name;
    task.lastname = req.body.lastname;
    task.email = req.body.email;
    task.category = req.body.category;
    task.title = req.body.title;
    task.description = req.body.description;
    task.data_end = req.body.data_end;
    task.priority = req.body.priority;
    task.started = req.body.started;
    task.start = req.body.start;
    task.stop = req.body.stop;
    task.visible = req.body.visible;
    task.completed = req.body.completed;

    task
      .save()
      .then(task => {
        res.json("Task " + task.title + " updated");
      })
      .catch(err => {
        res.status(400).send("Update not possible");
      });
  });
});

app.use("/tasks", taskRoutes);

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
