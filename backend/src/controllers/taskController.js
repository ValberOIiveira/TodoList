const { json } = require("express");
const taskModel = require("../models/taskModel");

//Listando todas as tarefas
const getAll = async (req, res) => {
  const tasks = await taskModel.getAll();
  return res.status(200).json(tasks);
};

const createTask = async (req, res) => {
  const tasks = await taskModel.createTask(req.body);
  return res.status(201).json({message : 'Task created successfully'});

}

const deleteTask = async (req,res) => {

  const {id} = req.params;

  await taskModel.deleteTask(id);

  return res.status(200).json({message : 'Task deleted successfully'});


};


const updateTask = async (req, res) => {
  const {id} = req.params;

  await taskModel.updateTask(id, req.body);

  return res.status(200).json({message: 'Task updated successfully'});

};


module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask
};
