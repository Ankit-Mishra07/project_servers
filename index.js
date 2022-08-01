const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const app = express();

app.use(cors());
app.use(express.json());

const resumeController = require("./controllers/resume.controller");

app.use("/resume", resumeController)


const port  = process.env.PORT || 8080;
app.listen(port, async () => {
    await mongoose.connect(`mongodb+srv://AnkitMishra07:ankit07@cluster0.jxwud.mongodb.net/resumebuilder`)
    console.log(`server is running on port ${port}`)
})












