const express = require('express');
const authRouter = require('./router/authRouter');
const userRouter = require('./router/userRouter');



const app = express();


app.use(express.json());
app.use('/api/user/',authRouter);
app.use('/api/user/',userRouter);


module.exports = app;