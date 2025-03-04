// Funciones para las operaciones matemáticas (final)
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: No se puede dividir por cero.";
    }
    return a / b;
}

function potenciar(a, b) {
    return Math.pow(a, b);
}

function raizCuadrada(a) {
    if (a < 0) {
        return "Error: No se puede calcular la raíz cuadrada de un número negativo.";
    }
    return Math.sqrt(a);
}

// Función principal de la calculadora
function calculadora() {
    let continuar = true;

    while (continuar) {
        // Mostrar opciones al usuario
        console.log(`Selecciona una operación:
            1. Sumar
            2. Restar
            3. Multiplicar
            4. Dividir
            5. Potenciar
            6. Raíz cuadrada
            7. Salir`);

        // Leer la opción del usuario
        let operacion = prompt("Ingresa el número de la operación que deseas realizar:");

        // Validar la entrada del usuario
        while (operacion < 1 || operacion > 7 || isNaN(operacion)) {
            console.log("¡Operación no válida!");
            operacion = prompt("Ingresa el número de la operación que deseas realizar:");
        }

        // Salir si el usuario elige la opción 7
        if (operacion == 7) {
            console.log("Hasta la próxima!");
            continuar = false;
            break;
        }

        // Pedir los números al usuario
        let num1, num2;
        if (operacion != 6) {  // La raíz cuadrada solo necesita un número
            num1 = parseFloat(prompt("Ingresa el primer número:"));
            num2 = parseFloat(prompt("Ingresa el segundo número:"));
        } else {
            num1 = parseFloat(prompt("Ingresa el número:"));
        }

        // Validar que los números sean válidos
        while (isNaN(num1) || (operacion != 6 && isNaN(num2))) {
            console.log("¡Debes ingresar números válidos!");
            if (operacion != 6) {
                num1 = parseFloat(prompt("Ingresa el primer número:"));
                num2 = parseFloat(prompt("Ingresa el segundo número:"));
            } else {
                num1 = parseFloat(prompt("Ingresa el número:"));
            }
        }

        // Realizar la operación seleccionada
        let resultado;
        switch (operacion) {
            case "1":
                resultado = sumar(num1, num2);
                break;
            case "2":
                resultado = restar(num1, num2);
                break;
            case "3":
                resultado = multiplicar(num1, num2);
                break;
            case "4":
                resultado = dividir(num1, num2);
                break;
            case "5":
                resultado = potenciar(num1, num2);
                break;
            case "6":
                resultado = raizCuadrada(num1);
                break;
            default:
                resultado = "Operación no válida.";
        }

        // Mostrar el resultado
        console.log(`El resultado es: ${resultado}`);
    }
}

// Llamar a la función principal
calculadora();
