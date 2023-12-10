const DataProduct = require('../controllers/DataProductController');
const router = require('express').Router();

router.post('/',DataProduct.createDataProduct);
router.get('/',DataProduct.getAllDataProducts);
router.get('/:data_product_id',DataProduct.getDataProductById);


module.exports = router;