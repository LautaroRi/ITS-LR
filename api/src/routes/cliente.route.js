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
});

//El "/:codigo" es para que le llegue un parametro así sabemos que ID borrar.

enrutador.delete('/cliente/:codigo', async (req,res) => {

//capturo el codigo, que es un parametro, y lo dejo en una constante que utilizaré luego.
    const id = req.params.codigo

//El await y el async, es por qué TODOS los codigos necesitan un tiempo de espera a partir de ahora.
   await db.query('DELETE FROM cliente WHERE id_cliente = ?',[id], (err,result)=> {
    if (err){
        return console.log('Algo ocurrio!')
    }else{
        res.json('Operación exitosa!')
    }
   })

});

enrutador.post('/cliente', async (req,res) => {
//Estoy boteniendo el BODY de HTTP que ejecuto al solicitar un POST
    const unCliente = req.body;

    await db.query('INSERT INTO cliente set ?', [unCliente], (err,result) => {

        if(err){
            return console.log('Algo ocurrio!')
        }else{
            res.json("El cliente se insertó exitosamente!")
        }
    })

})
// El navegador solo efectua "GET", solo admite ese tipo de solucitudes. El resto, se efectua en otros lugares.
module.exports = enrutador;