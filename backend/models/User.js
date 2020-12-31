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
        default: ['bitcoin','litecoin']
    },
    savedCryptos: {
        type: Array,
        default: ['bitcoin']
    },
    history:{
        type:Object,
        default:{
'btc':{
    'name':'bitcoin',
    'symbol':'btc',
    'qty':0,
    'buy price':0,
    'buy date':'12/12/2020',
    'price now':0,
    'profit':0
},
'ltc':{
    'name':'litecoin',
    'symbol':'ltc',
    'qty':15,
    'buy price':35.236,
    'buy date':'1/06/2019',
    'price now':120.412,
    'profit':0
}

        }
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
