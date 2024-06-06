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

const tieneMayuscula = (palabra) => palabra.toLowerCase() !== palabra

const validacionEmail = (email) =>{
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}
const validacionPassword = (password) =>{
    return password && password.length >= 6 && tieneMayuscula(password)
}

const solicitarDato = (mensaje, error, validacion) => {
    let dato = prompt(mensaje)
    while(!validacion(dato)){
        dato = prompt(error)
        }
        return dato
    }



const login = () => {
    const usuario = {
        email: null,
        password: null
    }

    usuario.email = solicitarDato(
        'Ingrese un email',
        'Error email invalido: ingrese nuevamente el email',
        validacionPassword
    )

    usuario.password = solicitarDato(
        'Ingrese un password',
        'Error password,vuelva a ingresar',
        validacionPassword
    )

    alert(`Usuario ${usuario.email} registrado`)

    return usuario
}

console.log(login())