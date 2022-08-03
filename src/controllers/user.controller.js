

const User = require('../models/user.model');
// const sendEmail = require('../utils/sendMail');

function generateRandomNumber() {
    var minm = 100000;
    var maxm = 999999;
    return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
}

exports.registerUser = async (req, res) => {
    try{

        let acceptDomain = ["gmail.com"]
        let checkmail = req.body.email.split("")
        const CheckPresence = await User.findOne({email:req.body.email})

        if(req.body.name.length <= 1){
            return res.status(400).json({success:false, message:"Please enter valid name"});
        }
        if(!checkmail.includes("@")){
            return res.status(400).json({success:false, message:"Please enter valid email"});
        }
        checkmail = req.body.email.split("@")
        if(!acceptDomain.includes(checkmail[1])) {
            return res.status(400).json({success:false, message:"We only accept email from gmail.com domain"})
        }
        if(CheckPresence) {
            return res.status(200).json({success:false, message:"Email already exist, please try with different email"})
        }
        if(req.body.password.length < 6) {
            return res.status(400).json({success:false, message:"Password should have atleast 6 characters"});
        }


        const otp=generateRandomNumber();
        // let options={
        //     email:req.body.email,
        //     subject:"OneDoc OTP (One Time Password)",
        //     message:`Please Enter your otp for signup in OneDoc \n\n
        //     OTP : ${otp} `
        // }
        // try {

        
        // await sendEmail({
        //   ...options
        // })
        // }catch(e){
        //    return res.status(200).json({
        //         success:false,
        //         message:e.message,
        //     })
        // }
        const user = await User.create(req.body);

        return res.status(200).json({
            success:true,
            user,
            otp,
        })

    }catch(e) {
        return res.status(500).json({success:false,message:"Something went wrong, please try after sometime"})
    }
}

exports.loginUser = async (req, res) => {
    try{
        let acceptDomain = ["gmail.com"]
        let checkmail = req.body.email.split("")
        if(!checkmail.includes("@")){
            return res.status(400).json({success:false, message:"Please enter valid email"});
        }
        checkmail = req.body.email.split("@")
        if(!acceptDomain.includes(checkmail[1])) {
            return res.status(400).json({success:false, message:"We only accept email from gmail.com domain"})
        }

        const CheckPresence = await User.findOne({email:req.body.email})
        const isPasswordMatched = await CheckPresence.comparePassword(req.body.password);
        if(CheckPresence && isPasswordMatched) {
            return res.status(200).json({success:true, user:CheckPresence})
        }else {
            return res.status(200).json({success:false, message:"Please enter valid email & password!"})
        }


    }catch(e) {
        return res.status(500).json({success:false,message:"Something went wrong, please try after sometime"})
    }
}
