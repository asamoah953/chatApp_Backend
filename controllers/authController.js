const userModel = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const SignUp = (async (req, res) => {
    try {
        //get specific user detail from the the user request
        const { email, password } = req.body;


        //check if it is already in the database
        const user = await userModel.findOne({ email });


        //through an error if is it there
        if (user) {
            return res.send({
                message: 'user already exist',
                success: false
            })
        }


        //hash the user password if user is not already created
        const hashedPassword = await bcrypt.hash(password, 10);
        req.body.password = hashedPassword;


        //save user detail into the database
        const newUser = new userModel(req.body);
        await newUser.save();

        //send a response to the user
        res.send({
            message: 'account created successfully',
            success: true
        })

    } catch (error) {
        res.send({
            message: error.message,
            success: false
        })
    }
});



const LogIn = (async (req, res) => {
    try {
        //get the password and email from the user
        const { email, password } = req.body;

        //check if the user already exist
        const user = await userModel.findOne({ email });


        //if not, throw an error
        if (!user) {
            return res.send({
                message: 'user does not exist',
                success: false
            })
        }


        //compare the password if it is the same with the one in the database;
        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.send({
                message: "password do not match",
                success: false
            })
        }



        //authenticate the user with a token
        jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1d' });


        //send a response to the user
        res.send({
            message: "user logged in successfully",
            success: true
        })


    } catch (error) {
        res.send({
            message: error.message,
            success: false
        })
    }
})



module.exports = { SignUp, LogIn }