const DataProductModel = require('../models/DataProduct');

const DataProductController = {}

DataProductController.getAllDataProducts = async (req, res) => {
    try {
        const dataProducts = await DataProductModel.find();
        res.status(200).json(dataProducts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

DataProductController.getDataProductById = async (req, res) => {
    try {
        const dataProductId = req.params.data_product_id;
        const dataProduct = await DataProductModel.findById(dataProductId);

        if (!dataProduct) {
            return res.status(404).json({ message: 'Data Product not found' });
        }

        res.status(200).json(dataProduct);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

DataProductController.createDataProduct = async (req, res) => {
    
    const newDataProduct = new DataProductModel({
        dataProduct_name: req.body.dataProduct_name,
        dataProduct_dominium: req.body.dataProduct_dominium,
        user_owner: req.body.user_owner
    });

    try {
        const savedDataProduct = await newDataProduct.save();
        res.status(201).json(savedDataProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = DataProductController;