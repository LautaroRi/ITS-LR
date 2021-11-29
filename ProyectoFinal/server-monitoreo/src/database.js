//--Exporto MySQL--//
const mysql = require('mysql')

//--Conexión--//
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'monitoreo_db'
});

//--Evaluar datos, y levantar la DB--//
db.connect(function(err){
    if(err){
        console.log('Error de conexión con la DB!')
        return
        ;
    }else{
        console.log('Conexión exitosa con la DB en el puerto: 3000!')
    }
})

//--Exporto la DB para que se acceda de cualquier archivo del proy.--//
module.exports = db;
