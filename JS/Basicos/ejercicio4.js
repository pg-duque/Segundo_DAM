const servicios = [
    { nombre: "usuarios", latenciaMs: 1250, activo: true }, 
    { nombre: "pedidos", latenciaMs: 80, activo: true }, 
    { nombre: "informes", latenciaMs: 4020, activo: false }, 
    { nombre: "login", latenciaMs: 305, activo: true } 
]

const mayusculas = (texto) => texto.toUpperCase();

const segundos = (ms) => `${Math.floor(ms / 1000)},${String(ms % 1000).padStart(3, "0")} s`;

function filtrarVista(lista, maxMs) {
    return lista
        .filter(servicio => servicio.activo && servicio.latenciaMs <= maxMs)
        .sort((a, b) => a.latenciaMs - b.latenciaMs)
        .map(servicio => `${mayusculas(servicio.nombre)} - ${segundos(servicio.latenciaMs)}`);
}

for (const max of [2000, 50]) {
    const vista = filtrarVista(servicios, max);
    console.log(`Máximo ${segundos(max)}: ${vista.length} resultado(s)`);
    for (const linea of vista) console.log(`  ${linea}`);
}