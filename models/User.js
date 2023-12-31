const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        phoneNo: {
            type: Number,
        }
    }, {
    timestamps: true
}
);
const User = mongoose.Model("User", userSchema);

module.exports = User;