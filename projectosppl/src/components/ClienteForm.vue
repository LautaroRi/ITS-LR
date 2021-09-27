<template>

    <div class="row">

        <div class="col-4">
            <div class="mb-3">
                <label class="form-label">Nombre</label>
                <input v-model="nombre" class="form-control" type="text" placeholder="Ingrese nombre">

            </div>

            <div class="mb-3">
                <label class="form-label">Apellido</label>
                <input v-model="apellido" class="form-control" type="text" placeholder="Ingrese apellido">
            </div>

            <div class="mb-3">
                <label class="form-label">DNI</label>
                <input v-model="dni" class="form-control" type="number" placeholder="Ingrese DNI" >
            </div>

            <div v-if="estado == 0">
            <button @click="guardarCliente()" class="btn btn-success">Guardar cliente</button>
            </div>
            <div v-if="estado == 1">
            <button @click="actualizarCliente()" class="btn btn-primary">Actualizar cliente</button>
            </div>
        </div>

        <div class="col-8">
            
            <table class="table">
                <thead>
                    <tr>

                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>DNI</th>
                        <th>Acción</th>

                    </tr>
                </thead>

                <tbody>
                    <!-- Le pongo llave primaria, y recorro la lista, la variable !-->
                    <tr v-for="cliente of lista" v-bind:key="cliente.id_cliente">

                        <td>{{cliente.nombre}}</td>
                        <td>{{cliente.apellido}}</td>
                        <td>{{cliente.dni}}</td>
                        <td>
                            <!-- Le envio el ID leyendo la lista !-->
                            <button @click="eliminarCliente(cliente.id_cliente)" class="btn btn-danger btn-sm">X</button>
                            <button @click="editar(cliente)" class="btn btn-primary btn-sm">Edit</button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>

</template>

<script>
export default {
    name: "ClienteForm",
    data(){
        return{
            nombre: '',
            apellido: '',
            dni:null, //Generalmente quedan null los campos numericos, y vacíos los strings para que se llenen con v-model
            id:null,
            lista:[], // La lleno luego con los clientes a listar.
            estado:0
        }
    },
    methods: {

        vaciar(){
            this.nombre = "",
            this.apellido = "",
            this.dni = null
        },
        guardarCliente(){ //conformamos nuestro JSON. Desde JS se trabaja como objeto puro, sin comilla doble
            const unCliente = {
                nombre:this.nombre,
                apellido:this.apellido,
                dni:this.dni
            }
            //Lo reconoce por que lo lee del main.js, luego lo comunico con la ruta de mi API. Y le envío mi cliente de la constante.
            this.axios.post("http://localhost:3000/cliente", unCliente).then(result => {
                
                alert(result.data)
                this.vaciar() //Llamo a vaciar para volver a blanco los campos.
                this.listarClientes()
            })

        },
        listarClientes(){
            this.axios.get("http://localhost:3000/clientes").then(result => {
                this.lista = result.data //Accedo a la data, según axios.
            })
        },
        eliminarCliente(id){
            //con el + concateno el ID que recibo.
            this.axios.delete("http://localhost:3000/cliente/"+id).then(result => {
                alert(result.data)
                this.listarClientes()
            })
        },
        editar(unCliente){
            this.estado = 1;
            this.nombre = unCliente.nombre,
            this.apellido = unCliente.apellido,
            this.dni = unCliente.dni,
            this.id = unCliente.id_cliente // Lo guardamos aunque no impacta en pantalla, para editar el cliente.
        },
        actualizarCliente(){
            const clientemodificado = {
                nombre:this.nombre,
                apellido:this.apellido,
                dni:this.dni
            }

            this.axios.put("http://localhost:3000/cliente/"+this.id,clientemodificado).then(result => {
                alert(result.data)
                this.listarClientes()
                this.vaciar()
                this.estado = 0;
            })

        }

    },
    //En mounted todo se monta RAPIDO, apenas se renderice la WEB.
    mounted(){
        this.listarClientes()
    }

}
</script>