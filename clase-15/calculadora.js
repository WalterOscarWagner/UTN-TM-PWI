/*
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
*/


/*
const tieneMayuscula = (palabra) => palabra.toLowerCase() !== palabra
const validacionEmail = (email) =>{
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}
const validacionPassword = (password) =>{
    return password && password.length >= 6 && tieneMayuscula(password)
}


const login = () => {
    const usuario = {
        email: null,
        password: null
    }

    let email = prompt('ingrese un email')
    while(!validacionEmail(email)){
        email = prompt('error email invalido')
    }
    usuario.email = email

    let password = prompt('ingrese el password')
    while(!validacionPassword(password)){
        password = prompt('error password invalido')
    }
    usuario.password = password

    alert(`Usuario ${usuario.email} registrado`)

    return usuario
}
*/
/*
console.log(login())
*/

/*
## Calculadora de operaciones

-Operaciones disponibles:
    1) +
    2) -

Solicitar una operacion y verificar que la operacion sea valida
(es valida si esta dentro de las operaciones disponibles)
Solicitar un numero 1 y validarlo
Solicitar un numero 2 y validarlo

Al finalizar las solicitudes mostrar el resultado por alerta de la
sig manera: ' El resultado de {numero1} {operacion} {numero2} es {resultado}'

*/


const validacionOperacion = (operacion) =>{
    const OPERACIONES_DISPONIBLES = ['+', '-']
    for(let operacionDisponible of OPERACIONES_DISPONIBLES){
        if(operacionDisponible == operacion){
            return true
        }
    }
    return false
}


const validacionNumero = (numero) =>{
    return numero && !isNaN(numero)
}


const calculadora = () =>{
    let operacion = prompt('Ingrese una operacion')
    while(!validacionOperacion(operacion)){
        operacion = prompt('Error operacion no disponible,seleccione una operacion')
    }

    let a =prompt('Ingrese un primer numero')
    while(!validacionNumero(a)){
        a = prompt('Error numero no valido, ingrese nuevamente')
    }

    let b = prompt('Ingrese un numero')
    while(!validacionNumero(b)){
        b = prompt('Error numero no valido, ingrese nuevamente')
    }

    let resultado = 0

    if(operacion === '+'){
        resultado = Number(a)+ Number(b)
    }
    else if(operacion === '-'){
        resultado = Number(a) - Number(b)
    }

    alert(`El resultado de ${a} ${operacion} ${b} es ${resultado}`)
}


calculadora()



















