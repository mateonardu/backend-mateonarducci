const Task = require('../models/Task');
const AppError = require('../utils/AppError');

const listMyTasks = async (userId) => {
  return Task.find({ user: userId }).sort({ createdAt: -1 });
};

const createTask = async (userId, { title }) => {
  if (!title) throw new AppError('El título es obligatorio', 400);

  const task = await Task.create({
    title,
    user: userId,
  });

  return task;
};

const updateTask = async (userId, taskId, data) => {
  const task = await Task.findOne({ _id: taskId, user: userId });
  if (!task) throw new AppError('Tarea no encontrada o no te pertenece', 404);

  if (data.title !== undefined) task.title = data.title;
  if (data.completed !== undefined) task.completed = data.completed;

  await task.save();
  return task;
};

const deleteTask = async (userId, taskId) => {
  const task = await Task.findOne({ _id: taskId, user: userId });
  if (!task) throw new AppError('Tarea no encontrada o no te pertenece', 404);

  await task.deleteOne();
  return { message: 'Tarea eliminada' };
};

module.exports = { listMyTasks, createTask, updateTask, deleteTask };
