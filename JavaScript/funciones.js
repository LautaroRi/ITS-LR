// funcion clasica de JavaScript

function multiplicar()
{

    console.log('Probando función clásica');
}

//Hacer uso o llamar una función
multiplicar();
//------------------------------------------------------
//Función tipo flecha de JS, la función flecha no tiene nombre, pero se aleja en una constante
//La ventaja de función flecha es que se puede utilizar sin llaves cuando solo se utiliza 1 argumento
const dividir = () => console.log('Probando función flecha');

//Hacer uso o llamar la funcion flecha
dividir();
//------------------------------------------------------
//funciones con retorno
//return entrega una respuesta que recojo, almaceno y despues decido si lo muestro en un console.log
function obtener_datos()
{
    const mensaje = 'Probando funciones con return'
    return mensaje;
   
}
const respuesta = obtener_datos();
//La respuesta se almacena en una constante, por qué si no no entrega la respuesta retornada
console.log(` Probando comillas, y a la vez
              Usando la funcion return para imprimir
              Lo alojado en una constante ${respuesta}
`);

//-----------------------------------------------------------
//Funciones con retorno y parametros
//recibe datos, los opera, y despues devuelve
//Los parametros almacenan datos, similares a variables
function calcular(a,b)
{
    let resultado = a+b; // parseInt(a) + parseInt(b) no me arriesgo a que me pongan un tipo de ingreso invalido. Lo fuerzo a que sea un entero


    return resultado;


}
//pasamos a ejecutar dicha funcion, cuando la llamamos tenemos que ingresar los argumentos
//Any significa que admite TODO tipo de formatos
const respuesta2 = calcular(2,8);
console.log(respuesta2);
//---------------------------------------------------------
//Comunicación entre funciones
// No hace falta definir la funcion, directamente utilizamos la de arriba
const mostrar_sumatoria = () => {

    const sumatoria = calcular(8,8);

    console.log(` 
    El resultado de la suma es: ${sumatoria}
    `)
}
mostrar_sumatoria();

//----------------------------------------------------------
//Funciones flecha con retorno y sus expresiones. Al recebir solo un parametro y un argumento, no hace falta llaves o parentesis.
//Parentesis los uso cuando uso más de 1 parametro.
const diferencia = x => x - 1;
const resultado3 = diferencia(10);
console.log(resultado3);