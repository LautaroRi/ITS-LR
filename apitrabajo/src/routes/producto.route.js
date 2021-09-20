const express = require('express');
const enrutador = express.Router();
const db = require('../database')

//TRAER TODOS LOS PRODUCTOS.
enrutador.get('/producto', async (req,res) => {

   await db.query('SELECT * FROM producto', (err,rows) =>{
       if(err){
           console.log('Algo sucedio al realizar la consulta')
       }else{
       res.json(rows);
       }
   })
});

//ELIMINAR
//El "/:codigo" es para que le llegue un parametro así sabemos que ID borrar.
enrutador.delete('/producto/:codigo', async (req,res) => {
   const id = req.params.codigo
  await db.query('DELETE FROM producto WHERE id_producto = ?',[id], (err,result)=> {
   if (err){
       return console.log('Algo ocurrio!')
   }else{
       res.json('Operación exitosa!')
   }
  })
});

//POSTEAR
enrutador.post('/producto', async (req,res) => {
   const unProducto = req.body;
   await db.query('INSERT INTO producto set ?', [unProducto], (err,result) => {

       if(err){
           return console.log('Algo ocurrio!')
       }else{
           res.json("El producto se insertó exitosamente!")
       }
   })
});

//UPDATEAR
enrutador.put('/producto/:codigo', async (req,res) => {
   const id = req.params.codigo;
   const productoModificado = req.body;

   await db.query('UPDATE producto SET ? where id_producto = ?',[productoModificado,id], (err,result) => {

       if(err){
           return console.log('Algo falló al intentar updatear!')
       }else{
           res.json("El producto se modificó correctamente!");
       }
   });
});

//LISTAR UN CLIENTE
enrutador.get('/producto/:codigo', async (req,res) => {
   //Capturamos el parámetro
   const id = req.params.codigo;
   await db.query('SELECT * FROM producto where id_producto = ?',[id], (err,rows) => {

       if(err){
           return console.log('Algo ocurrió!')
       }else{
   //Si le pongo el [0], me returna como un OBJETO. y NO como lista, esto me ahorra el recorrer todo con un FOR.
           res.json(rows[0])
       }
   })
});
module.exports = enrutador;