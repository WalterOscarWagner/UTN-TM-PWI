/* 
JS es un lenguaje interpretado po v8engine 
Js es un lenguaje case sensitive
*/

/*alert('hola mundo')*/


// Tipos de datos:

/*
PRIMITIVOS:
string => para representar texto
"hola",'pepe', "hola mundo",'3', ´1´

boolem => para representar estados booleano
true false

number => para representar datos numericos
1 -1 1.1 NaN Infinity

null => para representar nulidad
null

undefined => para representar el estado indefinido
undefined
*/

/*
Constructores
Number() => transformar un dato a numero
String() => transformar un dato a string
Boolean() => transformar un dato a boolean
*/




//Operadores aritmeticos:


/*
Devuelven STRING
+ => concatenacion (ocurre cuando HAY uno o mas datos string)

Devuelven NUMEROS
+ => suma
- => resta
* => multiplicacion
/ => division
% => resto de la division
*/


/*
1 + true
subproceso: 1 + Number(true)
subproceso: 1 + 1 = 2

true + true
Number(true) + Number(true)
1 + 1 = 2
*/

/*
1 + '1'
String(1) + '1'
'1' + '1' = '11'

null + 'juan' = 'nulljuan'

5 + true = 6

null + underfined =
Number(null) + Number(undefined)
0 + NaN = NaN
/*


'700000' + 10000
'70000010000'

Number('700000') + 10000 =
/* OJO /*

'700000' - 10000 = 690000


9 + 0 number = 9

0 + false = number 0

false * null = number 0

'' + 0 = string '0'

'pepe' * 3 = NaN

undefined - null + 'pepe' = string
(undefined - null) + 'pepe'
NaN + 'pepe'= 'NaNpepe'
*/



//Comparadores SIEMPRE devuelven BOOLEAN


/*
Excepciones:
null solo es igual a null o undefined
NaN no es igual a NINGUN otro dato, en caso de querer
comparar con NaN debemos usar  isNaN()

== igualdad
=== igualdad de valor y tipo de dato (estricta igualdad)
!= diferencia
!== estricta diferencia
< mayor...dentro de la llave
> menor...fuera de la llave
<=
>=
*/

/*
Valores thurty y falsy:
Para saber si un valor es thurty o falsy debemos pasarlo a boolean
Bolean(valor a verificar) // true o false

Falsy:  --valores falsos--
''
0
-0
false
undefined
null

*/

/*
8 == NaN                      false
5 == '5'                      true
1 === Boolean('1')            false
3 + '' === '3'





*/
