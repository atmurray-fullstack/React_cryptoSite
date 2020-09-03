const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    userName: {
        type: String,
        trim: true,
        required: "Enter a user name"
    },
    passWord: {
        type: String,
        required: "Enter a password"
    },
    date: {
        type: Date,
        default: Date.now
    },
    favorites: {
        type: Array,
        default: ['bitcoin']
    },
    savedCryptos: {
        type: Array,
        default: []
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
