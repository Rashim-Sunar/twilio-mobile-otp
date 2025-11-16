const express = require('express');

const router = express();

router.use(express.json());

const {sendOtp, verifyOtp} = require("../controllers/userController");

router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtp);


module.exports = router;