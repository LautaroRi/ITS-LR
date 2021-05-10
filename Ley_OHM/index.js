//CALCULAR RESISTENCIA
const calcular_resistencia = () => {
    const r1 = document.querySelector("#d2_intensidad").value;
    const r2 = document.querySelector("#d3_voltaje").value;
    const rr = r2 / r1; 
    document.querySelector("#resultado").value = rr.toFixed(2);
}
const btn_resistencia = document.querySelector("#c1_resistencia");
btn_resistencia.addEventListener("click", calcular_resistencia);
//----------------------------------------------------------------------------//
//CALCULAR INTESIDAD
const calcular_intensidad = () => {
    const i1 = document.querySelector("#d3_voltaje").value;
    const i2 = document.querySelector("#d1_resistencia").value;
    const ii = i1 / i2; 
    document.querySelector("#resultado").value = ii.toFixed(2);
}
const btn_intensidad = document.querySelector("#c2_intensidad");
btn_intensidad.addEventListener("click", calcular_intensidad);
//----------------------------------------------------------------------------//
//CALCULAR VOLTAJE
const calcular_voltaje = () => {
    const v1 = document.querySelector("#d2_intensidad").value;
    const v2 = document.querySelector("#d1_resistencia").value;
    const vv = v1 * v2; 
    document.querySelector("#resultado").value = vv.toFixed(2);
}
const btn_voltaje = document.querySelector("#c3_voltaje");
btn_voltaje.addEventListener("click", calcular_voltaje);
//----------------------------------------------------------------------------//
// FUNCION REFRESCAR
var rel = () => window.location.reload();
const refresh_d1 = document.querySelector("#refrescar");
refresh_d1.addEventListener("click", rel);
