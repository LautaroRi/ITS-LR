<template>
     <div>
        <img src="https://us.123rf.com/450wm/karneg/karneg1801/karneg180100001/93774990-símbolo-de-cérebro-de-aprendizado-de-máquina-na-placa-de-circuito-renderização-em-3d.jpg?ver=6" class="my-4 img-thumbnail text-right" style="height:250px; display:block; margin:0 auto 0 auto;"> 
    </div>
    <div class="row container-fluid text-center col-auto">
         <!-- CARD CPU FREE !-->
        <div class="col-3">
            <div class="card text-black bg-warning">
                <div class="card-header bg-warning">
                    <h6>{{descripcion_cpu_free}}</h6>
                </div>

                <div class="card-body bg-warning">
                    <h4>{{valor_cpu_free}}</h4>
                </div>

                <div class="card-footer bg-warning">
                    <small class="text-black card-text">support: its@edu.ar</small>
                </div>
            </div>
        </div>
        <!-- CARD CPU USAGE !-->
        <div class="col-3">
            <div class="card text-black bg-warning">
                <div class="card-header bg-warning">
                    <h6>{{descripcion_cpu_usage}}</h6>
                </div>

                <div class="card-body bg-warning">
                    <h4>{{valor_cpu_usage}}</h4>
                </div>

                <div class="card-footer bg-warning">
                    <small class="card-text text-black">support: its@edu.ar</small>
                </div>
            </div>
        </div>
        <!-- CARD CPU COUNT !-->
        <div class="col-3">
            <div class="card text-black bg-warning">
                <div class="card-header bg-warning">
                    <h6>{{descripcion_cpu_count}}</h6>
                </div>

                <div class="card-body bg-warning">
                    <h4>{{valor_cpu_count}}</h4>
                </div>

                <div class="card-footer bg-warning">
                   <small class="card-text text-black">support: its@edu.ar</small>
                </div>
            </div>
        </div>
        <!-- CARD CPU MODEL !-->
        <div class="col-3">
            <div class="card text-black bg-warning">
                <div class="card-header bg-warning">
                    <h6>{{descripcion_cpu_model}}</h6>
                </div>

                <div class="card-body bg-warning">
                    <h6>{{cpu_model}}</h6>
                </div>

                <div class="card-footer bg-warning">
                   <small class="card-text text-black">support: its@edu.ar</small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import io from 'socket.io-client';
export default {
    name: 'CpuIndicador',
    data() {
        return {
          lista: [],
          valor_cpu_free:'',
          valor_cpu_usage:'',
          valor_cpu_count:'',
          cpu_model:'',
          descripcion_cpu_count:'',
          descripcion_cpu_free:'',
          descripcion_cpu_usage:'',
          descripcion_cpu_model:'',
          clienteIP:'',
          cliente_razon:'',
        }
    },
    methods: {  
        addIndicadores(){
            const socket = io(this.clienteIP)
            //CPU FREE
            socket.on('cpu-free', (objeto) => {
                this.valor_cpu_free = objeto.data;
                this.descripcion_cpu_free = objeto.descripcion
            });
            //CPU USAGE
            socket.on('cpu-use', (objeto) => {
                this.valor_cpu_usage = objeto.data;
                this.descripcion_cpu_usage = objeto.descripcion
            });
            //CPU COUNT
            socket.on('cpu-cores', (objeto) => {
                this.valor_cpu_count = objeto.data
                this.descripcion_cpu_count = objeto.descripcion
            });
            //CPU MODEL
            socket.on('cpu-model', (objeto) => {
                this.cpu_model = objeto.data,
                this.descripcion_cpu_model = objeto.descripcion
            })
        },
        traerCliente(){
            this.clienteIP = "http://" + localStorage.getItem("localIP");
            this.cliente_razon = localStorage.getItem("localRZ");
        },
    },
    mounted(){
        this.traerCliente();
        this.addIndicadores();
    }
}
</script>