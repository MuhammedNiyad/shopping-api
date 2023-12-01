const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema(
    {
        customerID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        productID: {
            type : mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    }
)

const Order = mongoose.model('Order', )