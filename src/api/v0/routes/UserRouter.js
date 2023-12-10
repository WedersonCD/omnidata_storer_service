const UserController = require('../controllers/UserController');
const router = require('express').Router();

router.post('/',UserController.createUser);
router.get('/',UserController.getAllUsers);
router.get('/:user_id',UserController.getUserById);


module.exports = router;