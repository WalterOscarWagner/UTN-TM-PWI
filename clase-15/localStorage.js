// localStorage y sessionStorage


let nombre = prompt ('Ingrese un nombre')

localStorage.setItem('username', nombre)


/*
console.log(String({nombre: 'pepe'}))
*/


/*
const user = {nombre: 'pepe'}

localStorage.setItem('user', JSON.stringify(user))

const usuarioFromLocal = JSON.parse(localStorage.getItem('user'))

console.log(usuarioFromLocal.nombre)



'{"nombre": "pepe"}'



console.log(JSON.parse('{"nombre": "pepe"}'))

*/


/*

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

*/
//Mejorar la funcion login para que el objeto retornado lo guarde en localStorage

/*

let usuarioRegistrado = JSON.stringify(login())
localStorage.setItem('usuario', usuarioRegistrado)
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































