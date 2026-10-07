const rutas = [
    { ruta: "/inicio", titulo: "Inicio", activo: true },
    { ruta: "/perfil", titulo: "Perfil", activo: false }, 
    { ruta: "/ajustes", titulo: "Ajustes", activo: false } 
];

function pintarMenu(items) {
    if (items.length === 0) {
        console.log("(menú vacío)");
        return;
    }
    for (const [indice, ruta] of items.entries()) {
        const marca = ruta.activo ? "[X]" : "[ ] ";
        console.log(`${indice + 1}. ${marca} ${ruta.titulo} ${ruta.ruta}`);
    }
};

pintarMenu(rutas);
pintarMenu([]);