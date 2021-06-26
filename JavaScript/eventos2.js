const imprimir = () => console.log('Repaso de eventos')

//identificar a traves de su ID
const boton_evento2 = document.querySelector("#btn_evento2");
// agregando el evento lo que hago es que con el click, ejecute la funcion
boton_evento2.addEventListener("click", imprimir);
//--------------------------------------------------------
//Funcion de calculos
//el .value extrae el valor del inp_d1
const calcular_multiplicacion = () => {
    //El parseFloat lo convierte a enteros o decimales segun el dato ingresado, para evitar advertencias por utilzar comas o puntos en los numeros decimales
    const d1 = parseFloat(document.querySelector("#inp_d1").value);
    const d2 = document.querySelector("#inp_d2").value;
    const r = d1 * d2;

    document.querySelector("#inp_resultado").value = r;
    //A la derecha es lo que recojo, a la izquierda lo que estoy llenando
}
const btn_producto = document.querySelector("#btn_calcular")
btn_producto.addEventListener("click", calcular_multiplicacion);






