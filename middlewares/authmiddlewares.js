const jwt = require('jsonwebtoken');

// function to authenticate the token received from the user
module.exports = (req, res, next) => {

    try {

        //receiving token from the user header
        const token = req.header.authorization.split(' ')[1];

        //verify the token with the secret key
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

        //attach the body of the request with the user id
        req.body.userId = decodedToken.userId;

        //call the next method to forward the user request
        next();

    } catch (err) {
        req.send({
            message:err.message,
            success:fail
        })
    }

}