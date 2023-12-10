const User = require('../models/User');

// Function to create a new user
const createUser = async (req, res) => {
    try {
        // Extract user data from request body
        const { user_name, user_externalId } = req.body;

        // Check for required fields
        if (!user_name || !user_externalId) {
            return res.status(400).json({ message: "Name and AD User ID are required." });
        }

        // Create a new user instance
        const newUser = new User({ user_name, user_externalId });

        
        // Save the user to the database
        await newUser.save();

        // Send success response
        res.status(201).json(newUser);
    } catch (error) {
        // Send error response
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createUser };
