//funcion, el nombre de la funcion, y lo que quiero que haga
//El doble parentesis hace que se ejecute la función
function mostrar()
{
    alert ('Probando el evento clickeo');
    console.log('Probando clickeo');
};

//Para identificar el ID para llevarlo al HTML, utilizo Bosstrap o utilizo JavaScript puro
//Utilizo comillas dobles por que estoy agregando una propiedad del elemento
//el # indica que se va a tratar de un ID de cualquier elemento, ya sea tablas, botones, tarjetas ,etc.
const btn = document.querySelector("#btn_evento");

//Estoy diciendo que cuando clickee sobre btn de referencia, sucede lo proximo
//Despues del click, pongo coma y escribo lo que quiero que suceda, generalmente son funciones

btn.addEventListener("click", mostrar);
//Add basicamente escucha los eventos y los agrega, sobre el elemento asignado antes. Es lo que quiero escuchar


