const mongoose = require("mongoose");

const taskSchema = require("../models/taskSchema");

// Post
const createTask = async (req, res) => {
  const { title, description } = req.body;
  console.log(title, description);
  try {
    const Task = await taskSchema.create({
      title,
      description,
    });
    res.status(200).json(Task);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

// To get All tasks - GET

const getTasks = async (req, res) => {
  try {
    const tasks = await taskSchema.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// get singal task - GET
const getSingleTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "Task not found" });
  }

  try {
    const singleTask = await taskSchema.findById(id);
    res.status(200).json(singleTask);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// To Update a task - PATCH

const updateTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "Task ID not found" });
  }

  try {
    const task = await taskSchema.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        ...req.body,
      }
    );
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// To Delete a task - DELETE

const deleteTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "Task ID not found" });
  }

  try {
    const task = await taskSchema.findByIdAndDelete(
      {
        _id: id,
      },
      {
        ...req.body,
      }
    );
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = {
  createTask,
  getTasks,
  getSingleTask,
  updateTask,
  deleteTask,
};
