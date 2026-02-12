const express = require('express');
const chatController = require('../controllers/chatController');
const authMiddleware = require('../middlewares/authmiddlewares');


const router = express.Router();

router.post('/create-chat',authMiddleware,chatController.userChats);
router.get('/get-all-chat',authMiddleware,chatController.get_all_chats);




module.exports = router;