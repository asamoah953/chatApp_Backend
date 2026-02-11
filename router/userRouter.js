const express = require('express');
const middleware = require('./../middlewares/authmiddlewares');
const userController = require('./../controllers/userController')




const router = express.Router();



router.get('/get-user-logged-in', middleware, userController.user_logged_in);
router.get('/get-all_users', middleware, userController.fetch_all_users);



module.exports = router;