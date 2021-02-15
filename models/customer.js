const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    number: {
        type: Number,
        required: [true, 'Number field is required']
    },
    balance: {
        type: Number
    },
    phone: {
        type: Number
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    __v: { type: Number, select: false}
});

const Customer = mongoose.model('customer', CustomerSchema);
module.exports = Customer;