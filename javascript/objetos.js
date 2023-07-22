//PARA VER LOS CONSOLE.LOG, ABREN LA TERMINAL DE VSCODE ctrl+ñ Y
//ESCRIBEN "node objetos.js"
//RECUERDEN DESCOMENTAR CADA CONSOLE.LOG A LO LARGO DEL ARCHIVO
//Y DE IGUAL MANERA VOLVERLOS A COMENTAR PARA QUE NO LES APAREZCAN TODOS
//LOS CONSOLE.LOG JUNTOS Y SE VUELVA CONFUSO ;)

/* 
La desestructuación en objetos quiere decir que solo vamos a requerir algunos 
valores de un objeto en especifico
*/

/*
recordemos que para acceder a un valor en especifico de un objeto, se suele 
utilizar la notación del punto "." e indicando el "nombre" de aquel valor en 
especifico 
*/
const user = {
  name: "Erik",
  rol: "mentor",
  canciónFav: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  funcion: () => {
    console.log("Esto es solo una función");
  },
};

const valorQueNecesito = user.name;

// console.log(valorQueNecesito) //"Erik"

/* 
Teniendo en cuenta que para acceder a los valores de un objeto, aquello que nos
interesa es el nombre, y de donde vendra podemos simplemente decir que valores
requerimos que desmpaquete del objeto para asi tenerlos en sus propias variables
y usar con mas facilidad 
*/

/* 
  el nombre de aquellos valores que son de mi interes extraer
  fijemonos en que no importa el orden en que los extraiga
 ╚═════════════╦═════════════════════════════════════════════╝
               ║
      ╔════════╩════╗ 
      const { rol, funcion } = user 
                        ╚══╦══╝
                        ╔══════╩═══════╗
                        de donde vendran
                        
*/

const { rol, funcion } = user 


// console.log(rol); //"mentor"


// en react otra de las formas mas comunes en las que solemos desestrcturar un
//objeto, es al momento de recibir props en nuestros componentes funcionales


/*
sin desestructuración

const Componente = (props) => {
    return <div>{props.name}</div>;
};
-----------------------------------------------
con desestructuración

const ComponenteName = ({ name }) => {
    return <div>{name}</div>;
};
*/

/*
Si bien existen muchos mas metodos y formas en las que manipular un objeto junto con 
la desestructuración, tan solo les dejo los ejemplos mas basicos, tener en cuenta
que incluso podemos usar el spread operator con objetos (...obj), pero recalco
que tan solo les dejo los ejemplo mas basicos y usados para que mejoren la legibilidad 
de sus códigos ;)
*/
