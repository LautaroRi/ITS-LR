const express = require('express') //Trajimos la lib.
const cors = require('cors') // Trajimos la lib.
const morgan = require('morgan') // Traigo la lib.

const server = express() //Alojo la función express que traje de node_modules, declarada arriba

//especificamos el formato de datos que va a manipular nuestro servidor, es decir, nuestra API
server.use(express.json())

//Cors nos permite comunicar al cliente con el servidor y viceversa.
server.use(cors())

// morgan nos permite notificar por consola las peticiones de HTTP(put,delete,post,get(Todas forman CRUD))
server.use(morgan('dev'))

// el process.env.PORT le digo que el predeterminado sea el 3000, si no, que lea y busque algun puerto abierto.
server.set('port', process.env.PORT || 3000) // Estoy seteando la variable 'port', dentro de express, donde lo quiero especficiar. En este caso el puerto 3000

//Poner las rutas en funcionamiento
server.use(require('./routes/cliente.route'))

//Le damos arranque a nuestro servidor
server.listen(server.get('port'))
console.log(`Servidor corriendo en el puerto: ${server.get('port')}`)
