<template>
<div class="row">
    <div class="col-4">
        <div class="mb-3">
            <label class="form-label">Cateto Opuesto</label>
            <input class="form-control" type="number" placeholder="Ingrese cateto" v-model="dato1">
        </div>
            <div class="mb-3">
            <label class="form-label">Cateto Adyacente</label>
            <input class="form-control" type="number" placeholder="Ingrese cateto" v-model="dato2">
        </div>
        <button @click="calcular()" class="btn btn-primary btn-circle">Calcular Hipotenusa</button>
    </div>
    <div class="col-8">
        <h3>{{resultado}}</h3>
    </div>
</div>
</template>

<script>
export default {
    name: 'PitagorasForm',
    data (){
        return{
            dato1:null,
            dato2:null,
            resultado:null,
        }
    },
    methods:{
        calcular(){
            this.resultado = (Math.sqrt(Math.pow(this.dato1,2) + Math.pow(this.dato2,2))).toFixed(2);
        }
    }







}

</script>