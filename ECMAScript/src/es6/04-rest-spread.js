// Destructuracion de los elementos

// Arrays destructuring
let fruits = ["Apple","Banana"];
let [a, b] = fruits;
console.log(a,fruits[1]);

// Object destructuring
let user = {name : "Oscar", age : 18, country : "Colombia"};
let {name, age, country} = user;
console.log(name,age,user.country);