var elementos = ["Manzana","Pera","Mango","Banano"]
var arranque = 0;

// Ciclo While
while (arranque < elementos.length) {
    console.log(elementos[arranque]) 
    arranque++
}


// Ciclo For
for (let i = 0; i < elementos.length; i++) {
    console.log(elementos[i]) 
}

for (var frutas of elementos) {
    console.log(frutas) 
}


// Ciclo For each
elementos.forEach(element => {
    console.log(elementos.values) 
});