// Definimos una clase ErrorCampo que extiende de Error y añade un campo adicional
class ErrorCampo extends Error {
    // Definimos un constructor que recibe el nombre del campo y el mensaje de error
    constructor(campo, mensaje) {
        super(mensaje);
        this.name = "ErrorCampo"
        this.campo = campo;
    }
}
// Definimos un objeto reglas que contiene funciones de validación para cada campo
const reglas = {
    // Definimos una función de validación para el campo correo
    correo: (v) => {
        if (typeof v !== "string" || v.trim() === "") throw new ErrorCampo("correo", "obligatorio");

        if (!v.includes("@")) throw new ErrorCampo("correo", "debe contener @");
    },
    // Definimos una función de validación para el campo cantidad
    cantidad: (v) => {
        if (!Number.isInteger(v)) throw new ErrorCampo("cantidad", "debe ser entero");
        if (v < 1) throw new ErrorCampo("cantidad", "debe ser al menos 1");
    }
}
// Definimos una función comprobar que recibe un objeto de valores y devuelve un objeto con la validez y los errores encontrados
function comprobar(valores) { 
    // Inicializamos un array de errores vacío
    const errores = []; 
    // Recorremos cada campo de las reglas y aplicamos la función de validación correspondiente
    for (const campo of Object.keys(reglas)) { 
        try { 
            reglas[campo](valores[campo]); 
        } catch (e) { 
            if (!(e instanceof ErrorCampo)) throw e; 
            errores.push(`${e.campo}: ${e.message}`); 
        } 
    } 
    // Devolvemos un objeto con la propiedad valido que indica si no hay errores y la propiedad errores con el array de errores encontrados
    return { valido: errores.length === 0, errores }; 
} 
// Definimos un array de casos de prueba con diferentes combinaciones de valores para los campos correo y cantidad
const casos = [ 
    { correo: "a@b.es", cantidad: 3 }, 
    { correo: "sin-arroba", cantidad: 0 }, 
    { correo: "", cantidad: 1.5 }, 
    {} 
]; 
// Recorremos cada caso de prueba y llamamos a la función comprobar, mostrando el resultado en la consola
for (const [i, caso] of casos.entries()) { 
    const r = comprobar(caso); 
    console.log(`Pedido ${i + 1}: ${r.valido ? "CORRECTO" : "INCORRECTO"}`); 
    for (const e of r.errores) console.log("  - " + e); 
}