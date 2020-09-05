const jwt = require('jsonwebtoken');

function(req, res, next) {
    const token = req.header('auth-token');
    console.log(token);

    if (!token) {
        return res.status(401).send('Access Denied');

        try {
            const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        } catch (err) {

        }
    }
}