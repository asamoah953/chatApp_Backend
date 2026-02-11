const jwt = require('jsonwebtoken');



// function to authenticate the token received from the user
module.exports = (req, res, next) => {

    try {

        //receiving token from the user header
        const token = req.headers.authorization.split(" ")[1];

        //verify the token with the secret key
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        //  console.log(decodedToken.userId);

        //attach the body of the request with the user id
        let userId = decodedToken.userId;

        req.body = userId;

        //call the next method to forward the user request
        next();

    } catch (error) {
        res.send({
            "message":error.message,
            "success": false
        })
    }

}