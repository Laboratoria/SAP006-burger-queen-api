const { Router } = require('express');
const {
  getAllOrders, getOrder, postOrder, putOrder, deleteOrder,
} = require('../controller/ordersController');

const router = Router();

router.get('/', getAllOrders);
router.post('/', postOrder);

router.get('/:orderid', getOrder);
router.put('/:orderid', putOrder);
router.delete('/:orderid', deleteOrder);

module.exports = router;