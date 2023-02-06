const connection = require("./connection");

const getAll = async () => {
  const [users] = await connection.execute("SELECT * FROM users");
  return users;
};

const addUser = async (user) => {
  const { username, email } = user;

  const currentDate = new Date(Date.now()).toLocaleString();

  const query =
    "INSERT INTO users(username, email, created_at) VALUES (?, ?, ?)";

  const [addedUser] = await connection.execute(query, [
    username,
    email,
    currentDate,
  ]);

  return { insertId: addedUser.insertId };
};

const deleteUser = async (id) => {
  const removedUser = await connection.execute(
    "DELETE FROM users WHERE id = ?",
    [id]
  );

  return removedUser;
};

const updateUser = async (id, user) => {
  const { username, email } = user;

  const updateUser = await connection.execute(
    "UPDATE users SET username = ?, email = ? WHERE id= ?",
    [username, email, id]
  );
  return updateUser;
};

module.exports = {
  getAll,
  addUser,
  deleteUser,
  updateUser,
};
