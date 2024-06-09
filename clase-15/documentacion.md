### calciladora

## funcionalidades:

-login
    -solicitar un email
    -solicitar un password


-calcular operaciones
    -operaciones disponibles
    1) +
    2) -


-historial
    -agregarAlHistorial
    -mostrarHistorial/renderizarHistorial

## utilidades

- validaciones
    -numero
    -password
    -email
    -operacionesCalculadora

## reglas

los ejercicion se pueden resolver de muchas formas
si crees necesario usar funciones las podes usar
cumplir en la medida de lo posible con el principio DRY, KISS

## RECOMENDACIONES:

Una funcion la usamos para evitar re-escribir logica o separar logica

## login

debo tener una funcion llamada login que active toda la logica del login

logica del login:

vamos a solicitar al usuario un email
validaremos que el email sea un email
/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(stringAValidar)

vamos a solicitar al usuario una password
validar que tenga igual o mas de 6 carcteres,que tenga al menos 1 mayuscula y que no sea '' o null

si todo esta correcto dira por alerta('Usuario{email} registrado con exito') y retornara al usuario como objeto:

EJEMPLO:

login() // retorna el usuario {
    email: 'value@gmail.com',
    password: 'Pepe123'
}

## Calculadora de operaciones

Crear una funcion que se llame calculadora() que de inicio a la sig logica
-Operaciones disponibles:

    1) +
    2) -

Solicitar una operacion y verificar que la operacion sea valida (es valida si esta dentro de las operaciones disponibles)
Solicitar un numero 1 y validarlo
Solicitar un numero 2 y validarlo

Al finalizar las solicitudes mostrar el resultado por alerta de la sig manera:
'El resultado de {numero1} {operacion} {numero2} es {resultado}'






















