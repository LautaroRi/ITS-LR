    //Traigo express y lo almaceno en una constante
const express = require('express');
    //Traigo la funcion router de express y la almaceno en una constante
const enrutador = express.Router();
    //Traigo el database para traer la DB qué este almacena.
const db = require('../database')

enrutador.get('/clientes', (req,res) => {

    //Vamos a realizar una consulta a la base, es decir, una query.
    // el err es el tomado de database, en primer lugar busca si hay error, si no lo pongo, busca una respuesta ilogicamente por qué fallo
    db.query('select * from cliente', (err,rows ) =>{
        if(err){
            console.log('Algo sucedio al realizar la consulta')
        }else{
        /* 
            Entregamos como respuesta, los datos de la tabla cliente
            En formato JSON
        */
        res.json(rows);
        }
    })
})

module.exports = enrutador;