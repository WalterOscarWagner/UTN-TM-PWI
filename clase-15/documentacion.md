### calculadora

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

Solicitar una operacion y verificar que la operacion sea valida (es valida si esta dentro de las 
operaciones disponibles)
Solicitar un numero 1 y validarlo
Solicitar un numero 2 y validarlo

Al finalizar las solicitudes mostrar el resultado por alerta de la sig manera:
'El resultado de {numero1} {operacion} {numero2} es {resultado}'



## Historial

-agregarAlHistorial
-mostrarHistorial/renderizarHistorial


ESTO NO ES FUNCION: Van a intentar obtener el historial del localStorage si nos devuelve null el getItem 
deberemos guardar un array vacio en el localStorage

Vamos a crear una funcion llamada obtener historial que nos devuelva el array historial
Vamos a crear en nuestro programa la funcion guardarEnHistorial que reciba un objeto y
lo guarde en el localStorage dentro del array historial

EJEMPLO DE USO: 

obtenerHistorial() => retornara un array historial [{},{}]
guardarEnHistorial(objeto) => agrega al array guardado en localStorage el objeto recibido

Cada elemento del historial tendra el sig formato
{
    accion: 'calculadora',
    operacion: '+' || '-'
    a: number,
    b: number,
    resultado: number
    fecha: dd/mm/aaaa || '18/01/2020'
}

Esto significa que cuando usemos guardarEnHistorial debemos guardar el objeto de esa manera


Vamos a crear una funcion llamada renderizarHistorial

va a llamar al historial guardado y por cada elemento del historial vamos a crear la sig plantilla
y la acumularan en un string y al finalizar el recorrido

`
Accion: {accion}
Operacion: {operacion}
Numeros: {a},{b}
Resultado: {resultado}
fecha: {fecha}

`














