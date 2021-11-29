const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// -- SOCKET.IO --//
const osu = require('node-os-utils');
const os = require('node-os-utils').os
const socketio = require('socket.io');
const cpu = osu.cpu;
const mem = osu.mem;
const netstat = osu.netstat;
const nodeDiskInfo = require('node-disk-info');
// ------------- //
const server = express();

//--extensión a trabajar//
server.use(express.json());

//--cors para comunicar el SV y cliente--//
server.use(cors());

//--morgan para imprimir por consola todo lo HTTP--//
server.use(morgan('dev'));

//--Seteo el puerto de escucha--//
server.set('port', process.env.PORT || 3000);

//--USO la ruta--//
server.use(require('./routes/cliente.route'));
//-------------------------------//
//-- CREO CONEXIÓN PARA SOCKET-IO --//
const servidor = server.listen(server.get('port'), () => {
    console.log('La conexión con socket.io fue exitosa!')
});
//-- HABILITO WEB-SOCKET --//
const io = socketio(servidor)
//-- ESTABLEZCO LA APERTURA DEL CANAL, Y LUEGO LA EMISIÓN DE DATOS --//
io.on('connection', (socket) => {

    //Interval de 1 segundo -- contiene CPU //
    setInterval(() => {   
        // -- CPU FREE --//
        cpu.free()
            .then(info => {
                socket.emit('cpu-free',
                {
                descripcion: 'CPU en espera',
                data: info.toFixed(2) + " " + "%",
                data2: info
                })
        });
        //-- CPU USAGE --//
        cpu.usage()
            .then(info => {
                socket.emit('cpu-use',
                {
                    descripcion: 'CPU en uso',
                    data: info.toFixed(2) + " " + "%",
                    data2: info
                })
        });
    },1000);

    socket.on('respuesta',(valor) => {
        console.log(valor)
    });

    // Interval de 1 minuto -- contiene MEMORIA y DISK //
    setInterval(() => {   
        // -- MEMORY -- //
        mem.info()
            .then(info => {
                socket.emit('mem-info',
                {
                    descTotal: 'Memoria total',
                    dataTotal: info.totalMemMb + " " + "Mb",
                    descLibre:'Memoria libre',
                    dataLibre: info.freeMemMb + " " + "Mb" ,
                    dataLibre2:info.freeMemMb,
                    descUtil: 'Memoria utilizada',
                    dataUtil: info.usedMemMb + " " + "Mb",  
                    dataUtil2: info.usedMemMb,
                    descPorc: 'Memoria Libre %',
                    dataPorc: info.freeMemPercentage + '%' 
                })
            });
        // -- DISKINFO --//
        nodeDiskInfo.getDiskInfo()
            .then(info => {
                socket.emit('disk-info',
                {
                    descripciontotal: 'Espacio total',
                    datatotal: (info[0].blocks/1073741824).toFixed(2) + ' ' + 'GB',
                    descripcionfree: 'Espacio Libre',
                    datafree: (info[0].available/1073741824).toFixed(2) + ' ' + 'GB' ,
                    descripcionused: 'Espacio utilizado',
                    dataused: (info[0].used/1073741824).toFixed(2) + ' ' + 'GB',
                    descripcionperc: 'Espacio util. (%)',
                    dataperc: info[0].capacity,
                })
            });
        
    },2500);

    // INDICADORES SIN CAMBIO DE TIEMPO //

        //--CPU COUNT--//
        const count = cpu.count()
            socket.emit('cpu-cores',{
                descripcion: 'N° de nucleos',
                data: count + " " + "Cores"
        });
        //--CPU MODEL--//
        const model = cpu.model()
            socket.emit('cpu-model',{
                descripcion: 'Modelo de CPU',
                data: model
        });

        socket.emit('datosSistema', {
            tipo: os.type(),
            arch: os.arch(),
            plat: os.platform(),
            host: os.hostname(),


        })
        // -- OOS(Original operative system) -- //
        const oos = os.type()
            socket.emit('os-oos',
            {
                descripcion: 'S.O Base',
                data: oos
        });
        // -- HOSTNAME --//
        const hostn = os.hostname()
            socket.emit('os-hostname',{
                descripcion: 'Nombre del host',
                data: hostn
        });
        // -- ARCH --//
        const arc = os.arch()
            socket.emit('os-arch',{
                descripcion:'Arq. del S.O',
                data: arc
        });
})
