const express = require('express');
const router = express.Router();

// const passport = require('../lib/passport');
const passport = require('passport');

router.get('/signup', (req, res) => {
    res.render('auth/signup.html');
});

router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup'
}));

// router.get('/signin', (req, res) => {
//     res.render('auth/signin.html');
// });

// router.post('/signin', passport.authenticate('local.signin', {
//     successRedirect: '/profile',
//     failureRedirect: '/signin'
// }));

// router.post('/signin', (req, res, next) => {
//     passport.authenticate('local.signin', {
//         successRedirect: '/profile',
//         failureRedirect: '/signin',
//         failureFlash: true
//     }) (req, res, next);
// });

router.get('/signin', (req, res) => {
    res.render('auth/signin.html');
    // res.render('prueba1.html');
});

router.post('/signin', passport.authenticate('local.signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin'
}));

router.get('/profile', (req, res) => {
    res.render('profile.html');
});

router.get('/prueba1', (req, res) => {
    res.render('prueba1.html');
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('mainPage');
});

module.exports = router;