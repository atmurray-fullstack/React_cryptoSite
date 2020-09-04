const router = require('express').Router();
const User = require('../models/User');


const Joi = require('@hapi/joi');

const schema = Joi.object({
    name: Joi.string().min(7).required(),
    email: Joi.string().min(7).email().required(),
    password: Joi.string().min(7).required(),

})


router.post('/register', async (req, res) => {
    const validation = schema.validate(req.body)
    validation.error ? console.log('error') : console.log('no error')
    res.send(validation)

});
// const { name, email, password } = req.body
// const user = new User({
//     userName: name,
//     email: email,
//     password: password
// });

// try {
//     const newUser = await user.save();
//     res.send(newUser)
// } catch (err) {
//     res.status(400).send(err)
//     console.log(err);
// }
router.post('/login', (res, req) => {

});

module.exports = router;
