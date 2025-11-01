const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const users = require('./models/user.js');

dotenv.config();
const app=express();

app.use(express.json());
app.use(cors());



app.get("/api/jobs",async (req,res) => {
    const query = req.query.q; // job is searched here in frontend

    try {
        const response = await fetch(`https://jsearch.p.rapidapi.com/search?query=${query}&num_pages=1`,
            {
                method: "GET",
                headers: {
                    "x-rapidapi-key": "c9b103f0c2msh4c2c7636bbc513ep16c3f8jsn38a2bdcc2ca",
                    "x-rapidapi-host": "jsearch.p.rapidapi.com",
                },
            }
        );

        const data = await response.json();
        res.json(data);

    }
    catch(error){
        console.error("Error fethcing Jobs",error);
        res.status(500).json({message:"Error fetching jobs"});
    }
});



// connectig mongoDB heereee

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB connecteddd"))
.catch((err) => console.log(err));


//signup process route 

app.post("/api/auth/signup",async(req,res) => {
    try{
        const { name,emailOrMobile,password} = req.body;

        const existingUser = await users.findOne({emailOrMobile});
        if(existingUser){
            return res.status(400).json({message:"User already exists!!"});
        }

        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new users({name,emailOrMobile,password:hashedPassword});
        await newUser.save();

        res.json({message:"Account created successfully!!!"});

    }
    catch(error){
        res.status(500).json({message:"Server error"});
    }

});


// login process route
app.post('/api/auth/login', async (req, res) => {
    try {
        const { emailOrMobile, password } = req.body;
        console.log('Login attempt for:', emailOrMobile);

        // ✅ This is the corrected query with .select()
        const foundUser = await users.findOne({ emailOrMobile }).select('+password');
        
        console.log('User found:', !!foundUser);
        if (!foundUser) {
            return res.status(400).json({ message: "User not found!!!" });
        }

        console.log('Comparing passwords...');
        const isMatch = await bcrypt.compare(password, foundUser.password);
        
        console.log('Password match:', isMatch);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        console.log('Generating token...');
        // 🛑 Make sure 'jwt' is required at the top of your file!
        const token = jwt.sign(
            { id: foundUser._id },
            process.env.JWT_SECRET || 'defaultsecret',
            { expiresIn: "1h" }
        );

        console.log('Login successful');
        // ✅ This sends the success response back
        res.json({ message: "Login successful", token, name: foundUser.name });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: "Server error!!" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log(`Server is running on ${PORT}`));


