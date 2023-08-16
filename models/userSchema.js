const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: Number,
        required: true,
        match: /^[0-9]{10}$/
    },
});

const users = new mongoose.model("users",userSchema);


module.exports = users;