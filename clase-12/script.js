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
let listaDeNumeros = 0
let sumaNumeros =''

for(let i = 1 ; i <= 3 ; i = i + 1) {
    let numero = Number(prompt("escribir un numero"))
    listaDeNumeros = listaDeNumeros + "\n" + numero
    sumaNumeros = sumaNumeros + numero

}
alert(listaDeNumeros)
alert(sumaNumeros)



