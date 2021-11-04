const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/add', (req, res) => {
    // res.send('From');
    res.render('add.html');
});

// --------------- Ejemplo de como adicionar datos en workbench ------------------------------
// USE rey_copas;
// INSERT INTO product(nome, tipo, descripcion) VALUES('oscar', 'oscar', 'oscar')

// router.post('/add', async (req,res) => {
//     const { nome, tipo, descripcion} = req.body;
//     const newLink = {
//         nome,
//         tipo,
//         descripcion
//     };
//     pool.query('INSERT INTO product set ?', [newLink]);
//     // pool.query('INSERT INTO product VALUE ?', [nome, tipo, descripcion]);
//     // pool.query('INSERT INTO product(nome, tipo, descripcion) VALUES(oscar, oscar, oscar)');
//     console.log(newLink);
//     res.send('received');
// });

router.post('/add', (req,res) =>{ // <- La función middleware ya no es async
    const { nome, tipo, descripcion } = req.body;
    const newLink={
        nome,
        tipo,
        descripcion
        //ALMACENA ESOS DATOS EN LA VARIABLE NEWLINK
    };
    pool.query('INSERT INTO product set ?',[newLink], (error, results, fields) => { // <- usamos una función callback
        if(error) { // <- Si ocurre un error en la consulta
            console.log(error); // <- mostramos error por consola
            return res.status(500).send('error'); // <- enviamos mensaje al cliente
        }
        // ...
        // hacemos algo con los resultados (si lo necesitamos)
        // ...
        return res.status(200).send('recibido'); // <- enviamos mensaje al cliente
    });
});

module.exports = router;