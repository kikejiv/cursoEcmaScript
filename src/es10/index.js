//---- flat  aplanamiento de aaray
let array = [1,2,3,,[1,2,3, [1,2,3]]];
console.log(array.flat(1))


//---flatmap
let arr = [1,2,3,4,5];
console.log(arr.flatMap(value => [value, value * 2]));

//--- trimStart y  trimEnd   quita los espacios en blancos que hayan
let hello = '      hello world';
console.log(hello);
console.log(hello.trimStart());

let hello1 = 'hello world         ';
console.log(hello1);
console.log(hello1.trimEnd());


//opcional catch
try {

} catch {
    error
}

//------fromEntries  transforma arrey en objetos
let entries = [["name", "kike"], ["age", 36]];
console.log(Object.fromEntries(entries));


//symbol sirve para accedet a la decripcion de un objeto tipo simbolo
let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);
