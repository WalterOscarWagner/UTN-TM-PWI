/*
## login

debo tener una funcion llamada login que active toda la logica del login

logica del login:

vamos a solicitar al usuario un email
validaremos que el email sea un email
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
        email = prompt('Error email invalido: ingrese nuevamente')
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




























