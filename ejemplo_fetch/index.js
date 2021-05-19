const obtener_fotos = async () => {
    const respuesta = await fetch("http://jsonplaceholder.typicode.com/photos?albumId=1");
    
    const datos = await respuesta.json(); //Indico que son JSON por si no lo son
//total_columnas almacena todas las columnas almacenadas en el forEach
    let total_columnas = [];
    datos.forEach(element => {
        let columna = `
            <div class="col-lg-3">

                <div class="card">
                    <img src="${element.url}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                </div>

            </div>
        `;

        total_columnas.push(columna)

    });

    document.querySelector("#r_fotos").innerHTML = total_columnas.join("");
}
const boton = document.querySelector("#btn_mostrar");
boton.addEventListener("click", obtener_fotos);