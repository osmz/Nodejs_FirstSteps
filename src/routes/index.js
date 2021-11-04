const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html');
    // res.render('list.html');
});

router.get('/ingreso', (req, res) => {
    res.render('ingreso.html');
});

router.get('/add', (req, res) => {
    res.render('add.html');
});

module.exports = router;