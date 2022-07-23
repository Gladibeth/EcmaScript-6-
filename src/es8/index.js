/* Convertir un objeto a array */

const data ={
  frontend: 'Gladibeth',
  backend: 'Yonnys',
  desing: 'Eulogio',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length)

const data1 = {
  frontend: 'Gladibeth',
  backend: 'Yonnys',
  desing: 'Eulogio',
}

const values = Object.values(data1);
console.log(values);
console.log(values.length)

const data2 = {
  frontend: 'Gladibeth',
  backend: 'Yonnys',
  desing: 'Eulogio',
}
const keys = Object.keys(data2);
console.log(keys);
console.log(keys.length)


/* padding */

const hello = 'Hello';
console.log(hello.padStart(7, 'hi'))
console.log(hello.padEnd(12, ' -----'))
console.log('food'.padEnd(12, ' -----'))


/* Asinc and await */

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (false)
    ? setTimeout(() => resolve('Hello world'), 3000)
    : reject(new Error('Ups'))
  })
}

const helloAsync = async() => {
  const helloAwait = await helloWorld()
  console.log(helloAwait)
}

helloAsync();

const otherFunction = async () =>{
  try{
    const helloAwait = await helloWorld()
    console.log(helloAwait)
  }catch(error){
    console.log(error)
  }
  
}
otherFunction();