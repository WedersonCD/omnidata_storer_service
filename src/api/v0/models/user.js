const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId,auto: true},
    user_name: {type: String,required: true},
    user_externalId :{type: String,required: true},
    user_createdAt:{type:Date,default:Date.now()},
    user_updatedAt:{type:Date},
})

userSchema.pre('save', function(next) {
    this.user_updatedAt = new Date();
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;

