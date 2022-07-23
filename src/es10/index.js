/* 
Array.prototype.flat(nivel_de_profundidad): un nuevo método que nos permite aplanar arreglos.
Array.prototype.flatMap() lo mismo que flat con el beneficio de que primero manipular la data para luego poder aplanar.
String.prototype.trimStart() | String.prototype.trimEnd() permite quitar los espacios al inicio o al final dependiendo de la funciona.
try/catch: ahora puedes utilizarlo sin necesidad de especificaro como catch(error) sino directamente usarlo en el scope del catch.
Object.fromEntries() lo inverso a Object.entries(), es decir podemos convertir un objeto en una matriz clave/valor con Object.entries(), y hace lo inverso es decir de una matriz clave/valor a un objeto con Object.fromEntries().
Symbol.prototype.description: permite regresar el descripcion opcional del Symbol */
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description*/

/* Método flat */
const array = [1,2,3,[1,2,3,[1,2,3]]]
console.log(array.flat(2))

const array4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
const result4 = array4.flat(Infinity)

/* Método flat map*/
const array2 = [1,2,3,4,5]
console.log(array2.flatMap(value => [value,value * value]))

const numbers2 = [1,[2,3], 4, 5]
numbers2.flatMap(number => [number *2])


/* Método trimStart and trimEnd*/
const hello = '    Hi gladibeth    '
console.log(hello);
console.log(hello.trimStart())
console.log(hello.trimEnd())

/* Try and catch */
/* El parametro de (error) es opcional */

try {
    
} catch /*(error) ya no es necesario colocarlo*/ {
    error
}

//-------------fromEntries----------------------/
// array to object

const entries = [['name', 'Gladibeth'],['age', 24]]
console.log(Object.fromEntries(entries))


//-------------symbol object--------------------/
const mySymbol = 'My symbol';
const symbol = Symbol(mySymbol);
console.log(symbol.description)