
/*

var apellido

console.log (apellido)
*/


/*
let nombre = 'pepe'

let edad
edad = 12

console.log(edad)

*/
/*
let nombre = 'manuel'

if(nombre === 'pepe'){
    console.log('te dejo pasar')
}
else{
    console.log('no te dejo pasar')
}

*/
/*
let email = prompt('ingrese su email')

if(email){
    console.log('correcto')
}
else{
    console.log('error')
}
*/
/*
Si su edad es mayor a 16 y su lenguaje favorito es 'js'
mostrar por consola 'Bienvenido al desarrollo web frontend'
mostrar por consola 'No se puede ser perfecto en todo'
*/
/*
let edad = prompt('ingrese su edad')
let lenguajeFavorito = prompt( 'ingrese su lenguaje favorito')
if (edad > 16 && lenguajeFavorito === 'js'){
    console.log('permitido')
}
else if(edad > 14 && lenguajeFavorito == 'PHP'){
    console.log('bienvenido')
}
else{
    console.log('acceso denegado')
}
*/
/*
1)
Escribe un programa que le pida al usuario que introduzca su edad mediante un prompt.
Luego, el programa debe determinar y mostrar en la consola en qué etapa de la vida 
se encuentra el usuario según su edad. Las etapas son las siguientes:
Si la edad es menor de 0, mostrar "Edad no válida."
Si la edad es menor de 13, mostrar "Eres un niño."
Si la edad es entre 13 y 17 inclusive, mostrar "Eres un adolescente."
Si la edad es entre 18 y 64 inclusive, mostrar "Eres un adulto."
Si la edad es 65 o mayor, mostrar "Eres una persona mayor."


let edad = prompt('Ingrese su edad')
if (edad <= 0){
    console.log('Edad no valida')
}
else if(edad < 13){
    console.log('Eres un niño')
}
else if(edad >= 13 && edad <= 17){
    console.log('Eres un adolescente')
}
else if(edad >= 18 && edad <= 64){
    console.log('Eres un adulto')
}
else if(edad >= 65){
    console.log('Eres una persona mayor')
}
*/


/*
2)
Crea un programa que le pida al usuario que introduzca una calificación numérica
(entre 0 y 100) mediante un prompt. El programa debe convertir la calificación a una letra según
la siguiente escala:
90 a 100: A
80 a 89: B
70 a 79: C
60 a 69: D
0 a 59: F
Si la calificación introducida está fuera del rango de 0 a 100, el programa debe mostrar
"Calificación no válida."


let numero = prompt('Ingrese un numero del 0 al 100')

if (numero >= 90 && numero <= 100){
    console.log('A')
}
else if(numero >= 80 && numero <= 89){
    console.log('B')
}
else if(numero >= 70 && numero <= 79){
    console.log('C')
}
else if(numero >= 60 && numero <= 69){
    console.log('D')
}
else if(numero >=0 && numero <= 59){
    console.log('F')
}

*/

/*
3)
Desarrolla un programa que le pida al usuario las longitudes de los tres lados
de un triángulo mediante tres prompts separados. El programa debe determinar y mostrar
en la consola el tipo de triángulo que se forma (equilátero, isósceles o escaleno) según
las longitudes de los lados introducidos:
Equilátero: todos los lados son iguales.
Isósceles: dos lados son iguales.
Escaleno: todos los lados son diferentes.
Si alguna de las longitudes introducidas es menor o igual a 0, el programa debe mostrar
"Longitudes no válidas."



let lado1 = prompt('Longitud lado 1')
let lado2 = prompt('Longitud lado 2')
let lado3 = prompt('Longitud lado 3')

if(lado1 <= 0 ||lado2 <= 0 || lado3 <= 0){
    console.log('Longitudes no validas')
}
else if (lado1 === lado2 && lado1 === lado3){
    console.log('Equilatero')
}
else if( lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
    console.log('Isosceles')
}
else{
    console.log('Escaleno')
}
*/

/*
4)
Escribe un programa que le pida al usuario que introduzca un número del 1 al 7 mediante un prompt.
El programa debe mostrar en la consola el día de la semana correspondiente al número introducido:
1: Lunes
2: Martes
3: Miércoles
4: Jueves
5: Viernes
6: Sábado
7: Domingo
Si el número introducido no está en el rango de 1 a 7, el programa debe mostrar "Número no válido."


let numero = prompt('Introduzca un numero del 1 al 7:')


if (numero < 1 || numero > 7) {
    console.log('Numero no valido.')
}
    else if(numero == 1) {
        console.log('Lunes')
    
    } else if (numero == 2) {
        console.log('Martes')
    
    } else if (numero == 3) {
        console.log('Miercoles')
    
    } else if (numero == 4) {
        console.log('Jueves')
    
    } else if (numero == 5) {
        console.log('Viernes')
    
    } else if (numero == 6) {
        console.log('Sabado')
    
    } else if (numero == 7) {
        console.log('Domingo')
    }

*/

/*
5)
Crea un programa que le pida al usuario que introduzca una temperatura en grados Celsius mediante
un prompt. El programa debe determinar y mostrar en la consola el estado del agua a esa temperatura:
Sólido: 0 grados Celsius o menos.
Líquido: entre 0 y 99 grados Celsius.
Gaseoso: 100 grados Celsius o más.
Si la temperatura introducida no es un número válido, el programa debe mostrar 
"Temperatura no válida."



let temperatura = prompt('Introduzca una temperatura en grados Celsius: ')

if (isNaN (temperatura)) {
    console.log('Temperatura no válida')
    } 
    else if (temperatura <= 0) {
        console.log('El estado del agua es Solido')
    }
    else if (temperatura > 0 && temperatura <= 99) {
        console.log('El estado del agua es Liquido')
    }
    else if (temperatura >= 100) {
        console.log('El estado del agua es Gaseoso')
    }

*/








