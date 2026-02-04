const taskService = require('../services/task.service');

const getMine = async (req, res, next) => {
  try {
    const tasks = await taskService.listMyTasks(req.user.id);
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const task = await taskService.createTask(req.user.id, req.body);
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const task = await taskService.updateTask(req.user.id, req.params.id, req.body);
    res.json(task);
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    const result = await taskService.deleteTask(req.user.id, req.params.id);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = { getMine, create, update, remove };
