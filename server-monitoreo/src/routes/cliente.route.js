//--Traigo express, función de express y la DB--//
const express = require('express');
const enrutador = express.Router();
const db = require('../database');

//--LIST clientes--[FUNCIONA]//
enrutador.get('/clientes', (req,res) => {
    db.query('select * from cliente', (err,rows ) =>{
        if(err){
            console.log('Algo sucedio al realizar la consulta')
        }else{
        res.json(rows);
        }
    })
});
//--DELETE cliente--[FUNCIONA]//
enrutador.delete('/cliente/:codigo', async (req,res) => {
        const id = req.params.codigo
       await db.query('DELETE FROM cliente WHERE id_cliente = ?',[id], (err,result)=> {
        if (err){
            return console.log('Algo ocurrio!')
        }else{
            res.json('Operación exitosa!')
        }
       })
});
//--POST cliente--[FUNCIONA]//
enrutador.post('/cliente', async (req,res) => {
        const unCliente = req.body;
        await db.query('INSERT INTO cliente set ?', [unCliente], (err,result) => {
            if(err){
                return console.log('Algo ocurrio!')
            }else{
                res.json("El cliente se insertó exitosamente!")
            }
        })
});
//--UPDATE cliente--[FUNCIONA]//
enrutador.put('/cliente/:codigo', async (req,res) => {
    const id = req.params.codigo;
    const clienteModificado = req.body;
    await db.query('UPDATE cliente SET ? where id_cliente = ?',[clienteModificado,id], (err,result) => {
        if(err){
            return console.log('Algo falló al intentar updatear!')
        }else{
            res.json("El cliente se modificó correctamente!");
        }
    });
});
//--LIST 1 cliente por ID--[FUNCIONA]//
enrutador.get('/cliente/:codigo', async (req,res) => {
    const id = req.params.codigo;
    await db.query('SELECT * FROM cliente where id_cliente = ?',[id], (err,rows) => {
        if(err){
            return console.log('Algo ocurrió!')
        }else{
            res.json(rows[0])
        }
    })
});
module.exports = enrutador;