const mongoose = require('mongoose');

//the userSchema to give the structure of the db information
const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required: true
    },
    secondname:{
        type:String,
        required
    },
    email:{
        type:String,
        required
    },
    password:{
        type:String,
        required
    },
    profilePic:{
        type:String,
        required:false
    }
}, {timestamps:true});


module.exports = mongoose.model('users',userSchema);

