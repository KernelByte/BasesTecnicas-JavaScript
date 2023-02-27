var carro = {
    marca : "Toyota",
    modelo : "Ursa",
    anio : 2021,
    mover : function (){console.log("Correr")}
};

// Imprimir el valor del objeto
console.log(carro.marca);

// llamar metodo dentro del objeto
carro.mover();

// Funcion constructora de un objeto
function miAuto(marca, modelo, anio){

    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

// Instanciar un nuevo objeto
var autoNuevo = new miAuto("Suzuki","main","2020")
var autoNuevo2 = new miAuto("Chevrolet","coas","2021")