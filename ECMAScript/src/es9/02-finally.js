
// Funcion de promesa
const anotherFunction = () =>{
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Heyy!")
        }else{
            reject("Woooooops!")
        }
    })
};

anotherFunction()
.then(response => console.log(response))
.catch(err => console.log(err))
.finally(()=>{console.log("finally your program")});