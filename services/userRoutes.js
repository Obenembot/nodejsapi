// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userService = require("../services/userService");

// Get all users
router.get("/", (req, res) => {
    res.json(userService.getAllUsers());
});

// Get a single user by ID
router.get("/:id", (req, res) => {
    const user = userService.getUserById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
});

// Create a new user
router.post("/", (req, res) => {
    const newUser = userService.createUser(req.body);
    res.status(201).json(newUser);
});

// Update user
router.put("/:id", (req, res) => {
    const updatedUser = userService.updateUser(req.params.id, req.body);
    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.json(updatedUser);
});

// Delete user
router.delete("/:id", (req, res) => {
    const isDeleted = userService.deleteUser(req.params.id);
    if (!isDeleted) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
});

module.exports = router;
