<template>  
 <div>
  <img src="https://ehorus.com/wp-content/uploads/2018/07/que-es-la-memoria-ram-featured.png" class="my-4 img-thumbnail text-right" style="height:250px; display:block; margin:0 auto 0 auto;"> 
</div>
    <div class="row container-fluid text-center">
         <!-- CARD MEMORY TOTAL !-->
        <div class="col-4">
            <div class="card text-black text-center bg-light">
                <div class="card-header bg-light">
                    <h6>{{descripcion_mem_total}}</h6>
                </div>

                <div class="card-body bg-light">
                    <h5>{{valor_mem_total}}</h5>
                </div>

                <div class="card-footer bg-light">
                    <small>support: its@edu.ar</small>
                </div>
            </div>
        </div>
        <!-- CARD MEMORY USED !-->
        <div class="col-4">
            <div class="card text-black text-center bg-light">
                <div class="card-header bg-light">
                    <h6>{{descripcion_mem_used}}</h6>
                </div>

                <div class="card-body bg-light">
                    <h5>{{valor_mem_used}}</h5>
                </div>

                <div class="card-footer bg-light">
                    <small>support: its@edu.ar</small>
                </div>
            </div>
        </div>
        <!-- CARD MEMORY FREE !-->
        <div class="col-4">
            <div class="card text-black text-center bg-light">
                <div class="card-header bg-light">
                    <h6>{{descripcion_mem_free}}</h6>
                </div>

                <div class="card-body bg-light">
                    <h5>{{valor_mem_free}}</h5>
                </div>

                <div class="card-footer bg-light">
                    <small>support: its@edu.ar</small>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import io from 'socket.io-client';
export default {
    name: 'DriveIndicador',
    data() {
        return {
            lista: [],
            valor_mem_total:'',
            valor_mem_free:'',
            valor_mem_used:'',
            descripcion_mem_total:'',
            descripcion_mem_free:'',
            descripcion_mem_used:'',
            clienteIP:'',
            cliente_razon:'',
            }
    },
    methods: {
        addIndicadores(){
            const socket = io(this.clienteIP)
            socket.on('mem-info', (objeto) => {
                this.valor_mem_total = objeto.dataTotal
                this.descripcion_mem_total = objeto.descTotal
            });
            socket.on('mem-info', (objeto) => {
                this.valor_mem_free = objeto.dataLibre
                this.descripcion_mem_free = objeto.descLibre
            });
            socket.on('mem-info', (objeto) => {
                this.valor_mem_used = objeto.dataUtil
                this.descripcion_mem_used = objeto.descUtil
            });
            
        },
        traerCliente(){
            this.clienteIP = "http://" + localStorage.getItem("localIP");
            this.cliente_razon = localStorage.getItem("localRZ");
        },  
    },
    mounted(){
        this.traerCliente(),
        this.addIndicadores();
    }
}
</script>