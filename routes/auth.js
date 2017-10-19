var express = require('express');
var router = express.Router();
// var passportFacebook = require('../auth/facebook');
// var passportTwitter = require('../auth/twitter');
// var passportGoogle = require('../auth/google');
var passportGitHub = require('../auth/github');

/***************
LOGIN ROUTER
***************/
router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Please Sign In with:' });
});
/***************
LOGOUT ROUTER
***************/
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

/***************
GITHUB ROUTER
***************/
router.get('/github',passportGitHub.authenticate('github', {
    scope: [ 'user:email' ]
}));

router.get('/github/callback',
    passportGitHub.authenticate('github', {
        failureRedirect: '/login'
    }),
    function(req, res) {
        // Successful authentication, redirect home.
        console.log("logged!")
        //res.redirect('/');
    });

module.exports = router;
