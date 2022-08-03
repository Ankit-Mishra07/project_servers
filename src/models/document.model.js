const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    document:{
        type:Object,
    },
    title : {
        type:String,
        default:"Untitled"
    },
    userId:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("document", documentSchema)