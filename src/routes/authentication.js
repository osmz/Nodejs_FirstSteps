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
    res.render('prueba1.html');
});

router.post('/signin', passport.authenticate('local.signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin'
}));

router.get('/profile', (req, res) => {
    res.render('profile.html');
    // const user = req.user;
    // console.log(req.user);
    // res.render('profile.html', { user:user });
});

module.exports = router;