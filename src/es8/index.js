//object entries  devuelve la clave y los valores de una matriz
const data = {
    frontend: 'Jose',
    backend: 'Camilo',
    design: 'Vivian',
}
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// object value devuelve los valores de un objeto en un arreglo

const data1 = {
    frontend: 'Jose',
    backend: 'Camilo',
    design: 'Vivian',
}

const values = Object.values(data1);
console.log(values);
console.log(values.length);


//---padding es para anteponer una cadena en el string segun como se indique

const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12, '_______'))

//----trailing commas se puene una coma al final de la linea y puede estar segida de un valor o no 

const obj = {
    name: 'Oscar',
}


// promesas  Async Await

const helloWorld = ()  => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

//como se eje cuta correctamente para manejar lo errores
const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();
