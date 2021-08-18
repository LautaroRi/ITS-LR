<template>

    <div class="row">

        <div class="col-4">
            
            <div class="mb-3">
                <label class="form-label">Titulo</label>
                <input v-model="titulo" type="text" class="form-control">
            </div>
            <div class="mb-3">
                <label class="form-label">Noticia</label>
                <!-- El text area es como el input, pero pensado para redactar mucho más !-->
                <textarea v-model="cuerpo" class="form-control" rows="5"></textarea>
            </div>
            
            
            <button @click="mostrar()" class="btn btn-primary">Mostrar</button>
        </div>

        <div class="col-8">
            <ul class="list-group">
<!-- EL v-bind se lo coloco por qué me tirar error al no detectar una key de estilo unico, lo exige en VUE 2. Lo pide VUE 3 para ser más exigente !-->
                <li v-for="p of publicaciones" v-bind:key="p.id" class="list-group-item active">{{p.title}}</li>
            </ul>
        </div>
    </div>

</template>

<script>
export default {
   name:'PublicacionContenido',
   //creo las variables para vue y usar con el v-model
   data(){
       return{
           cuerpo:'',
           titulo:'',
           publicaciones:[]
       }
   },
   methods: {
//EL $this.titulo estoy llamando a la propiedad de arriba en el texto
       mostrar(){
           console.log(`
                NOTICIA DE HOY
                ${this.titulo}

                Desarrollo:
                ${this.cuerpo}
           `);
            this.listarPublicaciones()
       },
       async listarPublicaciones(){
           const lista = await fetch("http://jsonplaceholder.typicode.com/posts")
           this.publicaciones = await lista.json()
       }

   }

}
</script>