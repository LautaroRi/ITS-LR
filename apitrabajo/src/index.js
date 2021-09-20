//Almaceno los programas en constantes para usarlas luego.
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

//Empiezo a definir, que mi constante "serverEX", la base de los comandos, utiliza epxress, y requiere las demás.
const serverEX = express()
serverEX.use(express.json());
serverEX.use(cors());
serverEX.use(morgan('dev'));
serverEX.set('port', process.env.PORT || 3001);
serverEX.listen(serverEX.get('port'))
console.log(`Servidor corriendo en el puerto: ${serverEX.get('port')}`)
serverEX.use(require('./routes/producto.route'))