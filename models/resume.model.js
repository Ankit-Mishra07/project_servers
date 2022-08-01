const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
    image:{type:String, default:"pic.jpg"},
    name:{type:String},
    occupation: {type:String},
    email:{type:String},
    mobile:{type:Number},
    location:{type:String},
    github:{type:String},
    linkedin:{type:String},
    about:{type:String},
    techSkills:[
        {skillsName : {type:String}}
    ],
    softSkills:[
        {skillsName : {type:String}}
    ],
    education:[
        {coursename:{type:String}, institute:{type:String}, from:{type:String}, to:{type:String}}
    ],
    experience:[
        {companyName:{type:String}, role:{type:String}, from:{type:String}, to:{type:String}}
    ],

    insterest : [
        {insterest : {type:String}}
    ],
    projects : [
        {projectName:{type:String}, github:{type:String}, deployment:{type:String},video:{type:String}, shortDesc:{type:String}, fea1:{type:String}, fea2:{type:String},fea3:{type:String}, techstacks:{type:String}}
    ],
    otherProjects: [
        {projectName:{type:String}, github:{type:String}, deployment:{type:String},video:{type:String}, shortDesc:{type:String}}
    ],
    languages: [
        {lang : {type:String}}
    ],
    accomplishment: [
        {head :{type:String}, desc:{type:String}},
    ],
    
}, {
    timestamps:true,
    versionKey:false
})

module.exports = mongoose.model("resumeData" , resumeSchema)