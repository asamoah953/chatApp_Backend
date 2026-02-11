const express = require('express');
const middleware = require('./../middlewares/authmiddlewares');
const userController = require('./../controllers/userController')




const router = express.Router();



router.get('/get-user-logged-in', middleware, userController.user_logged_in);



module.exports = router;