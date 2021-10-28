const { Orders, Products, ProductOrders} = require('../db/models');

    const getOrders = (req, res) => {
      Orders.findAll({
        include: [
          {
            model: Products,
            as: 'Products',
            required: false,
            attributes: [
              'id',
              'name',
              'price',
              'flavor',
              'complement',
              'image',
              'type',
              'sub_type',
            ],
            through: {
              model: ProductOrders,
              as: 'ProductOrders',
              attributes: ['qtd'],
            },
          },
        ],
      })
        .then((result) => {
          res.status(200).json(result);
        })
        .catch((error) =>
          res.status(400).json({
            code: 400,
            error: error.message
          })
        );
    };
    
    const postOrders = async (req, res) => {
      const { user_id, client_name, table, status, processedAt } = req.body;
      await Orders.create({
        client_name,
        user_id, 
        table,
        status,
        processedAt,
      })
      .then((result) => {
        req.body.Products
          .map((item) => {
            const itemProduct = Products.findByPk(item.id);
            if (!itemProduct) {
              return res.status(400).json({
                message: "ERROR! Try again!",
              });
            }
    
            const itemOrders = {
              order_id: result.id,
              product_id: item.id,
              qtd: item.qtd,
            };
    
            ProductOrders.bulkCreate(itemOrders);
    
            return res.status(200).json(result);
          })
          .catch(() =>
            res.status(400).json({
              message: "ERROR! Try again!",
            })
          );
      });
    };
   

    const getOrderId = async (req, res) => {
      await Orders.findAll({
      where: { id: req.params.orderId },
      include: [
        {
          model: Products,
          as: 'Products',
          required: false,
          attributes: [
            'id',
            'name',
            'price',
            'flavor',
            'complement',
            'image',
            'type',
            'sub_type',
          ],
          through: {
            model: ProductOrders,
            as: 'ProductOrders',
            attributes: ['qtd'],
          },
        },
      ],
    })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) =>
        res.status(400).json({
          code: 400,
          error: error.message
        })
      );
    }

    const putOrder = async (req, res) => {
      const { client_name, table, status } = req.body;
      await Orders.update ({ client_name, table, status }, {
              where: { id:req.params.orderId },
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

    const deleteOrder=  async (req, res) => {
      await Orders.destroy({
          where: {
              id: req.params.orderId,
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
    getOrders,
    postOrders,
    getOrderId,
    putOrder,
    deleteOrder
}