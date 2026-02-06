const mongoose = require('mongoose');



mongoose.connect(process.env.CONECTION_STRING);

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('DB connected');
})

db.on('err',()=>{
    console.log('unable to connecte to database');
});


module.exports = db;