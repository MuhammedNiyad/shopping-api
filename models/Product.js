const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true,
        },
        ProductPrice: {
            type: Number,
            required: true,
        },
        productCategoryID: {
            type: Number,
            required: true
        }

    }
);

const Product = mongoose.Model("Product", productSchema);

module.exports = Product;