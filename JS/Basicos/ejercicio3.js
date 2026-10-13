// Definimos un array de objetos que representan las rutas del menú
const rutas = [
    { ruta: "/inicio", titulo: "Inicio", activo: true },
    { ruta: "/perfil", titulo: "Perfil", activo: false }, 
    { ruta: "/ajustes", titulo: "Ajustes", activo: false } 
];
// Función que pinta el menú en la consola
function pintarMenu(items) {
    // Si el array está vacío, mostramos un mensaje y salimos
    if (items.length === 0) {
        console.log("(menú vacío)");
        return;
    }
    // Recorremos el array de rutas y mostramos cada una con su índice y estado
    for (const [indice, ruta] of items.entries()) {
        const marca = ruta.activo ? "[X]" : "[ ] ";
        console.log(`${indice + 1}. ${marca} ${ruta.titulo} ${ruta.ruta}`);
    }
};

// Llamamos a la función pintarMenu con el array de rutas y luego con un array vacío
pintarMenu(rutas);
pintarMenu([]);