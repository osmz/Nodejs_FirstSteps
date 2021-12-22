const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html');
});

router.get('/mainPage', (req, res) => {
    res.render('mainPage.html');
});

router.get('/ingreso', (req, res) => {
    res.render('ingreso.html');
});

module.exports = router;