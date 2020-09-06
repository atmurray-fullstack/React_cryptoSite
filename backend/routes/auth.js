const router = require('express').Router();
const User = require('../models/User');
const { registerValidation, loginValidation } = require('./validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



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

router.post('/login', async (req, res) => {

    const { error } = loginValidation(req.body);
    if (error) {
        console.log(error.details[0].message);
        return res.status(400).send(error.details[0].message);
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send('Email or password is incorrect.')
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.status(400).send('Invalid email or password')
    }

    const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);

});

module.exports = router;
