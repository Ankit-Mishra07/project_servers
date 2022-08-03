const mongoose = require('mongoose');
require('dotenv').config()
module.exports = () => {
    return mongoose.connect("mongodb+srv://AnkitMishra07:ankit07@cluster0.jxwud.mongodb.net/oneDoc")
}




 