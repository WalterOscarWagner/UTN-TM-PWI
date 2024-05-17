/* Operadores logicos */

/*
! NOT => negacion ( devuelve el valor opuesto
    booleano del dato)

|| OR => o logico
    Si el primer valor es un truly devuelve
    el primer valor.Sino devuelve el segundo valor

&& AND => y logico
    si el primer valor es un truly devuelve el
    segundo valor.Sino devuelve el primero


*/


console.log( !'' )

/*
falsy
false
0
''
-0
null
NaN
undefined
*/

/*
! (0 * null) // true

! ('' - 1) //false

!NaN // true

*/
let resultado = '' || 0
console.log(resultado)


/*
Variables

Sintaxis

<tipo_variable> identificador = dato
*/ 


//VAR
    //El valor por defecto es undefined
    //tiene hoisting

    //Declaracion
    //inicializar la variable (implicito)
var edad

    //inicializar la variable(explicito)
var nombre = 'pepe'

    //Reasignacion
edad = 90

console.log(apellido)

console.log(edad)


/* VAR

Tiene hoisting ? SI
Tiene valor implicito en undefined ? SI
Se puede reasignar ? SI
Se puede redeclarar ? SI
*/


//LET

//Declarando e inicializando mi variable de manera implicita
let edad


//Declarando e inicilalizando mi variable de manera explicita
let nombre = 'pepe'


console.log(edad)