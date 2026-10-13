// Declaramos una clase base ComponenteBase que tiene un constructor que recibe un nombre y un método render que devuelve una cadena con el nombre del componente en formato HTML
class ComponenteBase { 
    constructor(nombre) { 
        this.nombre = nombre; 
    } 
    render() { 
        return `<${this.nombre}></${this.nombre}>`; 
    } 
} 

//Declaramos una clase CabeceraComponent que extiende de ComponenteBase y tiene un constructor que recibe un texto y un método render que devuelve una cadena con el nombre del componente y el texto en formato HTML
class CabeceraComponent extends ComponenteBase {
    constructor(texto) {
        super("app-cabecera");
        this.texto = texto;
    }
    render() {
        return `<${this.nombre}>${this.texto}</${this.nombre}>`;
    }
}

//Declaramos una clase BotonComponent que extiende de ComponenteBase y tiene un constructor que llama al constructor de la clase base con el nombre del componente
class BotonComponent extends ComponenteBase {
    constructor() {
        super("app-boton");
    }
}
// Creamos un mapa declaraciones que asocia nombres de componentes con funciones que crean instancias de las clases correspondientes
const declaraciones = new Map ([
    ["cabecera", () => new CabeceraComponent("Inicio")],
    ["boton", () => new BotonComponent()]
])
// Definimos una función crear que recibe un nombre de componente y devuelve una instancia del componente correspondiente, o lanza un error si el nombre no está declarado
function crear(nombre) {
    const fabrica = declaraciones.get(nombre);
    if (!fabrica) throw new Error(`Componente no declarado: ${nombre}`);
    return fabrica();
}
// Recorremos un array con los nombres de componentes y llamamos a la función crear para cada uno, mostrando el resultado de renderizar el componente o un mensaje de error si no está declarado
for (const n of ["cabecera", "boton", "tabla"]) { 
    try { 
        const comp = crear(n); 
        console.log(`${comp.constructor.name}: ${comp.render()}`); 
    } catch (e) { 
        console.log(`Error: ${e.message}`); 
    } 
} 
// Mostramos por consola si una instancia de BotonComponent es una instancia de ComponenteBase, y mostramos las claves del mapa declaraciones unidas por comas
console.log(new BotonComponent() instanceof ComponenteBase);
console.log([... declaraciones.keys()].join(", "));