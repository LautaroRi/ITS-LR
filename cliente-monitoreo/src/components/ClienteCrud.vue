<template>

    <div class="row">
        <div class="col-12">  
            <table class="table table-hover table-sm align-middle text-center">
                <thead>
                    <tr>

                        <th>R.Social</th>
                        <th>T.Contacto</th>
                        <th>C.Electrónico</th>
                        <th>Dirección</th>
                        <th>Localidad</th>
                        <th>D.Equipo</th>
                        <th>IP</th>
                        <th>S.O</th>
                        <th>Acción</th>

                    </tr>
                </thead>

                <tbody>
                    <tr v-for="cliente of lista" v-bind:key="cliente.id_cliente">

                        <td>{{cliente.razon_social}}</td>
                        <td>{{cliente.telefono_contacto}}</td>
                        <td>{{cliente.correo_electronico}}</td>
                        <td>{{cliente.direccion}}</td>
                        <td>{{cliente.localidad}}</td>
                        <td>{{cliente.equipo_descripcion}}</td>
                        <td>{{cliente.direccion_ip}}</td>
                        <td>{{cliente.sistema_operativo}}</td>
                        <td>

                            <button @click="eliminarCliente(cliente.id_cliente)" class="btn btn-outline-danger btn-sm"><i class="bi bi-trash" style="font-size: 0.7rem;"></i></button>
                            <button @click="editar(cliente)" class="btn btn-outline-warning btn-sm "><i class="bi bi-pencil" style="font-size: 0.7rem;"></i></button>
                            <button @click="statsCliente(cliente)" class="btn btn-outline-success btn-sm "><i class="bi bi-patch-check"></i></button>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
<!-- PRIMER COLUMNA FORMULARIOS !-->
         <div class="col-6">
            <div class="mb-3">
                <label class="form-label">Razón Social</label>
                <input v-model="razon_social" class="form-control" type="text" placeholder="Ingrese razón social">

            </div>

            <div class="mb-3">
                <label class="form-label">Teléfono de contacto</label>
                <input v-model="telefono_contacto" class="form-control" type="text" placeholder="Ingrese teléfono de contacto">
            </div>

            <div class="mb-3 ">
                <label class="form-label">Correo Electrónico</label>
                <input v-model="correo_electronico" class="form-control" type="text" placeholder="Ingrese correo electrónico" >
            </div>

            
            <div class="mb-3">
                <label class="form-label">Dirección</label>
                <input v-model="direccion" class="form-control" type="text" placeholder="Ingrese dirección" >
            </div>
        </div>
<!-- SEGUNDA COLUMNA FORMULARIOS !-->
        <div class="col-6">    
            <div class="mb-3">
                <label class="form-label">localidad</label>
                <input v-model="localidad" class="form-control" type="text" placeholder="Ingrese localidad" >
            </div>

            
            <div class="mb-3">
                <label class="form-label">Descripción del Equipo</label>
                <input v-model="equipo_descripcion" class="form-control" type="text" placeholder="Ingrese descripción del equipo" >
            </div>

            
            <div class="mb-3">
                <label class="form-label">Dirección IP</label>
                <input v-model="direccion_ip" class="form-control" type="text" placeholder="Ingrese IP" >
            </div>

            
            <div class="mb-3">
                <label class="form-label">Sistema Operativo</label>
                <input v-model="sistema_operativo" class="form-control" type="text" placeholder="Ingrese S.O" >
            </div>
        </div>
 <!-- BOTONES !-->
        <div class="d-grid gap-2 col-2 mx-auto">
            <div v-if="estado == 0">
            <button @click="guardarCliente()" class="btn btn-success ">Guardar cliente</button>
            </div>
        
            <div v-if="estado == 1">
            <button @click="actualizarCliente()" class="btn btn-primary">Actualizar cliente</button>
            </div>
        </div>     
    </div>
    
</template>

<script>
export default {
    name: "ClienteCrud",
    data(){
        return{
            razon_social: '',
            telefono_contacto:'',
            correo_electronico:'',
            direccion:'',
            localidad:'',
            equipo_descripcion:'',
            direccion_ip:'',
            sistema_operativo:'',
            id:'',
            lista:[],
            estado:0
        }
    },
    methods: {

        vaciar(){
            this.razon_social = "",
            this.telefono_contacto = "",
            this.correo_electronico= "",
            this.direccion = "",
            this.localidad = "",
            this.equipo_descripcion = "",
            this.direccion_ip ="",
            this.sistema_operativo = ""
        },
        guardarCliente(){
            const unCliente = {
                razon_social:this.razon_social,
                telefono_contacto:this.telefono_contacto,
                correo_electronico:this.correo_electronico,
                direccion:this.direccion,
                localidad:this.localidad,
                equipo_descripcion:this.equipo_descripcion,
                direccion_ip:this.direccion_ip,
                sistema_operativo:this.sistema_operativo
            }
            this.axios.post("http://localhost:3005/cliente", unCliente).then(result => {
                
                alert(result.data)
                this.vaciar()
                this.listarClientes()
            })

        },
        listarClientes(){
            this.axios.get("http://localhost:3005/clientes").then(result => {
                this.lista = result.data
            })
        },
        eliminarCliente(id){
            this.axios.delete("http://localhost:3005/cliente/"+id).then(result => {
                alert(result.data)
                this.listarClientes()
            })
        },
        editar(unCliente){
            this.estado = 1;
            this.razon_social = unCliente.razon_social,
            this.telefono_contacto = unCliente.telefono_contacto,
            this.correo_electronico = unCliente.correo_electronico,
            this.direccion = unCliente.direccion,
            this.localidad = unCliente.localidad,
            this.equipo_descripcion = unCliente.equipo_descripcion,
            this.direccion_ip = unCliente.direccion_ip,
            this.sistema_operativo = unCliente.sistema_operativo,
            this.id = unCliente.id_cliente // Lo guardamos aunque no impacta en pantalla, para editar el cliente.

        },
        statsCliente(unCliente){
            this.direccion_ip = unCliente.direccion_ip,
            this.razon_social = unCliente.razon_social,
            localStorage.setItem("localIP",this.direccion_ip);
            localStorage.setItem("localRZ",this.razon_social);
        },
        actualizarCliente(){
            const clientemodificado = {
            razon_social:this.razon_social,
            telefono_contacto:this.telefono_contacto,
            correo_electronico:this.correo_electronico,
            direccion:this.direccion,
            localidad:this.localidad,
            equipo_descripcion:this.equipo_descripcion,
            direccion_ip:this.direccion_ip,
            sistema_operativo:this.sistema_operativo
            }

            this.axios.put("http://localhost:3005/cliente/"+this.id,clientemodificado).then(result => {
                alert(result.data)
                this.listarClientes()
                this.vaciar()
                this.estado = 0;
            })

        }

    },
    mounted(){
        this.listarClientes()
    }

}
</script>