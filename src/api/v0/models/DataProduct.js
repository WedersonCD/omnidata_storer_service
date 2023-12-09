const mongoose = require('mongoose')

const dataProductSchema = new mongoose.Schema({
    dataProduct_id: {type: mongoose.Schema.Types.ObjectId,auto: true},
    dataProduct_name: {type: String,required: true},
    dataProduct_dominium: {type: String,required: true},
    user_owner:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    dataProduct_createdAt:{type:Date,default:Date.now()},
    dataProduct_updatedAt:{type:Date},
})

dataProductSchema.pre('save', function(next) {
    this.dataProduct_updatedAt = new Date();
    next();
});

const DataProduct = mongoose.model('DataProduct', dataProductSchema);

module.exports = DataProduct;