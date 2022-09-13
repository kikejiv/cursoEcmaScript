//operador de reposo puede extraer las propiedades de un objeto asi aun no se haya construido
const obj = {
    name: 'Kike',
    age: 36,
    country: 'CO',
};

let {name, ...all } = obj; //extraigo el nombre  y traigo los demas dtaos
console.log(name, all);


//-------propiedades de propagacion


const obj = {
    name: 'Kike',
    age: 36,
}
const obj1 = {
    ...obj,  // se utiliza ... para unir los dos objetos
    country: 'CO'
}
console.log(obj1);


//-----promise .finally

const helloWorld = () => {
    return new Promise((resolve, reject) => {
    (true)
    ? resolve('Hello World')
    :reject(new Error('Test Error'))
 });
};

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizo'))


//-----Regex   como podemos agrupar bloques de regex y acceder a cada uno

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);