/* Se agrega el script para linkear lo de javascript con el html
    <script src="app.js" defer></script>
    12/02/2024
*/
// El document es el objeto que representa el HTML. enlaza el html con el js. Document Object Model (DOM).
// let titulo = document.querySelector('h1'); // Selecciona un elemento del DOM. 
// // CREO EL TITULO EN LA PAGINA DE HTML.
// titulo.innerHTML = 'JUEGO: Numero Secreto'; // Cambia el contenido del titulo en lo que decida, con el innertHTML.

// dos formas de hacerlo: 1. declararla y segunda, directamente en la funcion, creando una funcion general.

// let subtitulo = document.querySelector('p');
// subtitulo.innerHTML = 'Escoge un numero del 1 al 10';

// 1.2 REALIZAR UNA FUNCION PARA INTERACTUAR CON EL BOTON Y LLAMARLA EN HTML
/*
codigo modificado de html:
<button onclick="intentoUsuario();" class="container__boton">Intentar</button>
se agrego el onclick para llamar la funcion intentoUsuario.
*/

// 2.2 FUNCIONES, CAMBIAR LAS DECLARACIONES DE LAS VARIABLES POR UNA FUNCION GENERAL

let numSecreto;
let contadorIntentos;
let maxNum = 10;
// CREANDO UNA LISTA CON LOS NUMEROS YA USADOS (sorteados?)
let listaNumSorteados = [];

function asignarTextoElemento(dato, texto) {
    let datoHTML = document.querySelector(dato);
    datoHTML.innerHTML = texto;
    return;
}

function verificarIntentos() {
    // let numUsuario = document.querySelector('input');
    // CUANDO USARAS CON ID, SE PUEDE USAR OTRA FUNCION
    // let numUsuario = document.getElementById('valorUsuario').value;  ESTO ES STRING, CAMBIAR A NUMERO.
    let numUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof numUsuario); // para saber el tipo de dato que es.
    console.log(numSecreto);
    // console.log(numUsuario);
    console.log(contadorIntentos);
    // console.log(numSecreto === numUsuario); // true o false, REGRESA VALOR BOOLEANO.
    if (numUsuario === numSecreto) {
        asignarTextoElemento('p', `HAZ ADIVINADO EL NUMERO SECRETO EN ${contadorIntentos} ${(contadorIntentos === 1) ? 'INTENTO' : "INTENTOS"}!`);
        document.getElementById('reiniciar').removeAttribute('disabled', 'true');
    } else {
        //aqui ira algo para borrar el campo de input.
        if (numUsuario > numSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        contadorIntentos++;
        limpiarInput();
    }
    return;
}

function limpiarInput() {
    let valorInput = document.querySelector('#valorUsuario');
    valorInput.value = '';
    // tambien puede ser asi: let valorInput = document.querySelector('#valorUsuario').valorInput.value = '';
}

// 2.3 Buena practica agregar el return en cada funcion aunque no retorne nada.
// function genNumSecreto(maxNum, minNum) {
//     let numSecreto = Math.floor(Math.random() * maxNum) + minNum;
//     return numSecreto;
//     console.log(numSecreto);
// }

function genNumSecreto(maxNum, minNum) {
    // Si uso lo de recursividad deja de funcionar, sera por el parametro?.
    let numGen = Math.floor(Math.random() * maxNum) + minNum;
    // si el num generado esta incluido en la lista hacemos una operacion.
    // el includes verifica si algo en nuestra lista ya existe y como booleano nos regresa true or false.
    // lo que hara la lista es asegurarse que no se repitan los numeros.
    console.log(listaNumSorteados);
    // crear condicion para que cuando ya esten todos los numeros puestos, la recursividad no crashee el programa.
    if (listaNumSorteados.length == maxNum) {
        asignarTextoElemento('p', 'YA SE ASIGNARION TODOS LOS NUMEROS POSIBLES!');
        document.getElementById('reiniciar').setAttribute('disabled', true); // Deshabilita el botón de intentar
    } else {

        if (listaNumSorteados.includes(numGen)) {
            // aplicaremos recursividad, llamando a la funcion a si misma.
            return genNumSecreto(maxNum, minNum);
        } else {
            listaNumSorteados.push(numGen);
            return numGen;
        }
    }
}

function mensajes() {
    asignarTextoElemento('h1', 'JUEGO: Numero Secreto');
    asignarTextoElemento('p', `Escoge un numero del 1 al ${maxNum}!`);
    numSecreto = genNumSecreto(10, 1);
    contadorIntentos = 1;
}

function reiniciar() {
    limpiarInput();
    mensajes();

}

mensajes();

// 2.4 DEFINIR INPUT Y AGREGAR ATRIBUTOS EN EL HTML DE ESTA ETIQUETA. id nuevo.
// <input type="number" id="" min="1" max="10" class="container__input">

// DESAFIO 2.
/*
Crear una función que muestre "¡Hola, mundo!" en la consola.
Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
Crear una función que reciba tres números como parámetros y devuelva su promedio.
Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
*/

// Eliminar elemento de un arreglo: frutas.pop(); console.log(frutas);
/*
Desafíos
Crea una lista vacía llamada "listaGenerica".
Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
Crea una función que calcule el promedio de los elementos en una lista de números.
Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
Crea una función que devuelva la suma de todos los elementos en una lista.
Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
*/