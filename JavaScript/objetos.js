//declaro una constante donde agrupo un conjunto de propiedades que depues extraigo individualmente
const miobjeto = {
    nombre: 'Delfor',
    apellido: 'Villegas',
    correo: 'delfor97@gmail.com',
    redes_sociales:{
        facebook: 'www.facebook.com',
        twitter: 'www.twitter.com'
    }
}
//Diferente al jason, las propiedas(Nombre,apellido,etc) van sin comillas
//-----------------------------------------------------------
//FORMA TRADICIONAL
const ape = miobjeto.apellido;
//Puedo almacenar el apellido en una constante aparte así el codigo no se alarga tanto
//DESTRUCTING OBJETCS
const { facebook, twitter } = miobjeto.redes_sociales;
//En vez de hacer 2 variables, las hago en 2, no pueden haber dos constantes iguales
//---------------------------------------------------------
//IMPRIMIR

//Imprimo las propiedades que especifiqué en superior
console.log(`
    Apellido: ${miobjeto.apellido}
    Nombre: ${miobjeto.nombre}
    Facebook: ${miobjeto.redes_sociales.facebook} 
`);
//APLICAR EL DESTRUING SERIA: Facebook: ${facebook}
//Extraigo facebook del arból de propiedades de esa manera
//---------------------------------------------------------
//ARREGLOS

//Generalmente se utiliza constante con arreglos por qué no modifico los datos
const miarreglo = [5,8,9];
//Se cuenta de derecha a izquierda, sin contar el punto y coma
console.log(miarreglo[2])
