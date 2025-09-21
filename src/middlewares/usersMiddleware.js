const validateUsername = (req, res, next) => {
  const { body } = req;

  if (body.username === undefined) {
    return res
      .status(400)
      .json({ message: 'The field "username" is required' });
  }

  if (body.username === "") {
    return res.status(400).json({ message: '"username" cannot be empyt' });
  }

  next();
};

const validateEmail = (req, res, next) => {
  const { body } = req;

  if (body.email === undefined) {
    return res.status(400).json({ message: 'The field "email" is required' });
  }

  if (body.email === "") {
    return res.status(400).json({ message: '"email" cannot be empyt' });
  }

  if (body.email == include("@")) {
    return res.status(400).json({ message: '"email" have to @' });
  }

  next();
};

module.exports = {
  validateUsername,
  validateEmail,
};
