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


let resultado = '' || 0
console.log(resultado)


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
*/


