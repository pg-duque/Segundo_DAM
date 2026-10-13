// Declaración de un objeto con propiedades de distintos tipos
const ajustes = {
    modulo: "Login",
    version: 3,
    habilitado: false,
    descripcion: null,
    etiqueta: undefined
};

// Usamos un bucle for of para recorrer las claves del objeto y mostrar su valor y tipo
for (const clave of  ["modulo", "version", "habilitado", "descripcion", 
"etiqueta"]) {
    const valor = ajustes[clave];
    console.log(`${clave}: ${valor ?? "(sin valor)"} -> ${typeof valor}`);
}

// Comprobamos la igualdad de la propiedad version con el número 3 y la cadena "3"
console.log(ajustes.version == "3");
console.log(ajustes.version === "3");
