// Definimos una clase Almacen que representa un almacén de datos con observadores
class Almacen {
    // Definimos una propiedad privada #datos que almacena los datos en un objeto y una propiedad privada #oyentes que almacena los observadores en un array
    #datos = {};
    // Definimos una propiedad privada #oyentes que almacena los observadores en un array
    #oyentes = [];
    // Definimos un método observar que añade un observador a la lista de oyentes
    observar(fn) {
        this.#oyentes.push(fn);
    }

    // Definimos un método set que establece un valor para una clave y notifica a los oyentes si el valor cambia
    set(clave, valor) {
        if (this.#datos[clave] === valor) return false;
        const anterior = this.#datos[clave];
        this.#datos[clave] = valor;
        for (const fn of this.#oyentes) fn(clave, valor, anterior);
        return true;
    }

    // Definimos un método get que devuelve el valor de una clave
    get(clave) {
        return this.#datos[clave];
    }
}
// Creamos una instancia de Almacen y un array para almacenar la bitácora de cambios
const almacen = new Almacen();
const bitacora = [];
// Registramos un observador que añade un mensaje a la bitácora cada vez que se cambia un valor
almacen.observar((clave, valor, anterior) => {
    bitacora.push(`${clave}: ${anterior === undefined ? "-" : anterior} => ${valor}`);
});
// Registramos otro observador que muestra un mensaje en la consola cada vez que se cambia un valor
almacen.observar((clave, valor) => {
    console.log(`[panel] ${clave} = "${valor}"`);
});
// Probamos el método set con diferentes claves y valores, incluyendo cambios y valores repetidos
console.log(almacen.set("tema", "claro"));
console.log(almacen.set("tema", "claro"));
console.log(almacen.set("tema", "oscuro"));
console.log(almacen.set("fuente", 14));
console.log(bitacora.join(" | "));
console.log(almacen.get("idioma"));