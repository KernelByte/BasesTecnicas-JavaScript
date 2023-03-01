function* iterate(array) {
   for (let value of array) {
      yield value;
   };
};

const dato = iterate(["Oscar", "Maria", "Sebastian", "Marcela", "Marta"]);
console.log(dato.next().value);
console.log(dato.next().value);
console.log(dato.next().value);
console.log(dato.next().value);