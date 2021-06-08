const mispropiedades = {
    data() {
        return {
            nombre: '',
            apellido: '',
            dni: null,
            lista_empleados: []
        }
    },

    methods: {
        guardarEmpleado() {
            let unEmpleado = {
                nombre: this.nombre,
                apellido: this.apellido,
                dni: this.dni
            }

            this.lista_empleados.push(unEmpleado);

            this.nombre = ''; this.apellido = '', this.dni = null;
            //Estoy vaciando los input para que no se queden en plano.
        },
        eliminarEmpleado(index) {
            this.lista_empleados.splice(index, 1);
            // El splice tiene varios comportamientos. El primer text del parentesis, indica la POSICION, y la segunda indica CANTIDAD de elementos. Borra incluido, el punto de partida.
        },
    },

    mounted() {

    }

}

Vue.createApp(mispropiedades).mount("#app");
