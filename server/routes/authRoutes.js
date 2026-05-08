const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");


// middleware to protect routes
router.get("/protected", authMiddleware, (req, res) => {

  res.json({
    message: `Hello ${req.user.email}, you accessed a protected route!`
  });

});


router.get("/dashboard", authMiddleware, (req, res) => {

  res.json({
    message: "Welcome to your dashboard",
    user: {
      userId: req.user.userId,
      email: req.user.email
    }
  });

});
// ================= REGISTER =================
router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword
    });

    await newUser.save();

    res.json({ message: "User registered successfully" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
  console.log("AUTH ROUTER FILE LOADED");
});


// ================= LOGIN =================
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,   //
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      token
    });

  }catch (err) {
  console.log("LOGIN ERROR:", err);   // 👈 IMPORTANT
  res.status(500).json({ message: "Server error" });
}
});

module.exports = router;