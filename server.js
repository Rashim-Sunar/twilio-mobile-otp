require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/otpdb').then(() => 
    console.log("Database connected successfully.")
);

const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

const userRoute = require("./routes/userRoute");

app.use("/api", userRoute);

app.listen(port, () => {
    console.log("Server listening on port: ", port);
})

