const express = require('express');

const router = express.Router();


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

router.post('/addvueform', cheat_controller.create_cheat);

/*****************************
get names from cheaters
*****************************/

router.get('/getcheaternames', cheat_controller.getcheaternames);

/****************************
delete cheater
****************************/
router.post('/deleteCheater', cheat_controller.deleteCheater);

/***************************
edit cheater
****************************/
router.post('/editvueform', ensureAuthenticated, cheat_controller.editCheater);

// router.get('/', ensureAuthenticated, function(req, res, next) {
//   res.render('user', { user: req.user });
// });
router.post('/login', cheat_controller.login);
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        console.log("login")
        return next();
    }
    console.log("not login baby")
    res.json('yawa');
}
module.exports = router;
