
/* WHILE ,
el bucle while repite un bloque de codigo mientras se cumpla x condicion

*/

/* VALIDAR UN NUMERO 

let numero = prompt('Ingrese un numero')

while(!numero || isNaN(numero)){
    alert('no ingresaste un numero')
    numero = prompt('Ingresa nuevamente un numero')
}
*/

/* 
Solicitar un string al usuario y validar que sea un string valido

let nombre = prompt('ingrese su nombre')

while(!nombre || !isNaN(nombre)){
    alert('error de dato')
    nombre = prompt ('ingrese su nombre nuevamente')
}
*/


//FOR

/* Es un bucle que usamos cuando queremos repetir un bloque
de codigo una determinada cantidad de veces
*/
/*
console.log('Hola mundo')


//      inicio       ;    limite   ;    ritmo de actualizacion
for(let iterador = 1; iterador <= 15; iterador = iterador + 1){
    console.log('hola mundo' + iterador)
}
*/





/*
//Solicitar 1 nombre y mostrarlo por alerta 3 veces




for(let iterador = 1; iterador <= 3; iterador = iterador + 1){
    let nombre = prompt('Ingrese un nombre:');
    alert(nombre)
}
*/

/*
let listaDeNumeros = 0
let sumaNumeros =''

for(let i = 1 ; i <= 3 ; i = i + 1) {
    let numero = Number(prompt("escribir un numero"))
    listaDeNumeros = listaDeNumeros + "\n" + numero
    sumaNumeros = sumaNumeros + numero

}
alert(listaDeNumeros)
alert(sumaNumeros)
*/


/* solicitar 3 nombres y al final mostrarlos en lista
Lista de nombres
-pepe
-juan
-ezequiel


let listaDeNombres ='Lista de nombres:'

for(let iterador = 1; iterador <= 3; iterador = iterador + 1){
    let nombre = prompt('Ingrese un nombre')
        listaDeNombres = listaDeNombres +'\n'+ nombre
}

alert(listaDeNombres)

*/

/*
Vamos a solicitar un numero 3 veces al finalizar mostrar el resultado de la sumatoria entre los numeros

EJ:
3
3
2
Resultado: 8


let listaDeNumeros = 'Lista de numeros'
let sumaNumeros = 0

for(let i = 1; i <= 3; i = i + 1){
    let numero = Number (prompt('Escribir un numero'))
    listaDeNumeros = listaDeNumeros + '\n' + numero
    sumaNumeros = sumaNumeros + numero
}

alert(listaDeNumeros)
alert(sumaNumeros)

*/


/*

vamos a solicitar al usuario una cantidad de repeticiones
vamos a solicitar un numero la cantidad de repeticiones ingresada por el usuario,al final mostrar
el resultado de la suma
validad que el numero ingresado sea un numero,en caso de no vollver a solicitarlo
validar que la cantidad de repeticiones ingresada sea un numero, en caso que no volver a solicitarlo


let cantidadDeRepeticiones = prompt("cuantos numeros sumamos?")
let suma = 0
while (!cantidadDeRepeticiones || isNaN(cantidadDeRepeticiones)) {
    alert("Dato no valido")
    cantidadDeRepeticiones = prompt("Ingrese un dato numerico")
}
for (let i = 1; i <= cantidadDeRepeticiones; i = i + 1) {
    numero = prompt("Ingrese un numero")
    while (!numero || isNaN(numero)) {
        alert("Dato no valido")
        numero = prompt("Ingrese un dato numerico")
    }
    suma = suma + Number(numero)
}
alert(" El resultado es: " + suma)
*/




// FUNCIONES

/*
//Declarar una funcion
function saludar(nombre){
    alert(' hola a ' + nombre)
}


//Invocar mi funcion

saludar('pedro')
saludar('juan')

*/


/*


//Crear una funcion llamada sumar,que reciba dos numeros y muestre por consola el resultado de
la suma de ambos numeros

function sumar(numero1, numero2){
    let suma = numero1 +numero2
    console.log(suma)
    
}

sumar(5,6)
*/


/*

Crear una funcion llamada calcularIva que reciba un precio y muestre el iva por consola de dicho precio

valor * 0.21

ej: calcularIva(100) => console: 21


function calcularIva(importe){
    console.log(importe*0.21)
}

calcularIva(250)

*/

/*
function calcularIva(importe){
    return importe * 0.21
}

let iva = calcularIva(100)

alert(iva)

*/

/*
vamos a solicitar al usuario una cantidad de repeticiones
vamos a solicitar un numero la cantidad de repeticiones ingresada por el usuario,al final mostrar
el resultado de la suma
validad que el numero ingresado sea un numero,en caso de no vollver a solicitarlo
validar que la cantidad de repeticiones ingresada sea un numero, en caso que no volver a solicitarlo
*/

function solicitarYValidarNumero (){
    let numero = prompt('ingrese un numero')
    while (!numero || isNaN(numero)) {
        alert ('El dato debe ser un numero')
        numero = prompt('Ingrese un numero')
    }
    return Number(numero)
}

let cantidadDeRepeticiones = solicitarYValidarNumero()
let suma = 0

for (let i = 1; i <= cantidadDeRepeticiones; i = i + 1) {
    let numero = solicitarYValidarNumero()
    suma = suma + numero
}
alert(" El resultado es: " + suma)










