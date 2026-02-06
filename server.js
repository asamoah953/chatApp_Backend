const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const db = require('./dbconfigFile/db')

const app = require('./app');





const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server running on port: ${PORT}`);
})