// Metodo flat
const datos = [1,2,3,4,5,[3,4,5,6,[2,3,45,6,7,[4,5,6,7,7]]]];
console.log(datos.flat(4));

// FlatMap
const datosMap = [1,2,3,4,5,6];
console.log(datosMap.flatMap(v => [v, v++]));