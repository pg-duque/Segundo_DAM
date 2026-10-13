// Función que completa una plantilla con los valores de un objeto
function completar(plantilla, datos) {
    let resultado = "";
    let i = 0;
    // Recorremos la plantilla buscando las claves entre {{ y }}
    while (i < plantilla.length) {
        const inicio = plantilla.indexOf("{{", i);
        if (inicio === -1) {
            resultado += plantilla.slice(i);
            break;
        }
        const fin = plantilla.indexOf("}}", inicio);
        if (fin === -1) {
            resultado += plantilla.slice(i);
            break;
        }
        // Extraemos la clave y buscamos su valor en el objeto datos
        resultado += plantilla.slice(i, inicio);
        const clave = plantilla.slice(inicio + 2, fin).trim();
        const valor = datos[clave];
        // Si el valor es undefined, no lo mostramos
        resultado += valor !== undefined ? valor : "";
        // Avanzamos el índice más allá de la clave encontrada
        i = fin + 2;
    }
    // Devolvemos la plantilla completada
    return resultado;
}

// Ejemplos de uso de la función completar
const datos = {usuario: "Marcos", avisos: 7, equipo: null};
console.log(completar("<p>Hola {{ usuario }}</p>", datos));
console.log(completar("Avisos: {{avisos}} | Equipo: [{{ equipo }}] | Extra: [{{ zona }}]", datos) );
console.log(completar("Texto fijo", datos));