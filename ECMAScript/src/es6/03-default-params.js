// Manera antigua de hacerlo para valores por defecto
function newUser(name, age, country){
    var name = name || "Oscar";
    var age = age || 18;
    var country = country || "Colombia";
    console.log(name+" "+age+" "+country);
}

newUser();

// Nueva forma de hacerlo para valores por defecto
function newAdmin(name = "Luis", age = 17, country = "España"){
    console.log(name+" "+age+" "+country)
}

newAdmin();