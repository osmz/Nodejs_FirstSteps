const express = require('express');
const router = express.Router();

const passport = require('passport');

router.get('/', (req, res) => {
    res.render('index.html');
});

router.get('/mainPage', (req, res) => {
    res.render('mainPage.html');
});

router.get('/beer', (req, res) => {
    res.render('beer.html');
});

router.get('/newUser', (req, res) => {
    res.render('newUser.html');
});

router.post('/newUser', passport.authenticate('local.signup', {
    successRedirect: '/mainPage',
    failureRedirect: '/newUser'
}));

router.get('/ingreso', (req, res) => {
    res.render('ingreso.html');
});

router.post('/ingreso', passport.authenticate('local.signin', {
    successRedirect: '/mainPage',
    failureRedirect: '/ingreso'
}));

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('ingreso');
});

module.exports = router;

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