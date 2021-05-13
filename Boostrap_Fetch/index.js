function mostrar()
{
    let info = {
        nombre: 'Lautaro',
        apellido: 'Rivas',
        correos: {
            gmail:'lautaroezequielrivas2000@gmail.com',
            outlook:'tucombi19@outlook.com'
        }
    }
    //Esto uso de comillas se llama Template String
    console.log(`
        Mi nombre es: ${info.nombre}
        Mi outlook es: ${info.correos.outlook}
    
    `);
}

function mostrar_elementos_arreglo()
{
    //Los corchetes significan que es un Array
    //Los coloca en un orden, del 0 en adelante, de izq. a derecha
    //Cuenta conjuntos separados por coma
    let valores = [44,10,25,30,8,9,15];
    console.log(valores[2]);
}
function mostrar_array_objetos()
{
    let arreglo_objetos = [
        {
            taller: 'Programación 1',
            anio: '5to',
            escuela: 'cet30'
        },
        {
            taller: 'Web 2',
            anio: '6to',
            escuela: 'cet30'
        }
    ];
 //Para recorrer el array que tiene varios elementos, lo defino con un foreach
    
 
 
 
 //el td significa que es un dato de tabla
 let totalidad_filas = [];
    arreglo_objetos.forEach(objeto => {


        let fila = `

            <tr>

                <td>${objeto.escuela}</td>
                <td>${objeto.taller}</td>
                <td>${objeto.anio}</td>
            </tr>
        `;
        totalidad_filas.push(fila)


        //comentado por DESUSO
        /*console.log(`
            Escuela: ${objeto.escuela}
            Taller: ${objeto.taller}
            Año: ${objeto.anio}
        `)*/
    });

  document.querySelector("#tb_datos").innerHTML = totalidad_filas.join("");
// El join me quita las comillas que me almacena
}