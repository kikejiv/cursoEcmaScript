// asi se trabajaba antes una funcion
function newFunction(name, age, country) {
    var name = name || 'Kike';
    var age = age || 36;
    var country = country || 'CO';
    console.log(name, age, country)
}

//con es6
function newFunction2(name = 'Kike', age = 36, country = 'CO'){
    console.log(name, age , country);
}
newFunction2();
newFunction2('Juan', 30, 'PE');


//------template literals sirve para concatenar elementos
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
// con es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//----multilinea
let lorem = "quiero separar una multilinea \n"
+ "con otra frase epica";

// es6
let lorem2  = `otra frase epica que necesitamos
ahopra es otra frase epica`;

console.log(lorem);
console.log(lorem2);

//-----Destructuracion de elementos
let person = {
    'name': 'Kike',
    'age' : 36,
    'country' : 'CO'
} 
console.log(person.name, person.age);

// es6
let { name, age, country} = person;
console.log(name, age, country);


//---operador de propagacion sirve para unir elementos en esta caso los aaaray

let team1 = ['Kike', 'Oscar', 'Luis'];
let team2 = ['juan', 'Pipe', 'Ana'];

let education = ['David', ...team1, ...team2];

console.log(education);
 

// variables var, let, const  let solo estara en el scope local

{
    var globalVar = "global var";
}

{
    let globalLet = "global ler";
}
console.log(globalVar);
console.log(globalLet);

//----asignacion de objetos

let nickname = 'Kike';
let age = 36,

//es5
obj = {nickname: nickname, age: age };
//es6
obj2 = { nickname, age };
console.log(obj2);

//arrow function

const names = [
    { name: 'Kike', age: 36},
    { name: 'Yesica', age: 32}
]

let  listNames = names.map(function (item) {
    console.log(item.name);
})

let listNames2 = names.map(item => console.log(item.name));

const listNames3 = (name, age, country) => {
    ....//bloque de codigo
}

const listNames4 = name => {
    ....//bloque de codigo
}

const square = num => num * num;


//----- promise
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Hey se resolvio la promesa!');
        }else {
            reject('Ups no se cumplio la promesa!');
        }
    });
}

// para ejecutar la promesa
helloPromise()
.then(response => console.log(response) )
.catch(error => console.log(error));

//---clases

class Calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
    res(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA - this.valueB;
    }
}
const calc = new Calculator();
console.log(calc.sum(2,2));
console.log(calc.res(2,2));

//----modulos
import { hello }  from './module.js'

console.log(Hello());

//---Generator

function* helloWorld() {
    if (true) {
        yield 'Hello';
    }
    if (true) {
        yield    'World'
    }
};

const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
