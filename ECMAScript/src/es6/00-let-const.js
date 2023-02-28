// Declaracion y Asignacion - alcance global
var lasName = "David";
// Reasignacion 
lasName = "Oscar";
console.log(lasName);

// Se agrega tipo let - alcance de bloque
let fruit = "Apple";
fruit = "Kiwi"; 
console.log(fruit);

// Se agrega con const - tipo constante no puede cambiar, alcance de bloque
const animal = "Perro";
animal = "Gato";
console.log(animal);

const animales = () => {
    if (true) { // Inicio del bloque
        var animal1 = "Perro";  // Funtion scope
        let animal2 = "Gato";   // block scope
        const animal3 = "Loro"; // block scope    
    } // Fin del bloque
    console.log(animal1);
    console.log(animal2);
    console.log(animal3);
};

animales();