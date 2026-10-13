// Definimos una función que devuelve el nombre de un icono según el tipo de mensaje
function icono(tipo) {
    // Usamos un switch para determinar el icono correspondiente a cada tipo
    switch (tipo) {
        case "info":
            return "icon-i";
        case "aviso":
            return "icon-warn";
        case "error":
            return "icon-x";
        default:
            return "icon-desconocido";
    }
}
// Definimos un array de tipos de mensajes
const tipos = ["error", "info", "info", "critico", "aviso", "info"];
// Inicializamos un contador de mensajes informativos
let n = 0;
// Recorremos el array de tipos y mostramos el tipo y su icono correspondiente
for (const t of tipos) {
    // Mostramos el tipo de mensaje alineado a la izquierda y su icono
    console.log(`${t.padEnd(7, " ")} -> ${icono(t)}`);
    // Contamos los mensajes informativos
    if (t === "info") n++;
}
// Mostramos un mensaje final indicando el número de mensajes informativos encontrados
const mostrarInformativo = n > 0;
// Usamos un operador ternario para decidir qué mensaje mostrar según si hay informativos o no
console.log(mostrarInformativo ? `Informativos: ${n}` : "No hay informativos");