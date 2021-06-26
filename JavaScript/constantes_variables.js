const dato = 25;
// Si utilizo una constante, no se puede modificar después su valor, por más que ponga la terminología
//Para strings se utilizan comillas simples y cuando guardo numeros, no se le pone ninguna comilla


console.log('El resultado es: '+dato);
//El signo + se utiliza pra concatenar
//Se utilizan parentesís
//Concatenar un string con una constante (tambien es valuido con variables)

//acá estoy declarando y asignando un valor a la variable
var texto = 'Introduccion a JavaScript';
texto = 'Probando el uiso de variables';

console.log(texto);
//console.log me pasa los datos al insepeccionar, pero en consola
//--------------------------------------------------

//Uso de variable utilizando palabra reservada LET
const valor = 0;

let numero = 66;
//si comparo son dos ==
if(valor == 0)
{
    let numero = 44;
    console.log(numero);
//La let que creo dentro del IF, muere en este mismo, no sale al exterior, es su ciclo de vida
//la diferencia entre var y let, es que var es global y se maneja por orden y va sobreescribiendo, en cambio let tiene ciclo de vida
//los let se sobreponen en la misma linea, si lo uso en condicionales y demás tipos como for, while, etc. Mueren allí dentro en su ciclo
}

console.log(numero);




