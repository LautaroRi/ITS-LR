const mispropiedades = {

    data () {
        return {
            descripcion: '',
            tiempo: '',
            lista_tareas: []
        }

    },
    methods: {
        guardarTarea() {
            const nuevaTarea = {
                descripcion:this.descripcion,
                tiempo:this.tiempo
            }
            //Ahora almaceno los datos en el storage del navegador
            if("tareas" in localStorage){
                this.lista_tareas = JSON.parse(localStorage.getItem("tareas"));
                this.lista_tareas.push(nuevaTarea);
                localStorage.setItem("tareas", JSON.stringify(this.lista_tareas));
                //Si existen, necesito traerlos de nuevo, y parsearlos(convertir) los string que estaban en arrays
                //Si existe, puedo deducir que posiblemente ya existen datos.
                //El getItem trae lo que estaba en "tareas", y el "JSON.parse" lo convierte en Array
                //Al traer las viejas, puedo agregarlas a las nuevas como en la línea 20
                //En la 21, estoy seteando todas las tareas juntas, agregando todas las tareas en 1
            }else{
                this.lista_tareas.push(nuevaTarea);
                localStorage.setItem("tareas", JSON.stringify(this.lista_tareas))
                //Estoy guardando los datos en el local, en el sector tareas, de la lista_tareas. El set item lo guarda, y si no existe, automaticamente lo crea
                //Le agrego el "JSON.stringify()" Para que se cambie el array a un string, que es el compatible con el LocalStorage
                //El setItem lo sobreescirbe en caso de existir, CUIDADO CON ESO En el IF verdadero
            }
            this.descripcion= ''; this.tiempo='';
        },
        listarTareas(){
            if("tareas" in localStorage){
                this.lista_tareas = JSON.parse(localStorage.getItem("tareas"));
            }else{
                this.lista_tareas = [];
                //Si existe el storage, los busco y guardo, y si no existen, la lista sigue vacia
            }
        },
        eliminarTarea(index){
            this.lista_tareas.splice(index,1);
            localStorage.setItem("tareas",JSON.stringify(this.lista_tareas));
            //Con el localStorage estoy seteando de nuevo el Storage, tras la eliminiacion del item anterior
        },
        //Si quiero ELIMINAR el sector, utilizo lo siguiente. No lo VACÍA, lo ELIMINA.
        eliminar(){
            localStorage.removeItem("tareas");
            this.listarTareas();
        }
    },
    mounted() {
        this.listarTareas();
    }

}
Vue.createApp(mispropiedades).mount("#App");