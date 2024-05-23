/* WHILE ,
el bucle while repite un bloque de codigo mientras se cumpla x condicion


*/


/*

let nombre = prompt('ingrese su nombre')


while(!nombre || !isNaN(nombre)){
    alert('error de dato')
    nombre = prompt ('ingrese su nombre')
}
*/


//FOR
/* Es un bucle que usamos cuando queremos repetir un bloque
de codigo una determinada cantidad de veces




*/
/*

for(let iterador = 1; iterador <= 5; iterador = iterador + 1){
    console.log('hola mundo' + iterador)
}
*/





/*
//Solicitar 1 nombre y mostrarlo por alerta 3 veces




for(let i = 1; i <= 3; i = i +1){
    let nombre = prompt('Ingrese un nombre:')
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


/*

vamos a solicitar al usuario una cantidad de repeticiones
vamos a solicitar un numero la cantidad de repeticiones ingresada por el usuario,al final mostrar el resultado de la suma
validad que el numero ingresado sea un numero,en caso de no vollver a solicitarlo
validar que la cantidad de repeticiones ingresada sea un numero, en caso que no volver a solicitarlo


let cantidadDeRepeticiones = prompt("cuantos numeros sumamos?")
let suma = 0
while (!cantidadDeRepeticiones || isNaN(cantidadDeRepeticiones)) {
    alert("Dato no valido")
    cantidadDeRepeticiones = prompt("Ingrese un dato numerico")
}
for (let iteracion = 1; iteracion <= cantidadDeRepeticiones; iteracion = iteracion + 1) {
    numero = prompt("Ingrese un numero")
    while (!numero || isNaN(numero)) {
        alert("Dato no valido")
        numero = prompt("Ingrese un dato numerico")
    }
    suma = suma + Number(numero)
}
alert("El resultado es" + suma)
*/

/*
// FUNCIONES

//Declarar una funcion
function saludar(nombre){
    alert('hola a' + nombre)
}


//Invocar mi funcion
saludar('pepe')
saludar('juan')

*/


/*


//Crear una funcion llamada sumar,que reciba dos numeros y muestre por consola el resultado de la suma

function sumar(numero1, numero2){
    let suma = numero1 +numero2
    console.log(suma)
    
}

sumar(5,6)

*/
/*

Crear una funcion llamada calcularIva que reciba un precio y muestr el iva por consola de dicho precio

valor * 0.21

ej: calcularIva(100) => console: 21

function calcularIva(importe){
    console.log(importe*0.21)
}

calcularIva(100)

*/

/*
function calcularIva(importe){
    return importe * 0.21
}

let iva = calcularIva(100)

alert(iva)
console.log(iva)

*/












