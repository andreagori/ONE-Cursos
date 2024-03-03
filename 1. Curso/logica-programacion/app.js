/* 1. CURSO DE LOGICA DE PROGRAMACION
// VARIABLES
// let: se puede reasignar el valor de la variable. es un tipo de variable.
let numSecreto = 6;
let numUsuario = prompt("ESCRIBE UN NUMERO: "); // para ingresar datos en pantalla. tambien como alerta.
// CONSOLE LOG USO, F12.
// En los tres puntos de la pagina de google, en la consola, se puede ver el valor de la variable. En la parte de consola.
console.log(numUsuario); // para mostrar en consola. Se pone la variable.

if (numUsuario == numSecreto) {
    alert('Adivinaste el numero secreto');
}
// alert('HOLA MUNDO'); // alerta en pantalla, asi como notificaciones.

DESAFIO 1
alert('Bienvenido a nuestro sitio web');
let nombre = "Luna";
let edad = 25;
let numVentas = 50;
let saldoCuenta = 1000;
alert('ERROR. Completa todos los campos');
let mensajError = prompt('ERROR. Completa todos los campos');
alert(mensajError);
let Nombre = prompt('Ingrese su nombre');
let Edad = prompt('Ingrese su edad');
if (Edad >= 18) {
    alert('Puedes obtener tu licencia');
}
*/

/* 2. CURSO DE LOGICA DE PROGRAMACION
Uso de comentarios y ademas, se uso el else, codigo arriba.
Para agregar variables en medio de un string, se utiliza en lugar de las comillas, las comillas invertidas.
CON COMILLAS NORMALES SIN VARIABLE:
alert('Adivinaste el numero");
CON COMILLAS INVERTIDAS CON VARIABLE:
alert(`ADIVINASTE EL NUMERO, EL NUMERO SECRETO ERA: ${numSecreto}`);
OTRA FORMA DE HACERLO:
alert('El número secreto era ' + numSecreto + ', pero elegiste ' + numUsuario);


let numSecreto = 6;
let numUsuario = 0;
    numUsuario = prompt("ESCRIBE UN NUMERO ENTRE EL 1-10: "); // para ingresar datos en pantalla. tambien como alerta.
    // CONSOLE LOG USO, F12.
    // En los tres puntos de la pagina de google, en la consola, se puede ver el valor de la variable. En la parte de consola.
    console.log(numUsuario); // para mostrar en consola. Se pone la variable.

    if (numUsuario == numSecreto) {
        alert(`ADIVINASTE EL NUMERO, EL NUMERO SECRETO ERA: ${numSecreto}`);
    } else {
        if (numUsuario > numSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        //alert('No adivinaste el numero secreto');
    }

DESAFIO 2
Desafíos:

Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".
Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.

3. CURSO DE LOGICA DE PROGRAMACION
Enseñanza de while, para repetir codigo.
MI SOLUCION, FUNCIONA, PERO USE MAS CODIGO.
let numSecreto = 6;
let numUsuario = 0;
let intentos = 1;
while (numUsuario != numSecreto) {
    numUsuario = prompt("ESCRIBE UN NUMERO ENTRE EL 1-10: "); // para ingresar datos en pantalla. tambien como alerta.
    // CONSOLE LOG USO, F12.
    // En los tres puntos de la pagina de google, en la consola, se puede ver el valor de la variable. En la parte de consola.
    console.log(numUsuario); // para mostrar en consola. Se pone la variable.

    if (numUsuario == numSecreto) {
        // alert(`ADIVINASTE EL NUMERO, EL NUMERO SECRETO ERA: ${numSecreto}`);
        if (intentos > 1) {
            alert(`ADIVINASTE EL NUMERO, EL NUMERO SECRETO ERA: ${numSecreto} Y LO HICISTE EN ${intentos} INTENTOS`);
        }
        else {
            alert(`ADIVINASTE EL NUMERO, EL NUMERO SECRETO ERA: ${numSecreto} Y LO HICISTE EN ${intentos} INTENTO`);
        }
    } else {
        if (numUsuario > numSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        intentos = intentos + 1;
        console.log(intentos);
        //alert('No adivinaste el numero secreto');
    }
}

DESAFIO 3
Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

DESAFIO 4
Desafíos finales:
Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.

DESAFIO FINAL
El desafío que nos gustaría proponer es: ¿qué cambios serían necesarios para que no sea entre 1 y 10? 
Imaginen que quieran jugar entre 1 y 100, o que el usuario quiera jugar entre 1 y 1000. 
¿Qué cambios serían necesarios para que esta funcionalidad pueda ser implementada, pueda ser aplicada?
*/

let maxNum = 10;
let numSecreto = Math.floor(Math.random() * maxNum) + 1; //Math.floor lo que hace es que redonde el num, aleatorio hacia abajo, y el Math.random genera numeros aleatorios hasta el 10 con decimales, el 1 lo agregamos para que tambien inicie del 1 y se incluya el 10.
let numUsuario = 0;
let intentos = 1;
//USAREMMOS OPERADOR TERNARIO9
// let palabraIntento = 'INTENTO';
let maxIntentos = 3;
console.log(numSecreto);
while (numUsuario != numSecreto) {
    //EL NUM DE USUARIO SE GUARDA COMO STRING, PERO CAMBIAREMOS ESO CON PARSEINT.
    numUsuario = parseInt(prompt(`ESCRIBE UN NUMERO DEL 1-${maxNum}`)); // para ingresar datos en pantalla. tambien como alerta.
    // CONSOLE LOG USO, F12.
    // En los tres puntos de la pagina de google, en la consola, se puede ver el valor de la variable. En la parte de consola.
    console.log(numUsuario); // para mostrar en consola. Se pone la variable.

    if (numUsuario == numSecreto) {
        // alert(`ADIVINASTE EL NUMERO, EL NUMERO SECRETO ERA: ${numSecreto}`); EL SIGNO DE INTERROGACION ES EL IF Y LOS DOS PUNTOS ES EL ELSE
        alert(`ADIVINASTE EL NUMERO, EL NUMERO SECRETO ERA: ${numSecreto} Y LO HICISTE EN ${intentos} ${intentos == 1 ? 'INTENTO' : 'INTENTOS'}`);
    } else {
        if (numUsuario > numSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        intentos++;
        // palabraIntento = 'INTENTOS';
        console.log(intentos);
        if (intentos > maxIntentos) {
            alert(`PERDISTE, LLEGASTE AL MAXIMO DE INTENTOS QUE ES ${maxIntentos}`);
            break;
        }
        //alert('No adivinaste el numero secreto');
    }
}

