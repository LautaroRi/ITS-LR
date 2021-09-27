<template>

    <div class="row">

        <div class="col-4">
            <div class="mb-3">
                <label class="form-label">Descripción</label>
                <input v-model="descripcion" class="form-control" type="text" placeholder="Ingrese la descripción del producto">

            </div>

            <div class="mb-3">
                <label class="form-label">Precio de Compra</label>
                <input v-model="precio_compra" class="form-control" type="number" placeholder="Ingrese el precio de compra">
            </div>

            <div class="mb-3">
                <label class="form-label">Precio Venta</label>
                <input v-model="precio_venta" class="form-control" type="number" placeholder="Ingrese el precio de venta" >
            </div>

            <div class="mb-3">
                <label class="form-label">Stock</label>
                <input v-model="stock" class="form-control" type="number" placeholder="Ingrese el STOCK" >
            </div>

            <div v-if="estado == 0">
            <button @click="guardarProducto()" class="btn btn-success">Guardar producto</button>
            </div>
            <div v-if="estado == 1">
            <button @click="actualizarProducto()" class="btn btn-primary">Actualizar producto</button>
            </div>
        </div>

        <div class="col-8">
            
            <table class="table">
                <thead>
                    <tr>

                        <th>Descripción</th>
                        <th>Precio de Compra</th>
                        <th>Precio de Venta</th>
                        <th>Stock</th>
                        <th>Acción</th>

                    </tr>
                </thead>

                <tbody>
                    <!-- Le pongo llave primaria, y recorro la lista, la variable !-->
                    <tr v-for="producto of lista" v-bind:key="producto.id_producto">

                        <td>{{producto.descripcion}}</td>
                        <td>{{producto.precio_compra}}</td>
                        <td>{{producto.precio_venta}}</td>
                        <td>{{producto.stock}}</td>
                        <td>
                            <button @click="eliminarProducto(producto.id_producto)" class="btn btn-danger btn-sm">X</button>
                            <button @click="editar(producto)" class="btn btn-primary btn-sm">Edit</button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
</template>

<script>
export default {
    name: "ProductoForm",
    data(){
        return{
            descripcion: '',
            precio_compra:null,
            precio_venta:null,
            stock:null,
            id:null,
            lista:[],
            estado:0
        }
    },
    methods: {

        vaciar(){
            this.descripcion = "",
            this.preciocompra = null,
            this.precioventa = null,
            this.stock = null
        },
        guardarProducto(){ 
            const unProducto = {
                descripcion:this.descripcion,
                precio_compra:this.precio_compra,
                precio_venta:this.precio_venta,
                stock:this.stock
            }
            this.axios.post("http://localhost:3001/producto", unProducto).then(result => {
                
                alert(result.data)
                this.vaciar()
                this.listarProductos()
            })

        },
        listarProductos(){
            this.axios.get("http://localhost:3001/producto").then(result => {
                this.lista = result.data
            })
        },
        eliminarProducto(id){
            this.axios.delete("http://localhost:3001/producto/"+id).then(result => {
                alert(result.data)
                this.listarProductos()
            })
        },
        editar(unProducto){
            this.estado = 1;
            this.descripcion = unProducto.descripcion,
            this.precio_compra = unProducto.precio_compra,
            this.precio_venta = unProducto.precio_venta,
            this.stock = unProducto.stock,
            this.id = unProducto.id_producto // Lo guardamos aunque no impacta en pantalla, para editar el cliente.
        },
        actualizarProducto(){
            const productomodificado = {
                descripcion:this.descripcion,
                precio_compra:this.precio_compra,
                precio_venta:this.precio_venta,
                stock:this.stock
            }

            this.axios.put("http://localhost:3001/producto/"+this.id,productomodificado).then(result => {
                alert(result.data)
                this.listarProductos()
                this.vaciar()
                this.estado = 0;
            })

        }

    },
    //En mounted todo se monta RAPIDO, apenas se renderice la WEB.
    mounted(){
        this.listarProductos()
    }
}
</script>