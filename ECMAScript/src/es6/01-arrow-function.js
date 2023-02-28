// Declaracion de una funcion normal - Funcion declarativa
function square(num){
    return num * num;
}

// Declaracion de una funcion a una variable - Funcion expresiva
const square2 = (num) => {
    return num * num;
};

// Funcion abreviada, cuando es solo de un parametro y no tiene mucha mas logica
const square3 = num => num * num;