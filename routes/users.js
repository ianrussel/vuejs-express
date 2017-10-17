var express = require('express');
var router = express.Router();

const user_controller = require('../controllers/userController');

router.get('/', user_controller.index);

router.get('/signup', user_controller.signup);

module.exports = router;
