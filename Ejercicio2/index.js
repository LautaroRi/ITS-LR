const obtener_datos = async () => {
    const datos_generales = await fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales");
    const datos_convertidos = await datos_generales.json();
    let datos_totales = [];
    datos_convertidos.forEach(element => {
    let tablitas = `
    <tr>
        <td>${element.casa.nombre}</td>
        <td><span class="badge bg-warning text-dark">$${element.casa.compra}</span></td>
        <td><span class="badge bg-info text-dark">$${element.casa.venta}</span></td>
    </tr> 
    `    
    datos_totales.push(tablitas)
    });
    document.querySelector("#t_principal").innerHTML = datos_totales.join("");
}
const boton = document.querySelector("#btn_moneda");
boton.addEventListener("click",obtener_datos);
