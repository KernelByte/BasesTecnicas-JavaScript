var datos = ["oscar","LuisAa","Marta","Luis"]
console.log(datos[2])

// longitud del arreglo
console.log(datos.length)

// Metodos del arreglo
datos.push("Julian") // Añadir elementos al arreglo en la ultima posicion
datos.unshift("Marcela"); // Añade elementos al arreglo pero en la primera posicion
datos.pop() // elimina el ultimo elemento en el arreglo
datos.shift() // elimina el primer elemento del arreglo
datos.indexOf("Marta") // saber el index o la posicion de un elemento en el arreglo

// Metodos en Arrays
var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
  ];

  // Metodo filter
  var datosFiltrados = articulos.filter(function(articulos){
        return articulos.costo <= 500;
  });

  // Metodo Map -- para traer multiples valores
  var nombreArticulos = articulos.map(function(art){
    return art.nombre;
  });