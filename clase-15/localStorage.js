// localStorage y sessionStorage

/*
let nombre = prompt ('Ingrese un nombre')

localStorage.setItem('username', nombre)

localStorage.clear()
*/
/*

console.log(String({nombre: 'pepe'}))

*/
/*
//JSON

// String escrito en formato JSON

'{"nombre": "pepe"]'

// .parse permite transformar un string con notacion de objetos a un objeto

console.log(JSON.parse('{"nombre": "pepe"}'))


// stringify

const producto = {
    nombre: 'tv samsung',
    precio: 700
}
let stringConNotacionDeObjeto = JSON.stringify(producto)

console.log(stringConNotacionDeObjeto)


*/

/*

const user = {nombre: 'pepe'}

localStorage.setItem('user', JSON.stringify(user))

const usuarioFromLocal = JSON.parse(localStorage.getItem('user'))

console.log(usuarioFromLocal.nombre)

*/





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

console.log(login(usuario))


//Mejorar la funcion login para que el objeto retornado lo guarde en localStorage
/*
const login = () => {
    const usuario = {
        email: null,
        password: null
    }
    usuario.email = email
    usuario.password = password
    alert(`usuario ${usuario.email} registrado`)

    return usuario
}
*/
/*
let usuarioRegistrado = JSON.stringify(login())
localStorage.setItem('usuario', usuarioRegistrado)

console.log(usuarioRegistrado)

*/


/*
console.log(JSON.parse(localStorage.getItem('usuario')))
*/
/*

localStorage.setItem( 
    'usuario',
    JSON.stringify(login())
)
*/































