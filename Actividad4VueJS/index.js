const mispropiedades = {

    data() {
        return {
            nombre: '',
            apellido: '',
            dni: '',
            correo: '',
            cuota: '',
            importe: '',
            fecha: '',
            lista_datos: [],
            indice: null
        }
    },
    methods: {
        guardarDatos() {
            const datosNuevos = {
                nombre: this.nombre,
                apellido: this.apellido,
                dni: this.dni,
                correo: this.correo,
                cuota: this.cuota,
                importe: this.importe,
                fecha: this.fecha,
            }
            if ("directdata" in localStorage) {
                this.lista_datos = JSON.parse(localStorage.getItem("directdata"));
                this.lista_datos.push(datosNuevos);
                localStorage.setItem("directdata", JSON.stringify(this.lista_datos));
            } else {
                this.lista_datos.push(datosNuevos);
                localStorage.setItem("directdata", JSON.stringify(this.lista_datos));
            }
            this.nombre = ''; this.apellido = ''; this.dni = ''; this.correo = ''; this.cuota = ''; this.importe = ''; this.fecha = ''
        },
        listarDatos() {
            if ("directdata" in localStorage) {
                this.lista_datos = JSON.parse(localStorage.getItem("directdata"));
            } else {
                this.lista_datos = [];
            }
        },
        borrarDatos() {
            localStorage.removeItem("directdata");
            this.listarDatos();
        },
        sacarDato(index) {
            this.lista_datos.splice(index, 1);
            localStorage.setItem("directdata", JSON.stringify(this.lista_datos))
        },
        // Agregar el edición de datos
        llenarCampos(index) {
            this.nombre = this.lista_datos[index].nombre;
            this.apellido = this.lista_datos[index].apellido;
            this.dni = this.lista_datos[index].dni;
            this.correo = this.lista_datos[index].correo;
            this.cuota = this.lista_datos[index].cuota;
            this.importe = this.lista_datos[index].importe;
            this.fecha = this.lista_datos[index].fecha;
            this.indice = index;
        },
        actualizarDatos() {
        //La inversa a traer los datos, ahora le llevo los datos nuevos
            this.lista_datos[this.indice].nombre = this.nombre;
            this.lista_datos[this.indice].apellido = this.apellido;
            this.lista_datos[this.indice].dni = this.dni;
            this.lista_datos[this.indice].correo = this.correo;
            this.lista_datos[this.indice].cuota = this.cuota;
            this.lista_datos[this.indice].importe = this.importe;
            this.lista_datos[this.indice].fecha = this.fecha;
        //Seteo el item nuevo
            localStorage.setItem("directdata", JSON.stringify(this.lista_datos));
        //Vacio los campos una vez realizada la actualización
            this.nombre = '', this.apellido = ''; this.dni = ''; this.correo = '', this.cuota = '', this.importe = '', this.fecha = ''
        //Vacio el indice para no tocar por error y romper el web.
            this.indice = null;
        }
    },
    mounted() {
        this.listarDatos();
    }
}
Vue.createApp(mispropiedades).mount("#enlace1");