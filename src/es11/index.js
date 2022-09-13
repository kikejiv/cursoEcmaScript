//---- dynamic import realiza improtacion de forma dinamica 
const button = document.getElementById("btn");

button-addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hello();
});


//bigInt

const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);


//---- promise allSettled nos devuelve una promesa despues que una promesa dada se haya cumplido

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve1"));

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response));



//----globalThis
console.log(window);
console.log(globalThis);


// Operador Nullish Coalescing devuelve el operador del 

const fooo = null ?? 'default string';
console.log(fooo);


// opcional chainin permite hacer validaciones sin que rompa la aplicacion
const user = {};
console.log(user?.profile?.email);

if (user?.profile?.email) {
    console.log('email');
} else {
    console.log('fail');
}
