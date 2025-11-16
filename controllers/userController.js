const OtpModel = require("../models/otp");
const otpGenerator = require('otp-generator');
const twilio = require('twilio');
const otpVerification = require("../util/otpValidate");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);

const sendOtp = async(req, res) => {
    try {

        const { phoneNumber } = req.body;
        const otp = otpGenerator.generate(6, {upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });

        const cDate = new Date();

        await OtpModel.findOneAndUpdate(
            {phoneNumber},
            {otp, otpExpiration: new Date(cDate.getTime())},
            {upsert: true, new: true, setDefaultsOnInsert: true}
        );

        const message = await client.messages.create({
           body: `${otp} is your verification code for Mobile OTP Login.`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: phoneNumber,
        });

        console.log("Twilio message:",message.body);

        return res.status(200).json({
            success: true,
            msg: `OTP sent successfully! ${otp}`
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message
        });
    }
}

const verifyOtp = async(req, res) => {
   const { phoneNumber, otp} = req.body;

   const otpData = await OtpModel.findOne({
     phoneNumber,
     otp
   });

   if(!otpData){
     return res.status(400).json({
        success: false,
        msg: "You entered wrong otp"
     });
   }

   const isOtpExpired = await otpVerification(otpData.otpExpiration);
   if(isOtpExpired){
      return res.status(400).json({
        success: false,
        msg: "Your otp has been expired. Try generating again!"
      });
   }

   return res.status(200).json({
    success: true,
    msg: "OTP verified!"
   });
}

module.exports = {
    sendOtp,
    verifyOtp
};