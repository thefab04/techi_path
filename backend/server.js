const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const users = require('./models/user.js');
const Feedback = require("./routes/feedbackroutes.js");
const progressRoutes = require("./routes/progress.js");

dotenv.config();
const app = express();

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

app.use(limiter);
app.use(express.json());

// CORS configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Allow specific origin
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Routes

app.use("/api/progress", progressRoutes);

// new feedback route
app.use("/api/feedback", Feedback);




// connectig mongoDB heereee

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB connecteddd"))
.catch((err) => console.log(err));


// Signup process route with validation
app.post("/api/auth/signup", [
    body('name').isLength({ min: 2 }).withMessage('Name must be at least 2 characters long'),
    body('emailOrMobile').isLength({ min: 3 }).withMessage('Email or mobile must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { name, emailOrMobile, password } = req.body;

        const existingUser = await users.findOne({ emailOrMobile });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists!!" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new users({ name, emailOrMobile, password: hashedPassword });
        await newUser.save();

        res.json({ message: "Account created successfully!!!" });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});


// Login process route with validation
app.post('/api/auth/login', [
    body('emailOrMobile').isLength({ min: 3 }).withMessage('Email or mobile must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { emailOrMobile, password } = req.body;

        const foundUser = await users.findOne({ emailOrMobile }).select('+password');

        if (!foundUser) {
            return res.status(400).json({ message: "User not found!!!" });
        }

        const isMatch = await bcrypt.compare(password, foundUser.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: foundUser._id },
            process.env.JWT_SECRET || 'defaultsecret',
            { expiresIn: "1h" }
        );

        res.json({
            message: "Login successful",
            token,
            user: {
                _id: foundUser._id,
                name: foundUser.name,
                emailOrMobile: foundUser.emailOrMobile,
            },
        });

    } catch (error) {
        res.status(500).json({ message: "Server error!!" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log(`Server is running on ${PORT}`));


