const datos = {
    data() {
        return {
            title: '',
            url: '',
            DatosConjunto: []
        }
    },
    methods: {
        CargarImagen() {
            let Imagen = {
                title: this.title,
                url: this.url,
            }
            this.DatosConjunto.push(Imagen);
            //Vacío los formularios
            this.title = ''; this.url = '';
        },
        mounted(){
            this.CargarImagen();
        }
    } 
}
Vue.createApp(datos).mount("#IDppal");

