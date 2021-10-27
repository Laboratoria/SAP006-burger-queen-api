const { Users } = require('../db/models');

    const getUsers = async (req, res) => {
        await Users.findAll({
          attributes: {
            exclude: "password"
          }
        })
        .then((result) => {
        res.status(200).json(result);
        })
        .catch((error) => {
            res.status(400).json({
            code: 400,
            error: error.message
            })
        });
    };
    
    const postUsers = async (req, res) => {
        const { name, email, password, role, restaurant } = req.body;
        await Users.create({ name, email, password, role, restaurant })
        .then((result) => {
            res.status(201).json(result);
        })
        .catch((error) =>{
            res.status(400).json({
            code: 400,
            error: error.message
            })
        });
    };

    const getUserId = async (req, res) => {
        await Users.findByPk(req.params.uid, {
          attributes: {
            exclude: "password"
          }
        })
        .then((result) => {
        res.status(200).json(result);
        })
        .catch((error) => {
            res.status(400).json({
            code: 400,
            error: error.message
            })
        });
    };

    const putUser = async (req, res) => {
        const { name, email, password, role, restaurant } = req.body;
        await Users.update ({name, email, password, role, restaurant}, {
                where: { id:req.params.uid },
        })
        .then((result) => {
            res.status(200).json(result);
            })
            .catch((error) => {
                res.status(400).json({
                code: 400,
                error: error.message
                })
            });
    }

    const deleteUser = async (req, res) => {
        await Users.destroy({
            where: {
                id: req.params.uid,
            },
        })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            res.status(400).json({
            code: 400,
            error: error.message
            })
        });

    }
    
module.exports = {
    getUsers,
    postUsers,
    getUserId,
    putUser,
    deleteUser
}