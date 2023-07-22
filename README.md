# desestructuración

En este repo encontraran algunos conceptos sobre la desestructuración básica del ES6 necesaria para ser mas óptimos al momento de realizar proyectos con react js

como siempre para saber un poco más adetalle sobre la desestrucutación lo más recomendable, es leer directamente la documentación que ya existe sobre estos temas, como en la pagina de [mdn web docs](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment "click aquí").

---

## desestruturación de _Arrays_ en _js_

La desestructuración en Arrays, quiere decir que solo vamos a desempaquetar ciertos
valores de un array y guardar esos valores en variables independientes

Entonces antes de desestructurar un array vamos a realizar un pequeño ejemplo sobre como son alguna interacciones con los arrays en **_JavaScript_**, recordando que la funcionalidad de estos es alamcenar distintos tipos de datos en una misma variable

```javascript
const unaFuncion = () => {
  console.log("Esto es solo una función");
};

const myArray = ["Erik", "Daniela", unaFuncion(), { edad: 21 }];
//su posición=>     0   ,     1     ,        2    ,       3
```

y para acceder a esos valores dentro del array, es a traves de la notación de los corchetes "[ ]"

```javascript
const valorQueRequiero = myArray[0];
console.log(valorQueRequiero); //resultado ==> "Erik"
```

Listo, ya con este pequeñisimo repaso podemos empezar a ver la magia de la desestructuración y como esta, nos ayuda a ser progrmadores mas eficientes.

Teniendo en cuenta que para poder acceder a los valores dentro del **_array_** solo nos pide saber la posición del valor dentro del array y el nombre de la variable en donde estan almacenados esos datos, podemos empezar a darnos idea de la logica de la dsestructuración.

Desestructurar es basicamente desempaquetar solo aquellos valores que requerimos de ese array y guardarlos en variables independientes, dependiendo del lugar en el que se encuentren estos valores dentro del array

```javascript
const nombres = ["Erik", "Ada", "Lizeth", "Gustavo"];

const [primero, segundo] = nombres;

console.log("primero"); //==> "Erik"
console.log("segundo"); //==> "Ada"
```

siendo da tal modo la desestructuración

```javascript
  aquellos valores que estan en las primeras posiciones del array
 ╚═════════════╦═════════════════════════════════════════════════╝
               ║
      ╔════════╩═══════╗
const [primero, segundo] = nombres;
                           ╚══╦══╝
                       ╔══════╩═══════╗
                       de donde vendran
```

<img src="https://blog.rahulbhutani.com/wp-content/uploads/2020/05/50acac918c.jpg" width="500px" margin-left="80px">

El spread operator es una forma de recorrer iterables como lo son los arrays y manipular su contenido de forma mas rapida y sencilla, siendo una forma de desempaquetar o "desmenuzar" un **_array_** (también se puede con objetos "{ }"), para tener mas claridad, vamos a analizar el siguiente ejemplo:

```javascript
const numeros = [1, 2, 3, 4, 5, 6];

console.log(numeros); //==>[1,2,3,4,5,6]

//desempaquetar todo lo que hay en el array de numeros
console.log(...numeros); //==> 1,2,3,4,5,6
```

Esto nos facilita un monton de funcionalidades como la de actualizar un array ya existente y agregarle un nuevo valor, sin necesidad de acudir a los metodos, como _`Array.push('item')`_

#### forma pasada :goberserk:

```javascript
const tares = ["leer", "correr", "aprender Js"];
tareas.push("ver Max steel");
console.log(tareas); //=>["leer","correr", "aprender Js", "ver Max steel"]
```

#### forma con el spread operator :trollface:

```javascript
const tares = ["leer", "correr", "aprender Js"];
tareas = [...tareas, "ver Max steel"]
console.log(tareas); //=>["leer","correr", "aprender Js", "ver Max steel"]
```