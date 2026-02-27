const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
app.use(express.json());

//    LOGIN ROUTE - Generate JWT

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Email and Password are required"
        });
    }

    const user = {
        email: email
    };

    const token = jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: "1h"
    });

    res.status(200).json({
        message: "Login Successful",
        token: token
    });
});

//  TOKEN VERIFY MIDDLEWARE

const verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
        return res.status(401).json({
            message: "No Token Provided"
        });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: "Invalid Token"
            });
        }

        req.user = decoded;
        next();
    });
};

//  PROTECTED ROUTE

app.get("/protected", verifyToken, (req, res) => {
    res.status(200).json({
        message: "Token Verified",
        user: req.user
    });
});

// SERVER START


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});