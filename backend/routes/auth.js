const router = require('express').Router();
const User = require('../models/User');
const { registerValidation, loginValidation } = require('./validation')




router.post('/register', async (req, res) => {
    const { error } = registerValidation(req.body);
    if (error) {
        console.log(error.details[0].message);
        return res.status(400).send(error.details[0].message);
    } else {
        const { name, email, password } = req.body
        const user = new User({
            userName: name,
            email: email,
            password: password
        });

        try {
            const newUser = await user.save();
            res.send(newUser)
        } catch (err) {
            res.status(400).send(err)
            console.log(err);
        }
    }
});

router.post('/login', (res, req) => {

});

module.exports = router;
