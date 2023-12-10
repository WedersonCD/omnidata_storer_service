const UserModel = require('../models/User');

const userController = {}

// Function to create a new user
userController.createUser = async (req, res) => {
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

// Get a specific user by user_id
userController.getUserById = async (req, res) => {
    try {
        const userId = req.params.user_id;
        const user = await UserModel.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
const User = require('../models/User'); // Replace with your actual User model path

// Get a list of all users
userController.getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = userController;
