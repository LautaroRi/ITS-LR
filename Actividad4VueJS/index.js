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
            lista_datos: []
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
        }
    },
    mounted() {
        this.listarDatos();
    }
}
Vue.createApp(mispropiedades).mount("#enlace1");