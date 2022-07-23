function newFunction(name, age, country){
  var name = name || 'Gladibeth';
  var age = age || 24;
  var country = country || 'Venezuela';
}


/* ES6 parametros por defecto */

function newFunction2(name='Gladibeth', age=24, country="Vez"){
  console.log(name,age,country);
}
newFunction2()
newFunction2('Estrella', 24, 'Col')


let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

/* ES6 plantilla literal o template lireal*/
let epicPhrase2 = `${hello} ${world} 2`;
console.log(epicPhrase2)

let lorem = 'Esta es una frase \n'
+ "Esta es otra frase";
console.log(lorem)

/* ES6 multilinea*/
let lorem2 = `Esta es una frase 2
esta es otra frase 2`;
console.log(lorem2);


const person ={
  name: 'Gladibeth',
  age: 24,
  country: 'Ven'
}
console.log(person.name, person.age, person.country);


/* ES6  desestructuracion*/
let {name, age, country} = person;
console.log(`Mi nombre es ${name} tengo ${age} años de edad y vivo en ${country}`)


/* ES6 operador spread  o operador de propagacion  */
let team1 = ['Victor', 'Oscar', 'Ricardo'];
let team2 = ['Camila', 'Patricia', 'Gladibeth'];

let education = ['Yonnys', 'William', ...team1, ...team2];
console.log(education)

/* ES6 var, let, const */
/* Global */
{
  var varGlobal = 'Var'
}

/* Bloque */
{
  var letGlobal = 'Let'
}

/* Bloque, no se reacciona */
const a = 'b'


let name = 'Gladibeth';
let age = 24;

/* ES5 */
obj = {name: name, age:age}


obj2 = { name, age }
console.log(obj2)

/* ES6 arrows functions*/
let names = [
  {name: 'Gladibeth', age: 24},
  {name: 'Yonnys', age: 25}
]

const listOfNames = names.map(function(item){
  console.log(`Mi nombre es ${item.name}`)
})
const listOfNames2 = names.map(item => console.log(`Mi nombre es ${item.name} de la lista 2`));

/* Si son varios parametros */
const listOfNames3 = (name,age) => {
  /* Bloque de codigo */
}

/* Si es un solo parametro */
const listOfNames4 = name => {
  /* Bloque de codigo */
}

const square = num => num * num;

/* Promesas */
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    if(false){
      resolve('Hey');
    }else{
      reject('Ups');
    }
  })
}

helloWorld()
  .then(response => console.log(response))
  .then(() => console.log('Hola'))
  .catch(error => console.log(error))


  /* Class */

class Calculator {
  constructor (){
    this.valueA = 0;
    this.valueB = 0;
  }
  suma(num1, num2){
    this.valueA = num1;
    this.valueB = num2;
    return this.valueA + this.valueB;
  }
}

const calc = new Calculator();
console.log(calc.suma(5,5));



/* Modulo Antes */

/* const hello = require('./module')
console.log(hello()); */

/* Nombrado  (No me funciona)*/
/* import { hello } from './module'; */

/* Por default  (No me funciona) */
import myHello from './module';
console.log(myHello())


/* Generadores funciona como steps*/

function* helloWorld(){
  if(true){
    yield 'Hello';
  }
  if(true){
    yield 'World';
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)