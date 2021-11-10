<template>
    
    <h4>Recibiendo datos</h4>
    <div class="row mb-3">
        <div class="col-3">

            <select @change="capturar_random()" v-model="equipo" class="form-select">
                <option value="" selected disabled>Seleccione equipo [...]</option>
                <option value="http://172.16.8.184:3000">Equipo de Darío</option>
                <option value="http://172.16.8.167:3000">Equipo de Nacho</option>
                <option value="http://172.16.8.254:3000">Equipo de Romína</option>
                <option value="http://172.16.9.231:3000">Equipo LOCAL</option>
                <option value="http://172.16.9.28:3000">Equipo Andrea</option>
                <option value="http://172.16.8.179:3000">Equipo Belén</option>
                <option value="http://lautaro00.ddns.net:3000">Equipo propio por no-IP</option>

            </select>

        </div>
    </div>
    <div class="row">
        <div class="col-4">
            <div class="card">
                <div class="card-header text-center"><b>{{nombre}}</b></div>
                <div class="card-body">
                    <h3>{{valor_recibido}}</h3>
                </div>
                <div class="card-footer">
                    <h4>{{estado}}</h4>
                </div>
            </div>
        </div>

        <div class="col-4">
            <div class="card">
                <div class="card-header text-center">
                    {{descripcion_cpu_free}}
                </div>

                <div class="card-body text-center">
                    <h3>{{valor_cpu_free}}</h3>
                </div>

                <div class="card-footer">
                    <h4>Valor (%)</h4>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card">
                <div class="card-header text-center">
                    {{descripcion_cpu_usage}}
                </div>

                <div class="card-body text-center">
                    <h3>{{valor_cpu_usage}}</h3>
                </div>

                <div class="card-footer">
                    <h4>Valor</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import io from 'socket.io-client'
export default {
    name: 'SocketIndicador',
    data() {
        return{
            valor_recibido:null,
            estado:'',
            equipo:'',
            nombre:'',
            valor_cpu_free:null,
            descripcion_cpu_free:'',
            valor_cpu_usage:null,
            descripcion_cpu_usage:'',
        }
    },
    methods: {
        capturar_random()
        {
            //Tenemos que conectarnos y/o vincular nuestro cliente con el servidor//
            const socket = io(this.equipo)
            //Valor llega con 2 propiedades, es un objeto: dato, y nombre.
            socket.on('dato-socket', (objeto) => {
                this.valor_recibido = objeto.dato.toFixed(2);
                this.nombre = objeto.nombre
                if(this.valor_recibido > 0.7){
                    this.estado = 'Valor excedido'
                }else{
                    this.estado = 'Valor normal'
                }
            });
            //En la misma capturar-random, agrego el nuevo objeto
            socket.on('datos-cpu', (objeto) => {
                this.valor_cpu_free = objeto.data.toFixed(2);
                this.descripcion_cpu_free = objeto.descripcion
            });
            //Agrego el nuevo objeto de CPU USAGE
            socket.on('cpu-usage', (objeto) => {
                this.valor_cpu_usage = objeto.data.toFixed(2);
                this.descripcion_cpu_usage = objeto.descripcion
            });
        }


    },

    mounted()
    {
        //this.capturar_random()
    }
}
</script>