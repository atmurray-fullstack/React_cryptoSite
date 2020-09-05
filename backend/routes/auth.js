const router = require('express').Router();
const User = require('../models/User');
const { registerValidation, loginValidation } = require('./validation')
const bcrypt = require('bcryptjs');



router.post('/register', async (req, res) => {
    const { error } = registerValidation(req.body);
    if (error) {
        console.log(error.details[0].message);
        return res.status(400).send(error.details[0].message);
    }
    const registeredStatus = await User.findOne({ email: req.body.email })
    if (registeredStatus) {
        return res.status(400).send('User is already registered')
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt)


    const { name, email, password } = req.body
    const user = new User({
        userName: name,
        email: email,
        password: hashPassword
    });

    try {
        const newUser = await user.save();
        res.send(newUser)
    } catch (err) {
        res.status(400).send(err)
        console.log(err);
    }

});

router.post('/login', (res, req) => {

});

module.exports = router;
