<template>  
 <div>
  <img src="https://static.vecteezy.com/system/resources/previews/002/811/030/original/operating-systems-icons-linux-windows-android-mac-ios-icons-vector.jpg" class="my-4 img-thumbnail text-right" style="height:250px; display:block; margin:0 auto 0 auto;"> 
</div>
    <div class="row container-fluid text-center col-auto">
         <!-- CARD OOS !-->
        <div class="col-4">
            <div class="card text-black text-center bg-light">
                <div class="card-header bg-light">
                    <h6>{{descripcion_oos}}</h6>
                </div>

                <div class="card-body bg-light">
                    <h5>{{valor_oos}}</h5>
                </div>

                <div class="card-footer bg-light">
                    <small>support: its@edu.ar</small>
                </div>
            </div>
        </div>
        <!-- CARD HOSTNAME !-->
        <div class="col-4">
            <div class="card text-black text-center bg-light">
                <div class="card-header bg-light">
                    <h6>{{descripcion_hostname}}</h6>
                </div>

                <div class="card-body bg-light">
                    <h5>{{valor_hostname}}</h5>
                </div>

                <div class="card-footer bg-light">
                    <small> support: its@edu.ar</small>
                </div>
            </div>
        </div>
        <!-- CARD ARCH !-->
        <div class="col-4">
            <div class="card text-black text-center bg-light">
                <div class="card-header bg-light">
                    <h6>{{descripcion_arch}}</h6>
                </div>

                <div class="card-body bg-light">
                    <h5>{{valor_arch}}</h5>
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
    name: 'OsIndicador',
    data() {
        return {
            valor_oos:'',
            valor_hostname:'',
            valor_arch:'',
            descripcion_oos:'',
            descripcion_hostname:'',
            descripcion_arch:'',
            clienteIP:'',
            cliente_razon:'',
            }
    },
    methods: {
        addIndicadores(){
            const socket = io(this.clienteIP)
            socket.on('os-oos', (objeto) => {
                this.valor_oos = objeto.data
                this.descripcion_oos = objeto.descripcion
            });
            socket.on('os-hostname', (objeto) => {
                this.valor_hostname = objeto.data;
                this.descripcion_hostname = objeto.descripcion
            });
            socket.on('os-arch', (objeto) => {
                this.valor_arch = objeto.data
                this.descripcion_arch = objeto.descripcion
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