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

condicion = no,bre || email

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
'NaN' && 0


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


let edad = prompt('ingresa la edad')
let lenguaje_fav = prompt('ingrese su lenguaje favorito')

if(edad > 16 && lenguaje_fav === 'js')
    {
        console.log('bienvenido')
    }
else if(edad > 14 && lenguaje_fav == 'PHP')
    {console.log( 'Bienvenido a frontend')}

else{
    console.log('no se puede')

}