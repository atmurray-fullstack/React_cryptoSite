const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        min: 7,
        max: 255
    },
    email: {
        type: String,
        trim: true,
        required: true,
        max: 255,
        min: 7
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 7
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    favorites: {
        type: Array,
        default: ['bitcoin']
    },
    savedCryptos: {
        type: Array,
        default: ['bitcoin']
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
