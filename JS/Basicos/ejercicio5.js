function icono(tipo) {
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

const tipos = ["error", "info", "info", "critico", "aviso", "info"];

let n = 0;
for (const t of tipos) {
    console.log(`${t.padEnd(7, " ")} -> ${icono(t)}`);
    if (t === "info") n++;
}
const mostrarInformativo = n > 0;
console.log(mostrarInformativo ? `Informativos: ${n}` : "No hay informativos");