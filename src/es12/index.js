//replaceAll  permite remplazar 
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

//-----metodos privados se diferencia porque se antepone # y solo puedenser accedido en la clase
class Message {
    #show(val) {
        console.log(val);
    };
    get #add(val) {
        ...
    }
}
const message = new Message();
message.show('Hola!');


//-----Promise Any se aptura la primera respueta que sea satisfactoria
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
.then(response => console.log(response));


//referencia debil permite mantener una referencia debil a otro obejto para evitar que ese objeto sea eliminado

class anyClass {
    constructor(element) {
        this.ref = new weakRef(element)
    }
    {...}
}

 //operadores de comparacion

 let isTrue = true;
 let isFalse = false
 console.log(isTrue && = isFalse); //and

 let isTrue = true;
 let isFalse = false
 console.log(isTrue || = isFalse); //or
 
 let isTrue = true;
 let isFalse = false
 console.log(isTrue ?? = isFalse); //null