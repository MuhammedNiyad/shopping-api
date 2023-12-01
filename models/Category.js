 const mongoose = require('mongoose');

 const categorySchema = new mongoose.Schema(
    {
        CategoryName: {
            type: String,
        }
    }
 );

 const Category = mongoose.model('Category', categorySchema);

 module.exports = Category;