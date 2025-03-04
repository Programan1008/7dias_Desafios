// Arrays y colecciones MEJORADO segun requerimiento en dia6 
let frutas = [];
let lacteos = [];
let dulces = [];
let congelados = [];
let comida = "";
let categoria = "";

let agregarMas = "sí";  // Valor inicial como "sí"

while (agregarMas !== "no") {
    agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'sí' o 'no'.");
    
    // Validar la respuesta del usuario
    while (agregarMas !== "sí" && agregarMas !== "no") {
        alert("¡Operación no reconocida!");
        agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'sí' o 'no'.");
    }

    if (agregarMas === "no") {
        break;  // Salir del bucle si el usuario responde "no"
    }

    // Preguntar si desea agregar o eliminar un alimento
    let accion = prompt("¿Deseas 'agregar' o 'eliminar' un alimento de la lista de compras?");
    
    while (accion !== "agregar" && accion !== "eliminar") {
        alert("¡Operación no reconocida!");
        accion = prompt("¿Deseas 'agregar' o 'eliminar' un alimento de la lista de compras?");
    }

    if (accion === "agregar") {
        // Agregar un alimento
        comida = prompt("¿Qué comida deseas agregar?");
        categoria = prompt("¿En qué categoría encaja esta comida: 'frutas', 'lacteos', 'dulces' o 'congelados'?");

        if (categoria === 'frutas') {
            frutas.push(comida);
        } else if (categoria === 'lacteos') {
            lacteos.push(comida);
        } else if (categoria === 'dulces') {
            dulces.push(comida);
        } else if (categoria === 'congelados') {
            congelados.push(comida);
        } else {
            alert("Esa categoría no está predefinida.");
        }
    } else if (accion === "eliminar") {
        // Eliminar un alimento
        if (frutas.length === 0 && lacteos.length === 0 && dulces.length === 0 && congelados.length === 0) {
            alert("No hay elementos en la lista de compras para eliminar.");
        } else {
            // Mostrar la lista actual
            alert(`Lista de compras actual:\n
                Frutas: ${frutas.join(", ")}\n
                Lácteos: ${lacteos.join(", ")}\n
                Dulces: ${dulces.join(", ")}\n
                Congelados: ${congelados.join(", ")}`);

            let comidaEliminar = prompt("¿Qué comida deseas eliminar?");
            let encontrado = false;

            // Buscar y eliminar la comida en todas las categorías
            if (frutas.includes(comidaEliminar)) {
                frutas.splice(frutas.indexOf(comidaEliminar), 1);
                encontrado = true;
            } else if (lacteos.includes(comidaEliminar)) {
                lacteos.splice(lacteos.indexOf(comidaEliminar), 1);
                encontrado = true;
            } else if (dulces.includes(comidaEliminar)) {
                dulces.splice(dulces.indexOf(comidaEliminar), 1);
                encontrado = true;
            } else if (congelados.includes(comidaEliminar)) {
                congelados.splice(congelados.indexOf(comidaEliminar), 1);
                encontrado = true;
            }

            if (encontrado) {
                alert(`¡${comidaEliminar} ha sido eliminado de la lista de compras!`);
            } else {
                alert("¡No fue posible encontrar el elemento en la lista!");
            }
        }
    }
}

// Mostrar la lista final de compras
alert(`Lista de compras final:\n
    Frutas: ${frutas.join(", ")}\n
    Lácteos: ${lacteos.join(", ")}\n
    Dulces: ${dulces.join(", ")}\n
    Congelados: ${congelados.join(", ")}`);
