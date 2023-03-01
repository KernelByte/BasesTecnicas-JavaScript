// Declaracion de una clase
class User{};
// Instancia de la clase User
const newUser = new User();

class user{

    // Metodo constructor 
    /*constructor(){
       console.log("Se creo el constructor"); 
    }*/

    // Constructor modificado
    constructor(name){
        this.name = name;
    }

    // Metodo hablar
    speak(){
        return "Hola";
    }

    // Metodo saludar
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const greetingUser = new user("Yoniher");
console.log(greetingUser.greeting());


class Userget{
    
    // Metodo constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // Metodo
    speak(){
        return "Hola";
    };

    //Metodo
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    // Metodos get y set
    get uAge(){
        return this.age;
    }

    set uAge(a){
        this.age = a;
    }
}

const modifiUser = new Userget("Yoniher",18);
console.log(modifiUser.uAge);
modifiUser.uAge = 25;
console.log(modifiUser.uAge);