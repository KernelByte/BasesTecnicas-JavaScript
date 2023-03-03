const user = { username: "KernelByte", country: "Colombia", age: 18 };
// Propagacion de los valores
const {username, ...values} = user;

//console.log(user);
console.log(values);
