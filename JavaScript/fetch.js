//Una API es como un alargue, cuando son 2 tecnologías distintas, los adapta igual comunica algo distinto con otra diversa
//La API no cambia, suelen cambiar los datos que recibe y envía la API.
//Toda aplicación actual usa API y las transforma en datos validos para otras aplicaciones, como ejemplo: MercadoPago, y el carrito de compras
//Puedo transferir datos de HTTP a JSON, y recursivamente
//Las API mandan ID y Codigos, para transformar los datos
//FETCH lo que hace es otorgar una interfaz de JS para acceder y manipular partes del canal HTTP.
//FETCH Construye UNA RUTA, NO UN LINK

const usuarios = async () => {
    //async destacado//    

    //Recibimos la respuesta, es decir, los usuarios
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users')
    //await destacado//

    //Se especifica que la respuesta la recibimos en JSON
    const datos = await respuesta.json();
    //await destacado//

    console.log(datos);
}
//Se utiliza la funcion, previamente creada.
//Si nos tira que JSON no funciona, es por que no obtuvo datos
//Funciona de manera Asyn, tengo que esperar que se ejecute
//Se soluciona de manera async y await, para establecer prioridades y guardar
//Como está establecido arriba con los argumentos 'async' 'await'
usuarios();
