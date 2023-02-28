// Destructuracion de los elementos

// Arrays destructuring
let fruits = ["Apple","Banana"];
let [a, b] = fruits;
console.log(a,fruits[1]);

// Object destructuring
let user = {name : "Oscar", age : 18, country : "Colombia"};
let {name, age, country} = user;
console.log(name,age,user.country);

// Spread operator
let person = {name : "Maria", age : 15};
let size = 1.76;

// restructuracion del objeto
let data = {...person, size};
console.log(data);

// rest - restructuracion de funciones
function sum(num, ...values){
    console.log(values);
}

sum(2,3,4,6);