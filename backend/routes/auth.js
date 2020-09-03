const router = require('express').Router();
const User = require('../models/User');




router.post('/register', async (req, res) => {
    console.log(req.body)
    const { name, email, password } = req.body
    const user = new User({
        userName: name,
        email: email,
        password: password
    });

    try {
        const newUser = await user.save();
        res.send(newUsers)
    } catch (err) {
        res.status(400).send(err)
        console.log(err);
    }
});

router.post('/login', (res, req) => {

});

module.exports = router;
