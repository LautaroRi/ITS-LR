<template>

    <div class="mb-3">
        <label class="form-label">Método de cálculo</label>
        <select @change="modificarLabels()" v-model="select" class="form-select">
<!-- Cada vez que se modifique el modificarLabels, voy a tener un cambio !-->
<!-- El option -1 es como un placeholder  y le pongo "disabled selected" para que no sea seleccionado, pero si que salga en primera plana!-->
            <option value="-1" disabled selected>Seleccione un método</option>
            <option value="0">Intensidad</option>
            <option value="1">Tensión</option>
            <option value="2">Potencia</option>
<!-- El option despliega esa lista de eleccion, y el value es el numero que luego reutilizaré para definir la formula!-->
        
        </select>
    </div>

    <div class="mb-3">
        <label class="form-label">{{lbl1}}</label>
        <input v-model="dato1" class="form-control" type="number">

    </div>

    <div class="mb-3">
        <label class="form-label">{{lbl2}}</label>
        <input v-model="dato2" class="form-control" type="number">
    </div>

<button @click="calcular()" class="btn btn-success">Calcular</button>

<div class="mt-3">
    <h3>{{resultado}}</h3>
</div>
</template>
<script>
export default {
    name:'OHMCalculo',
    data (){
        return{
            dato1:null,
            dato2:null,
            select:-1, // le dejo el -1 para que no quede vacio, y ponga la opcion de elegir
            lbl1: ' ',
            lbl2: ' ',
            resultado:null,
        }
    },
    //Sector de funciones para nosotros, o metodos, similares.//
    methods:{

        validacion(to){
            if(this.select == 0){
            to == 0 ? (this.lbl1 = 'Tensión', this.lbl2 = 'Resistencia') : (this.resultado = this.dato1 / this.dato2)
            }else{
                if(this.select == 1){
                    to == 0 ? (this.lbl1 = 'Intensidad', this.lbl2 = 'Resistencia') : (this.resultado = this.dato1 * this.dato2)
// Es un IF pero reducido en 1 linea,el ?(hacer) y los dos puntos :(else).
                }else {
                    to == 0 ? (this.lbl1 = 'Resistencia', this.lbl2 = 'Intensidad') : (this.resultado = this.dato1 * Math.pow(this.dato2,2))
// El math.pow lo efectuo para hacer la elevación al cuadrado. La sintaxis es ",(numero a elevar)" Puede ser cualquier numero al que queremos elevar.
                }
            }
        },
        modificarLabels(){
            this.validacion(0)
        },

        calcular(){
            this.validacion(1)
        }
    }
}
</script>