<template>  
 <div>
  <img src="http://www.doctormanzana.com/uploads/7/5/5/9/7559600/published/blog-header-hdd-ssd.jpg?1559204500" class="my-4 img-thumbnail text-right" style="height:250px; display:block; margin:0 auto 0 auto;"> 
</div>
    <div class="row container-fluid text-center">
         <!-- CARD DISK TOTAL !-->
        <div class="col-3">
            <div class="card text-black bg-success text-center">
                <div class="card-header text-black bg-success">
                    <h6>{{descripcion_disk_total}}</h6>
                </div>

                <div class="card-body text-black bg-success">
                    <h4>{{valor_disk_total}}</h4>
                </div>

                <div class="card-footer text-black bg-success">
                    <p class="card-text"><small class="text-black">support: its@edu.ar</small></p>
                </div>
            </div>
        </div>
        <!-- CARD DISK USED !-->
        <div class="col-3">
            <div class="card card text-black text-center bg-success">
                <div class="card-header text-center card text-black bg-success">
                    <h6>{{descripcion_disk_used}}</h6>
                </div>

                <div class="card-body text-center card text-black bg-success">
                    <h4>{{valor_disk_used}}</h4>
                </div>

                <div class="card-footer card text-black bg-success">
                    <p class="card-text"><small class="text-black">support: its@edu.ar</small></p>
                </div>
            </div>
        </div>
        <!-- CARD DISK FREE !-->
        <div class="col-3">
            <div class="card card text-black bg-success">
                <div class="card-header card text-black bg-success">
                    <h6>{{descripcion_disk_free}}</h6>
                </div>

                <div class="card-body card text-black bg-success">
                    <h4>{{valor_disk_free}}</h4>
                </div>

                <div class="card-footer card text-black bg-success">
                    <p class="card-text"><small class="text-black">support: its@edu.ar</small></p>
                </div>
            </div>
        </div>
        <!-- CARD DISK % !-->
        <div class="col-3">
            <div class="card card text-black bg-success">
                <div class="card-header card text-black bg-success">
                    <h6>{{descripcion_disk_perc}}</h6>
                </div>

                <div class="card-body card text-black bg-success">
                    <h4>{{valor_disk_perc}}</h4>
                </div>

                <div class="card-footer card bg-success ">
                    <p class="card-text"><small class="text-black">support: its@edu.ar</small></p>
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
            valor_disk_total:'',
            valor_disk_free:'',
            valor_disk_used:'',
            valor_disk_perc:'',
            descripcion_disk_total:'',
            descripcion_disk_free:'',
            descripcion_disk_used:'',
            descripcion_disk_perc:'',
            clienteIP:'',
            cliente_razon:'',
            }
    },
    methods: {
        addIndicadores(){
            const socket = io(this.clienteIP)
            socket.on('disk-info', (objeto) => {
                this.valor_disk_total = objeto.datatotal
                this.descripcion_disk_total = objeto.descripciontotal
            });
            socket.on('disk-info', (objeto) => {
                this.valor_disk_free = objeto.datafree;
                this.descripcion_disk_free = objeto.descripcionfree
            });
            socket.on('disk-info', (objeto) => {
                this.valor_disk_used = objeto.dataused
                this.descripcion_disk_used = objeto.descripcionused
            });
            socket.on('disk-info', (objeto) => {
                this.valor_disk_perc = objeto.dataperc
                this.descripcion_disk_perc = objeto.descripcionperc
            })
        },
        traerCliente(){
            this.clienteIP = "http://" + localStorage.getItem("localIP") + ":3005";
            this.cliente_razon = localStorage.getItem("localRZ");
        },
    },
    mounted(){
        this.traerCliente();
        this.addIndicadores();
    }
}
</script>