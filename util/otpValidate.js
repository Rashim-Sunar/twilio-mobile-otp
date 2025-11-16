const otpVerification = async(otpTime) => {
    try {
        const cDateTime = new Date();

        let diffValue = (otpTime - cDateTime.getTime())/1000; //conver to seconds from milli seconds
        diffValue /= 60; //minutes

        const minutes = Math.abs(diffValue);
        if(minutes > 2){ // if time is greater than 2 minutes, otp expiration is true
            return true; 
        }
        return false;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = otpVerification;