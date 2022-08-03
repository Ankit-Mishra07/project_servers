const nodeMailer = require('nodemailer');
require('dotenv').config()
const sendEmail = async (options) => {
    const transporter = nodeMailer.createTransport({
        host:process.env.SMPT_HOST,
        port:process.env.SMPT_PORT,
        service:process.env.SMPT_SERVICE,
        auth:{
            user:process.env.SMPT_MAIL,
            pass:process.env.SMPT_PASSWORD
        }
    })

    const mailOptions = {
        from:"OneDoc OTP",
        to:options.email,
        subject:options.subject,
        text:options.message
    }

    await transporter.sendMail(mailOptions)
}

module.exports = sendEmail;



// SMPT_HOST=smtp.gmail.com
// SMPT_PORT=465
// SMPT_SERVICE=gmail
// SMPT_MAIL=ankitmi116@gmail.com
// SMPT_PASSWORD=ankit@05



