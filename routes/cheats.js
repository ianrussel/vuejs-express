const express = require('express');

const router = express.Router();

var basicAuth = require('basic-auth');

var auth = function (req, res, next) {
  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.send(401);
  };

  var user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  };

  if (user.name === 'ian' && user.pass === 'adem') {
    return next();
  } else {
    return unauthorized(res);
  };
};
/******************************
require our cheat controller
******************************/

const cheat_controller = require('../controllers/cheatController');

/******************************
show all cheats
******************************/

router.get('/showAllCheater', cheat_controller.index);

/******************************
add new cheats
******************************/

router.post('/addvueform', auth,cheat_controller.create_cheat);

/*****************************
get names from cheaters
*****************************/

router.get('/getcheaternames', cheat_controller.getcheaternames);

/****************************
delete cheater
****************************/
router.post('/deleteCheater', auth, cheat_controller.deleteCheater);

/***************************
edit cheater
****************************/
router.post('/editvueform',auth, cheat_controller.editCheater);

// router.get('/', ensureAuthenticated, function(req, res, next) {
//   res.render('user', { user: req.user });
// });
router.post('/login', cheat_controller.login);

module.exports = router;
