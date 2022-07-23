/* Replace and replaceAll */

const string = 'Javascript es maravilloso, Javascript puedo crear el mejor futuro de la web';
const replaceString = string.replace('Javascript', 'Python');
console.log(replaceString)
const replaceString1 = string.replaceAll('Javascript','Pyton')
console.log(replaceString1)

/* Metodos privados en las clases */

class Message{
  /* Con agregarle # se vuelve privada */
  #show(val){
    console.log(val);
  }
  
}

const message = new Message;
message.show('Hello world')

/* Promise.any devuelve la primera resuelta */
const promise1 = new Promise((resolve,reject) => reject('1'))
const promise2 = new Promise((resolve,reject) => resolve('2'))
const promise3 = new Promise((resolve,reject) => resolve('3'))

Promise.any([promise1,promise2,promise3])
  .then(response => console.log(response))


//  🦴 WeakRef(element);
class anyClass{
  constructor(element){
    this.ref = new WeakRef(element)
  }
}


// 🧪 Nuevos operadores lógicos (investigar mas no quedo claro)

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);