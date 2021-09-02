const mysql = require('mysql')

//Instancia de conexión
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'apidb'
});

//Hace una lectura de todo lo dentro de la const db para levantar la conexión con el MOTOR DE BASE DE DATOS.
// el "err" va a venir con un True/false, y sin devolverá que cosa estária fallando.
db.connect(function(err){
    if(err){
        console.log('Error de conexión')
// El return es para que finalice, y no siga con el orden del proceso.
        return;
    }else{
        console.log('La conexión fue exitosa!')
    }
})

//exporto el db para que sea accedido de cualquier archivo, como index o cualquiera dentro de router
module.exports = db;
