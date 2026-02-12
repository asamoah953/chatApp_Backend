const mongoose = require('mongoose');


const chatSchema = new mongoose.Schema({
    members:{
        type: [
            {
                type: mongoose.Schema.Types.ObjectId, ref: 'user'
            }
        ]
    },
    lastmessage:{
                type: mongoose.Schema.Types.ObjectId,ref:'messages'         
    },
    unreadmessageCount:{
            type: Number,
            default: 0
            
    }
},{
    timestamps:true
});


module.exports = mongoose.model('Chats',chatSchema);