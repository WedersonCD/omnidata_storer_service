const UserController = require('../controllers/UserController');
const router = require('express').Router();

router.post('/',UserController.createUser);


module.exports = router;