const Joi = require('@hapi/joi');


//Register route
const registerValidation = data => {

    const schema = Joi.object({
        name: Joi.string().min(7).required(),
        email: Joi.string().min(7).email().required(),
        password: Joi.string().min(7).required(),

    });

    return schema.validate(data)


};

const loginValidation = data => {

    const schema = Joi.object({
        email: Joi.string().min(7).email().required(),
        password: Joi.string().min(7).required(),

    });

    return schema.validate(data)


};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
