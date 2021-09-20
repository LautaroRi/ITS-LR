//Traigo MySQL
const mysql = require('mysql');

//Defino la base de mi DB
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api-tp1'
});
db.connect(function(err){
    if(err){
        console.log('Error de conexión al MySQL de: apitrabajo!')
        return;
    }else{
        console.log('La conexión fue exitosa con: apitrabajo!')
    }
})

//Exporto la constante DB por si la requieren otros files de mi API.
module.exports = db;
