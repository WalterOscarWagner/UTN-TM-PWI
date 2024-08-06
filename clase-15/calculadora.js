/*
## login

debo tener una funcion llamada login que active toda la logica del login

logica del login:

vamos a solicitar al usuario un email
validaremos que el email sea un email
/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(strigAValidar)

Ejemplo de uso
/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test('pepe@gmail.com)

vamos a solicitar al usuario una password
validar que tenga igual o mas de 6 carcteres,que tenga al menos 1 mayuscula y que no sea '' o null

si todo esta correcto dira por alerta('Usuario{email} registrado con exito') y retornara al usuario como objeto:

EJEMPLO:

login() // retorna el usuario {
    email: 'value@gmail.com',
    password: 'Pepe123'
}
*/
/*
const tieneMayuscula = (palabra) => palabra.toLowerCase() !== palabra

const validacionEmail = (email) => {
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

    let email = prompt('Ingrese un email')
    while(!validacionEmail(email)){
        email = prompt('Error email invalido: ingrese nuevamente el email')
    }
    usuario.email = email

    let password = prompt('Ingrese la password que tenga mas de 6 caracteres y una mayuscula')
    while(!validacionPassword(password)){
        password = prompt('Error password invalida, vuelva a ingresar una password de 6 caracteres y una mayuscula')
    }
    usuario.password = password

    alert(`Usuario ${usuario.email} registrado`)

    return usuario
}


console.log(login())

*/
/*

## Calculadora de operaciones

Crear una funcion que se llame calculadora() que de inicio a la sig logica
-Operaciones disponibles:

    1) +
    2) -

Solicitar una operacion y verificar que la operacion sea valida (es valida si esta dentro de las operaciones disponibles)
Solicitar un numero 1 y validarlo
Solicitar un numero 2 y validarlo

Al finalizar las solicitudes mostrar el resultado por alerta de la sig manera:
'El resultado de {a} {operacion} {b} es {resultado}'
*/



const validacionOperacion = (operacion) =>{
    const OPERACIONES_DISPONIBLES = ['+','-']
    for(let operacionDisponible of OPERACIONES_DISPONIBLES){
        if(operacionDisponible === operacion){
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
    operacion = prompt('Error,operacion no disponible,seleccione una operacion')
    }

    let a = prompt('Ingrese un primer numero')
    while(!validacionNumero(a)){
        a = prompt('Error numero no valido, ingrese nuevamente')
    }

    let b = prompt('Ingrese un segundo numero')
    while(!validacionNumero(b)){
        b = prompt('Error numero no valido, ingrese nuevamente')
    }

    let resultado = 0

    if(operacion === '+'){
        resultado = Number(a) + Number(b)
    }
    else if(operacion === '-'){
        resultado = Number(a) - Number(b)
    }

    alert(`El resultado de ${a} ${operacion} ${b} es ${resultado}`)

}

(calculadora())






/*

localStorage.setItem( 
    'usuario',
    JSON.stringify(login())
)

*/


//Vamos a crear una funcion llamada obtener historial que nos devuelva el array historial
//Vamos a crear en nuestro programa la funcion guardarEnHistorial que reciba un objeto y
//lo guarde en el localStorage dentro del array historial


/*

if(localStorage.getItem('historial') === null){
    localStorage.setItem('historial', JSON.stringify([]))
}

const obtenerHistorial = () => JSON.parse(localStorage.getItem('historial'))

const guardarEnHistorial = (objeto) =>{
    const historial = obtenerHistorial()
    historial.push(objeto)
    localStorage.setItem('historial', JSON.stringify(historial))
}

guardarEnHistorial(
    {nombre: 'walter',
        password: '123'
    }
)

*/


/*
//Cada elemento del historial tendra el siguiente formato
{
    accion: 'calculadora',
    operacion: '+'||'-',
    a: number,
    b: number,
    resultado: number,
    fecha: dd/mm/aaaa || '18|01/2020'
}
*/
/*
//Esto significa que cuando usemos guardarEnHistorial debemos guardar el objeto de la esa manera


//Vamos a crear una funcion llamada renderizarHistorial

//va a llamar al historial guardado y por cada elemento del historial vamos a crear la sig plantilla 

`
Accion: {accion}
Operacion: {operacion}
Numeros: {a}, {b}
Resultado: {resultado}
fecha: {fecha}
`
*/
//y la acumularan en un string y al finalizar el recorrido mostraran el string por alerta


//Para hacer el ejercicio recuerden previamente guardar algunas operaciones en el historial y borren las anteriores
/*
guardarEnElHistorial({
    accion: 'calculadora',
    operacion: '+',
    a: 3,
    b: 3,
    resultado: 6,
    fecha:  '18|01/2020'
})
*/


/*

guardarEnHistorial ({
    accion: 'calculadora',
    operacion: '+',
    a: 2,
    b: 6,
    resultado: 8,
    fecha: '17/03/2024'
})


guardarEnHistorial({
    accion: 'calculadora',
    operacion: '+',
    a: 5,
    b: 5,
    resultado: 10,
    fecha: '27/08/2024'
})

guardarEnHistorial({
    accion: 'calculadora',
    operacion: '+',
    a: 10,
    b: 6,
    resultado: 16,
    fecha: '31/05/2024'
})


const renderizarHistorial = () =>{
    let listaHistorial = ''
    const historial = obtenerHistorial()
    for (const objeto of historial){
        listaHistorial = listaHistorial + `
        accion: ${objeto.accion}
        operacion: ${objeto.operacion}
        numeros: ${objeto.a}, ${objeto.b}
        resultado: ${objeto.resultado}
        fecha: ${objeto.fecha}
        `
    }
    return listaHistorial
}

alert(renderizarHistorial())

*/








