/* Operadores logicos */

/*
! NOT => negacion (devuelve el valor opuesto booleano del dato)

|| OR => o logico

&& AND => y logico
*/

/*
falsy:
false
0
''
-0
null
NaN
undefined
*/
let resultado = '' || 'pepe'
console.log(resultado)

/*
!(0 * null) //true

!('' - 1) //false

!NaN //TRUE
*/

/*
quiero dejar pasar a alguien que tenga mas de 18 años o tenga mas de 100000

edad = 28
dinero = 100

condicion = edad > 18 || dinero > 100000

condicion = true || false

condicion = true


edad = 10
dinero = 1000000

condicion = edad > 18 || dinero > 100000

condicion = false || true

condicion = true



edad = 10
dinero = 10

condicion = edad > 18 || dinero > 100000

condicion = false || false

condicion = false (es el segundo false)


si el usuario tiene nombre o email lo registro

nombre = 'pepe'
email = ''

condicion = nombre || email

condicion = 'pepe'

nombre = ''

email = 'pepe@gmail.com'

condicion = nombre || email

condicion = 'pepe@gmail.com'


nombre = ''
email = ''

condicion = nombre || email

condicion = ''


nombre_usuario = solicitarnombre() || 'unknown'

*/


/*
si dejo pasar el usuario si tiene mas de 18 y mas de 6000

edad = 70
dinero = 90000

condicion = edad >= 18 && dinero > 6000

                true && true

                true

edad = 10
dinero = 90000

condicion = edad >= 18 && dinero > 6000

condicion = false


edad = 60
dinero = 900

condicion = edad > 18 && dinero > 6000

condicion = dinero > 6000
condicion = false


*/

/*

!(NaN == NaN) || 'pepe' = true

'pepe' * 1 +'' && 0
NaN + '' && 0
'NaN' && 0 = 0


*/
/*

9 * '9' * null || 'pepe' && 'juan'

81 * null || 'pepe' && 'juan'

0 || 'pepe' 66 'juan'



*/


/*

Variables
<tipo variable> identificador = dato

*/

// VAR

// El valor por defecto implicito es undefined
//Tiene hoisting

//Declaracion

//Inicializar la variable(implicito)


//Inicializar la variable (explicito)


 //Re asignacion


/*
alert (nombre)
*/



/*
let edad

let nombre = 'pepe'


nombre = 'juan'

console.log(nombre)
*/

//CONST
/*
const nombre = 'pepe'

console.log(nombre)

*/

/*
Scope y block   (bloques y alcance)
*/
/*

// crear un bloque de codigo
{
    var nombre = 'pepe'
    console.log(nombre)
}
*/

/* Solicitar al usuario una edad y un lenguaje favorito

Si su edad es mayor a 16 y su lenguaje favorito es 'js'
mostrar por consola 'Bienvenido al desarrollo web frontend'
mostrar por consola 'No se puede ser perfecto en todo'
*/
/*
let edad = prompt('ingresa la edad')
let lenguaje_fav = prompt('ingrese su lenguaje favorito')

if(edad > 16 && lenguaje_fav === 'js')
    {
        console.log('bienvenido')
    }
else if(edad > 14 && lenguaje_fav === 'PHP')
    {console.log( 'Bienvenido a frontend')}

else{
    console.log('no se puede')

}

*/

/*
let email = prompt('ingrese su email')
console.log(email)
if(email){
    console.log('correcto')
}
else{
    console.log('error')
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

if(edad <= 0){
    console.log ('Edad no valida')
}
else if(edad < 13){
    console.log ('Eres un niño')
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


let calificacion = prompt ('Introduzca una calificacion')

if(calificacion >= 90 && calificacion <= 100){
    console.log('A')
}
else if (calificacion >= 80 && calificacion < 90){
    console.log('B')
}
else if (calificacion >= 70 && calificacion < 80){
    console.log('C')
}
else if (calificacion >= 60 && calificacion < 70){
    console.log('D')
}
else if (calificacion >= 0 && calificacion < 60){
    console.log('F')
}
else{
    console.log('Calificacion no valida')
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



let lado1 = prompt("Ingrese un lado del triangulo")
let lado2 = prompt("Ingrese un segundo lado del triangulo")
let lado3 = prompt("Ingrese un tercer lado del triangulo")

if(lado1 <= 0 || lado2 <= 0 || lado3 <= 0){
    console.log('longitudes no validas')
}
else if (lado1 == lado2 && lado1 == lado3){
    console.log ("Equilatero")
} else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
    console.log ("Isoceles")
} else {
    console.log ("Escaleno")
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

if (isNaN(temperatura)) {
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































