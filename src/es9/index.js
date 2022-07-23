/* Spreap operator in objs */

const obj = {
  name: 'Gladibeth',
  age: 24,
  country: 'Ven'
}

const { name, ...all } = obj;
const {country, ...all2} = obj;
console.log(name, all)
console.log(all2)


/**
 * Porpagation Properties
 */

const obj1 = {
  name: 'Gladibeth',
  status: 'activa'
}

const obj2 = {
  ...obj1,
  country: 'Venezuela'
}
console.log(obj2)


/**
 * Promise Finally
 */

const helloWorld = () =>{
  return new Promise((resolve,reject) =>{
    (true)
      ? setTimeout(() => resolve('Hello world'),3000)
      : reject(new Error('Ups found'))
  })
}

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Ya finalizó'))


/**
 * Regex
 */

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2022-07-22');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(`Hoy es ${day} del mes de ${month} del año ${year}`)