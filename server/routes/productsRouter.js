const { Router } = require('express');
const {
  getAllProducts, getProduct, postAllProducts, putProduct, deleteProduct,
} = require('../controller/productsController');

const router = Router();

router.get('/', getAllProducts);
router.post('/', postAllProducts);

router.get('/:productid', getProduct);
router.put('/:productid', putProduct);
router.delete('/:productid', deleteProduct);

module.exports = router;