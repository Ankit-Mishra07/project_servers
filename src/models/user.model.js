const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }

}, {
    versionKey:false,
    timestamps:true
})

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10);
})

// Compare Password
userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

module.exports = mongoose.model("user", userSchema)