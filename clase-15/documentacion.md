
### Calculadora

## Funcionalidades:

-Login
-Calcular Operaciones
    -Operaciones Disponibles:
    1) +
    2) 
-Historial
    -agregarAlHistorial
    -mostrarHistorial/renderizarHistorial

## Utilidades:

-Validaciones
    -numero
    -password
    -email
    -operacionesCalculadora

## Reglas

Los ejercicios se pueden resolver de muchas formas
Si crees necesario usar funciones, las podes usar
Cumplir en la medida de lo posible con el principio: DRY, KISS

## RECOMENDACIONES:

## login

Debo tener una funcion llamada login que active toda la logica del login

logica del login:

Vamos a solicitar al usuario un email
Validaremos que el email sea un email
/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(stringAValidar)

Ejemplo de uso
/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test('pepe@gmail.com)


Vamos a solicitar al usuario una password
validar que tenga mas de 6 caracteres, que tenga al menos 1 mayuscula y que no sea '' o null

Si todo esta correcto dira por alerta('usuario{email}registrado con exito) y retornara al usuario como objeto:

EJEMPLO:

login()  //retorna el usuario {
    email: 'value@gmail.com' ,
    password: 'Pepe123'
}




## Calculadora de operaciones

-Operaciones disponibles:
    1) +
    2) -

Solicitar una operacion y verificar que la operacion sea valida (es valida si esta dentro de las operaciones disponibles)
Solicitar un numero 1 y validarlo
Solicitar un numero 2 y validarlo

Al finalizar las solicitudes mostrar el resultado por alerta de la sig manera: ' Elresultado de {numero1} {operacion} {numero2} es {resultado}'






















