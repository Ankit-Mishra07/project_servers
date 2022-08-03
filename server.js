const app = require("./index");
const dotenv = require('dotenv')


// dotenv.config({path:"server/configs/config.env"})

const connect = require('./src/configs/database');
const port = process.env.PORT || 5000;

app.listen(port, async() => {
    await connect();
    console.log(`server is listening on ${port}`)
})


