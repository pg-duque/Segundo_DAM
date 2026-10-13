// Definimos un array de objetos que representan los servicios
const servicios = [
    { nombre: "usuarios", latenciaMs: 1250, activo: true }, 
    { nombre: "pedidos", latenciaMs: 80, activo: true }, 
    { nombre: "informes", latenciaMs: 4020, activo: false }, 
    { nombre: "login", latenciaMs: 305, activo: true } 
]
// Definimos una función que convierte un texto a mayúsculas
const mayusculas = (texto) => texto.toUpperCase();
// Definimos una función que convierte milisegundos a segundos con formato
const segundos = (ms) => `${Math.floor(ms / 1000)},${String(ms % 1000).padStart(3, "0")} s`;
// Definimos una función que filtra, ordena y transforma la lista de servicios
function filtrarVista(lista, maxMs) {
    return lista
        // Filtramos los servicios activos con latencia menor o igual a maxMs
        .filter(servicio => servicio.activo && servicio.latenciaMs <= maxMs)
        // Ordenamos los servicios por latencia ascendente
        .sort((a, b) => a.latenciaMs - b.latenciaMs)
        // Transformamos cada servicio a una cadena con nombre en mayúsculas y latencia en segundos
        .map(servicio => `${mayusculas(servicio.nombre)} - ${segundos(servicio.latenciaMs)}`);
}
// Probamos la función filtrarVista con distintos valores de maxMs
for (const max of [2000, 50]) {
    const vista = filtrarVista(servicios, max);
    console.log(`Máximo ${segundos(max)}: ${vista.length} resultado(s)`);
    for (const linea of vista) console.log(`  ${linea}`);
}