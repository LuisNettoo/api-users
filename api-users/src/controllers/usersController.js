const usersModel = require("../models/usersModel");

const getAll = async (_req, res) => {
  const users = await usersModel.getAll();

  return res.status(200).json(users);
};

const addUser = async (req, res) => {
  const addedUser = await usersModel.addUser(req.body);

  return res.status(201).json(addedUser);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  await usersModel.deleteUser(id);
  return res.status(204).json();
};

const updateUser = async (req, res) => {
  const { id } = req.params;

  await usersModel.updateUser(id, req.body);
  return res.status(204).json();
};

module.exports = {
  getAll,
  addUser,
  deleteUser,
  updateUser,
};
