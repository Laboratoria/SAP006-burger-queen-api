const { Products } = require('../db/models');

    const getProducts = (req, res) => {
        Products.findAll()
        .then((result) => {
        res.status(200).json(result);
        })
        .catch((error) =>{
            res.status(400).json({
            code: 400,
            error: error.message
            })
        });
    };

    const getProductId = (req, res) => {
        Products.findByPk(req.params.productId)
        .then((result) => {
        res.status(200).json(result);
        })
        .catch((error) =>{
            res.status(400).json({
            code: 400,
            error: error.message
            })
        });
    }
module.exports = {
    getProducts,
    getProductId
}