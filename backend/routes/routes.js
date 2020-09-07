const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../models/User');
const { isValidObjectId } = require('mongoose');


router.get('/getUserInfo', verify, async (req, res) => {
    // console.log(req.body)
    // console.log(req.user.id)
    const user = await User.findById(req.user.id)
    const { favorites, savedCryptos, userName } = user

    res.status(200).json(
        {
            favorites,
            savedCryptos,
            userName
        }
    )
})


module.exports = router;