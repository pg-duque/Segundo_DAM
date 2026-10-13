// Definimos una clase ServicioContactos que mantiene una lista privada de contactos y tiene métodos para añadir un contacto y listar los contactos
class ServicioContactos {
    // Definimos una propiedad privada #contactos que almacena los contactos en un array
    #contactos = [];
    // Definimos un método añadir que recibe un nombre y añade un objeto con un id y el nombre a la lista de contactos
    añadir(nombre) {
        this.#contactos.push({id: this.#contactos.length + 1, nombre})
    }
    // Definimos un método listar que devuelve una copia del array de contactos
    listar() {
        return [...this.#contactos];
    }
}

// Definimos una clase ServicioSimulado que simula un servicio de contactos y tiene un método listar que devuelve un array con un contacto de prueba
class ServicioSimulado {
    listar() {
        return [{ id: 42, nombre: "contacto de prueba" }];
    }
}

// Definimos una clase AgendaComponent que recibe un servicio de contactos y tiene un método render que devuelve una cadena con la lista de contactos o un mensaje si está vacía
class AgendaComponent {
    // Definimos un constructor que recibe un servicio de contactos y lo asigna a la propiedad servicio
    constructor(servicio) {
        this.servicio = servicio;
    }
    // Definimos un método render que obtiene la lista de contactos del servicio y devuelve una cadena con la información de cada contacto o un mensaje si la lista está vacía
    render() {
        const contactos = this.servicio.listar();
        if (contactos.length === 0) return "Agenda vacía";
        return contactos.map((c) => `#${c.id} | ${c.nombre}`).join("; ");
    }
}

// Creamos una instancia de ServicioContactos y una instancia de AgendaComponent con el servicio real, añadimos algunos contactos y mostramos el resultado de renderizar la agenda
const real = new ServicioContactos();
// Creamos una instancia de AgendaComponent con el servicio real
const  vista = new AgendaComponent(real);
console.log(vista.render());
real.añadir("Lucia");
real.añadir("Pablo")
console.log(vista.render());
// Mostramos el resultado de renderizar la agenda con un servicio simulado que devuelve un contacto de prueba, y luego mostramos la longitud de la lista de contactos del servicio real después de hacer una copia y modificarla
console.log(new AgendaComponent(new ServicioSimulado()).render());
const copia = real.listar();
// Hacemos pop en la copia para eliminar el último contacto y mostramos la longitud de la lista de contactos del servicio real, que no se ve afectada por la modificación de la copia
copia.pop();
console.log(real.listar().length);

