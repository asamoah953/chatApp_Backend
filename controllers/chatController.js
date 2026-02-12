const chatModel = require('../model/chat');




const userChats = (async (req, res) => {
    try {

        const chats = new chatModel(req.body);

        const savedChat = await chats.save();

        res.status(201).send({
            "message": "chat created successfully",
            "success": true,
            "data": savedChat
        });

        console.log(chats)

    } catch (error) {
        res.status(400).send({
            "message": error.message,
            "success": false
        })

    }
})


const get_all_chats = (async (req, res) => {

    try {

        //retrieve the user id from the request body
        const userId = req.body.userId
        console.log(userId)

        //use the chatModel to get the chat related to the user signed in
        const allChats = await chatModel.find({_id: {$in: `{$userId}`}});


        //response
        res.status(200).send({
            "message": "all chats retrieved successfully",
            "success":true,
            "data": allChats
        })

    } catch (error) {

        res.status(400).send({
            "message": error.message,
            success: false
        })

    }
})


module.exports = { userChats, get_all_chats }