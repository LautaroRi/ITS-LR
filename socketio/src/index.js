const express = require('express')
const cors = require('cors')
const osu = require('node-os-utils')
const socketio = require('socket.io')

//Accdeder a los recursos de OS
const cpu = osu.cpu
//Defino server, así uso todo lo que trae express, y ya lo uso debajo//
const server = express()

server.set('port', process.env.PORT || 3000)

server.use(cors())

//Estamos creando el servidor para usarlo en socket.IO
const servidor = server.listen(server.get('port'), () => {
    console.log('La conexión fue exitosa!')
});

//Servidor ya habilitado para utilizar websocket
const io = socketio(servidor)

//Establecemos la apertura del canal, para emitir posteriormente los datos
io.on('connection', (socket) => {

    //Con el setInterval, estoy haciendo que me envie datos constantes cada 1000 milisegudos(1 segundo)
    //Lo refresca
    //El dato emite 2 datos: El random y el NOMBRE.
    setInterval(() => {
        socket.emit('dato-socket',{dato:Math.random(),nombre:'Lautaro'});
        cpu.free()
        .then(info => {
            socket.emit('datos-cpu',
                {
                descripcion: 'CPU FREE',
                data: info
                })
        });
        cpu.usage()
            .then(info => {
                socket.emit('cpu-usage',
                {
                    descripcion: 'CPU USAGE',
                    data: info
                })
            });

    },1000)
    //Estoy configurando para que reciba una respuesta
    socket.on('respuesta',(valor) => {
        console.log(valor)
    })
});
