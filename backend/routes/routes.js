const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../models/User');
const { isValidObjectId } = require('mongoose');


router.get('/getUserInfo', verify, async (req, res) => {
    // console.log(req.body)
    // console.log(req.user.id)
    const user = await User.findById(req.user.id)
    console.log(user)

    res.status(200).send('Got everything worked out')
})


module.exports = router;