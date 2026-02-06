const express = require('express');
const authRouter = require('./router/authRouter')


const app = express();


app.use(express.json());
app.use('/api/user/',authRouter);


module.exports = app;