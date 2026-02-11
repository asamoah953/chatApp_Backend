const userModel = require('./../model/user');


//getting the details of the user who logged in
const user_logged_in = (async (req, res) => {

    try {

        //using the userModel to find the particular user who logged in
        const user = await userModel.findOne({ _id: req.body });

        //send respont to the user logged in
        res.send({

            "message": "user successfully logged in",
            "success": true,
            "data": user

        })

    } catch (error) {

        //sending failed feedback
        res.status(400).send({
            message: error.message,
            success: false
        })

    }

});


//Fetching all user
const fetch_all_users = (async(req,res)=>{

    const userId  = req.body;

    try {

        //get all the users using the model
        const users = await userModel.find({_id: {$ne: `${userId}`}});

        //respond to the user 
        res.send({
            "total": users.length,
            "message":"friends retrived successfully",
            "success": true,
            "data": users
        })
        
    } catch (error) {

        //respond an error
        res.status(400).send({
            "message": error.message,
            "success": false
        })
        
    }
})




module.exports = { user_logged_in, fetch_all_users }