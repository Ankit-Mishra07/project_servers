const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const user = require('./src/routes/userRoute')
const document = require('./src/routes/documentRoute')
app.use("/user", user)
app.use("/document", document) 

module.exports =app;