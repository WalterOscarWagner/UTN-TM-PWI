
/* TIPOS DE DATOS OBJETOS */
/*
let edadUsuario = 19
let nombreUsuario = 'pepe'
let apellidoUsuario = 'suarez'

*/

//Formato key-value

/*
let usuario = {
    'edad': 19,
    'nombre': 'pepe',
    'apellido': 'suarez',
    'mejor amigo':{
        "nombre": 'juan'
    }

}

console.log('hola' + usuario ['mejor amigo']['nombre'])

*/


/*
Crear un objeto que tenga las siguientes propiedades

precio : number
nombre : string
marca : string
id : number
desripcion : string
*/
/*
let producto ={
    precioUnitario: 50000,
    nombre_completo: 'Zapatillas',
    marca : 'Nike',
    id : 10,
    descripcion: 'Nuevas'
}


console.log('el producto' + producto['nombre_completo'] + 'cuesta $' + producto['precioUnitario'])

*/


const user = {
    name:'pepe',
    lastname: 'suarez',
    'user preferences':{
        theme: 'dark-mode',
        lang: 'spanish'
    }
}

/*
Por consola mostrar un informe del usuario
'El usuario{nombre} {lastname} tiene las preferencias
de usuario en : {theme}\nLenguaje: {lang}'*/

console.log('El usuario :' + user['name'] +'' + user['lastname']
 + 'tiene las preferencias en :' + '\n' + user['user preferences']['theme']
  + '\n' + user['user preferences']['lang'])



























