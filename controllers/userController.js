const userModel = require('./../model/user');


//getting the details of the user who logged in
const user_logged_in = (async (req, res) => {

    try {

        //using the userModel to find the particular user who logged in
        const user = await userModel.findOne({ _id: req.body });
        console.log(user)

        //send respont to the user logged in
        res.send({

            "message": "user successfully logged in",
            "success": true,
            "data": user

        })

    } catch (error) {

        //sending failed feedback
        res.send({
            message: error.message,
            success: false
        })

    }

})




module.exports = { user_logged_in }