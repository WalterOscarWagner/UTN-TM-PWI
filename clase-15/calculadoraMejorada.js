const tieneMayuscula = (palabra) => palabra.toLowerCase() !== palabra

const validacionEmail = (email) => {
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
        'error email invalido: ingrese nuevamente el email',
        validacionEmail
    )
    usuario.password = solicitarDato(
        'Ingrese una password',
        'Error password invalida,vuelva a ingresar una password de 6 caracteres y una mayuscula',
        validacionPassword
    )
    alert(`Usuario ${usuario.email} registrado`)

    return usuario
}

console.log(login())












