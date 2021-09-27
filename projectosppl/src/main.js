//Cualquier importacion impacta en TODO el proyecto, es GLOBAL.
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootswatch/dist/solar/bootstrap.min.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
//exporto bootswatch,entro a dist, elijo la distribucion, y siempre ejecuto el "bootsrap.min.css"
//Afecta a todo el proyecto de la carpeta projectosppl
createApp(App).use(router).use(VueAxios,axios).mount('#app')
