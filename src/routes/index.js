const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html');
});

router.get('/ingreso', (req, res) => {
    res.render('ingreso.html');
});

router.get('/contact', (req, res) => {
    res.render('contact.html');
});

module.exports = router;