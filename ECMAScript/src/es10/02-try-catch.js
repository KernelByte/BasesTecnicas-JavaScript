// Forma normal de hacerlo
try {
    hello();
} catch (error) {
    console.log(error);
};

// Nueva forma
try {
    hello();
} catch { // Error personalizado
    console.log("Funcion no definida my friend!");
}
