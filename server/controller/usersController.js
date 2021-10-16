const { User } = require("../db/models");

const getAllUsers = (req, res, next) => {
  const users = await User.findAll({
    attributes: {
      exclude: "password",
    },
  });
  users
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => next({ code: 400, err }));
};

const getUserById = (req, res) => {
  User.findAll({
    where: {
      id: req.params.id,
    },
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() =>
      res.json({
        message:'ERROR! Try again!',
      })
    );
};

//INSERT USER
const postUser = (req, res) => {
  const { name, email, password, role } = req.body;
  User.create({
    name,
    email,
    password,
    role,
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() =>
      res.json({
        message: 'ERROR! Try again!',
      })
    );
};

//CHANGES THE DATA
const putUser = (req, res) => {
  const { name, email, password, role } = req.body;
  User.update(
    {
      name,
      email,
      password,
      role,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then(() => {
      res.status(200).json({
        message: 'Updated successfully!',
      });
    })
    .catch(() => {
      res.json({
        message: 'ERROR! Try again!',
      });
    });
};

//DELETE USER
const deleteUser = (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({
        message: 'User successfully deleted.',
      });
    })
    .catch(() => {
      res.json({
        message: 'ERROR! Try again!',
      });
    });
};

module.exports = {
  getAllUsers,
  getUserById,
  postUser,
  putUser,
  deleteUser,
};
