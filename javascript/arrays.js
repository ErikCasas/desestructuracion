
//PARA VER LOS CONSOLE.LOG, ABREN LA TERMINAL DE VSCODE ctrl+ñ Y
//ESCRIBEN "node arrays.js" 
//RECUERDEN DESCOMENTAR CADA CONSOLE.LOG A LO LARGO DEL ARCHIVO
//Y DE IGUAL MANERA VOLVERLOS A COMENTAR PARA QUE NO LES APAREZCAN TODOS 
//LOS CONSOLE.LOG JUNTOS Y SE VUELVA CONFUSO ;)

const unaFuncion = () => {
  console.log("Esto es solo una función");
};

/*
La desestructuración en Arrays, quiere decir que solo vamos a desempaquetar ciertos 
valores de un array y guardar esos valores en variables independientes
*/

//un array con distintos tipos de datos
const names = ["Erik" , "Daniela" , unaFuncion, { edad: 21 }];
//            [   0   ,    1      ,      2    ,       3     ]

/*
recordemos que la forma comúm de acceder a un valor dentro de un array, 
es con la sintaxis de los corchetes "[]" indicando el array y la posición en
la que está aquel valor de nuestro interes, guardandolo en una variable
*/

const valor = names[2];

// console.log("el valor extraido es :>> ", valor);

//-----------------------------------------------------------------------


/*
Teniendo en cuenta que para acceder a un valor dentro de un array solo necesitamos 
saber la posición y de que array va a venir ese valor, podemos renombrar esos 
valores y guardarlos en variables independientes, para asi reusar las veces que 
sea necesario, justo como el useState, en donde podemos tener varios useState en 
un solo archivo, pero no nos pone problemas ya que son variables independientes
*/

/* 
  aquellos valores que estan en las primeras posiciones del array
  y como vamos a guardarlos en sus propias variables independientes
 ╚═════════════╦═══════════════════════════════════════════════════╝
               ║
      ╔════════╩═══════╗ 
const [primero, segundo] = names;
                          ╚══╦══╝
                      ╔══════╩═══════╗
                      de donde vendran

*/
const [primero, segundo] = names;

// console.log("primero, segundo :>> ", primero, segundo);

//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------


/* 

                               _                              _                     
                              | |                            | |                    
  ___ _ __  _ __ ___  __ _  __| |   ___  _ __   ___ _ __ __ _| |_ ___  _ __         
 / __| '_ \| '__/ _ \/ _` |/ _` |  / _ \| '_ \ / _ \ '__/ _` | __/ _ \| '__|        
 \__ \ |_) | | |  __/ (_| | (_| | | (_) | |_) |  __/ | | (_| | || (_) | |_    _ _ _ 
 |___/ .__/|_|  \___|\__,_|\__,_|  \___/| .__/ \___|_|  \__,_|\__\___/|_(_)  (_|_|_)
     | |                                | |                                         
     |_|                                |_|                                         



  el spread operator en palabras cristianas lo que puede realizar es desarmar un 
  iterable como un array, ejemplo:
*/

const numeros = [1,2,3,4,5,6,7,8,9,0]

// console.log(numeros)//imprime por consola el array

// console.log(...numeros)//imprime los números 


/* 
En react es usado comunmente cuando necesitamos actualizar el estado con un nuevo
valor, pero sin perder los valores previos, entonces le decimos que actualice 
el estado actual, con todo lo anterior, mas una tarea nueav

const [todos, setTodos] = useState()

setTodos([...todos, nuevaTarea])

*/

const todos = ['practicar', 'entrenar', 'leer', 'ver Barbie']

//le decimos que actualice el estado con sus valores previos, más el que estamos agregando
const setTodos = [...todos, 'ver Max steel']

// console.log(setTodos)


/*
 Existen mas formas de manipular un array con la desestructuración como el ejemplo
 siguiente, pero solo les dejo en este archivo, las formas mas comunes en las que 
 podran e incluso deberan usar la desestructuración, para asi mejorar sus buenas 
 practicas y el código sea mas legible 

*/

const masNumeros = [1,2,3,4,5]
const [a,b,...c] = masNumeros

// console.log(a) // 1
// console.log(b) // 2
// console.log(c) // el resto del array