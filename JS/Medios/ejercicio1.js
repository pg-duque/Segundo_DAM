// Definimos una clase PaginadorComponent que representa un componente de paginación
class PaginadorComponent {
    // Definimos una propiedad privada #pagina que almacena la página actual
    #pagina;
    // Definimos un constructor que recibe la página inicial y el total de páginas
    constructor(inicial = 1, total = 4) {
        this.#pagina = inicial;
        this.total = total;
    }

    // Definimos un getter para la propiedad pagina que devuelve el valor de #pagina
    get pagina() {
        return this.#pagina;
    }
    // Definimos un método siguiente que avanza a la siguiente página si no se ha llegado al total
    siguiente() {

        // Si la página actual es menor que el total, incrementamos #pagina y devolvemos true
        if (this.#pagina < this.total) {
            this.#pagina++;
            return true;
        }
        return false;
    }
    // Definimos un método render que devuelve una cadena con la información de la página actual y el total
    render() {
        return `<nav>Página ${this.#pagina}/${this.total}</nav>`
    }
}
// Creamos una instancia de PaginadorComponent con página inicial 2 y total 4
const p = new PaginadorComponent(2);
// Mostramos el resultado de llamar al método render de la instancia p
console.log(p.render());
// Recorremos un bucle 3 veces y llamamos al método siguiente de la instancia p
for (let i = 0; i < 3; i++) {
    // Llamamos al método siguiente y almacenamos el resultado en la variable avanza
    const avanza = p.siguiente();
    // Mostramos un mensaje indicando si se ha avanzado o no y el resultado de render
    console.log(`${avanza ? "avanza" : "se queda"} -> ${p.render()}`);
}
// Mostramos el valor de la propiedad pagina de la instancia p y su tipo
console.log(p.pagina);
console.log(typeof p.pagina);