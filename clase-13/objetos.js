
/* TIPOS DE DATOS OBJETOS */

/*
let edadUsuario = 19

let nombreUsuario = 'pepe'

let apellidoUsuario = 'suarez'


//Formato key-value


let usuario = {
    'edad': 19,
    'nombre': 'pepe',
    'apellido': 'suarez',
    'mejor amigo': {
        'nombre': 'juan'
    }
    }

console.log(' hola ' + usuario ['mejor amigo']['nombre'])

*/


/*
Crear un objeto que tenga las siguientes propiedades

precio : number
nombre : string
marca : string
id : number
desripcion : string


let producto ={
    precioUnitario: 50000,
    nombreCompleto: 'Zapatillas',
    marca : 'Nike',
    id : 10,
    descripcion: 'Nuevas'
}


console.log('El producto ' + producto ['nombreCompleto'] + ' cuesta $ ' + 
producto ['precioUnitario'])

*/



/* 
'El usuario {name} {lastname} creo su cuenta en fecha {created_at} vive en {adress}
y su telefono es {tel}'


Por consola mostrar un informe del usuario
'El usuario{nombre} {lastname} tiene las preferencias
de usuario en : \nModo:{theme}\nLenguaje: {lang}'



const user = {
    name:'pepe',
    lastname: 'suarez',
    'user preferences':{
        theme: 'dark-mode',
        lang: 'spanish'
    }
}

console.log('El usuario :' + user['name'] +' '+ user['lastname'] +' '
+ 'tiene las preferencias en :' + '\n' + user['user preferences']['theme']+
'\n' + user['user preferences']['lang'])

*/
/*
Por consola mostrar un informe del usuario'El usuario{nombre} {lastname} 
tiene las preferenciasde usuario en : \nModo:{theme}\nLenguaje: {lang}'


*/

const user = {
    name: 'pepe',
    lastname: 'suarez',
    'user preferences':{
        theme: '-dark-mode',
        lang: '-español'
    },
    'user-info':{
    createdAt: '18/02/2005',
    adress: 'av siempre viva 472',
    tel: '+22 1323-2122'
    }
    }

/*
    console.log(`
        El usuario ${user.name} ${user.lastname} tiene las preferencias en:
        -Modo: ${user['user preferences'].theme}
        -Lenguaje: ${user['user preferences'].lang}
        `)
*/

/*
'El usuario{name}{lastname} creo su cuenta en fecha {createdAt}vive en
{adress} y su telefono es {tel}
*/
/*
    console.log(`
        El usuario ${user['name']} ${user['lastname']} creo su cuenta
        en fecha ${user ['user-info']['createdAt']}
        vive en ${user['user-info']['adress']}
        y su telefono es ${user['user-info']['tel']}
        `)
*/
// reasignamos el valor de la propiedad name

user['name']  = 'juan'
user.lastname = 'gomez'

// Creando una propiedad 

user['isAdmin'] = false
user.isAdmin = true


//NO usamos notacion de . si la prpiedad tiene -,ñ,letras con tilde o espacios



console.log('El usuario :' + user['name '] +'' + user['lastname'] +' creo su cuenta en fecha'
+ user['user-info']['createdAt'] + 'vive en' + user['user-info']['adress'] + 'y su telefono es'
+ user['user-info']['tel'])


/*
// TEMPLADE STREAM

console.log(`
    El usuario ${user['name']} ${user['lastname']} tiene las preferencias en:
    -Modo: ${user['user preferences']['theme']}
    -Lenguaje: ${user['user preferences']['lang']}
`)
*/
// PASAR LOS MENSAJES DE CONSOLA A TEMPLATE STRING*/


//Esto se puede abreviar usando .

/*
console.log(`
    El usuario ${user['name']} ${user['lastname']} tiene las preferencias en:
    -Modo: ${user['user preferences']['theme']}
    -Lenguaje: ${user['user preferences']['lang']}
`)
*/

console.log(`
El usuario ${user.name} ${user.lastname} tiene las preferencias en:
-Modo: ${user['user preferences'].theme}
-Lenguaje: ${user['user preferences'].lang}
`)


/*
const user = {
    name: 'pepe',
    lastname: 'suarez',
    'user preferences':{
        theme: '-dark-mode',
        lang: '-español'
    },
    'user-info':{
    createdAt: '18/02/2005',
    adress: 'av siempre viva 472',
    tel: '+22 1323-2122'
    }
    }
*/
/*
'El usuario{name}{lastname} creo su cuenta en fecha {createdAt}vive en
{adress} y su telefono es {tel}
*/
/*
console.log(`
    El usuario ${user['name']} ${user['lastname']} creo su cuenta en fecha
    ${user['user-info']['createdAt']} vive en ${user['user-info']['adress']}
    y su telefono es: ${user['user-info']['tel']}
    
    `)
*/


/* Crear una funcion llamada calcularIva(precio,tipo_factura)
tipo_factura 'A,'B','C'

En el caso de si la factura es C o B el precio tendra el iva incluido
Ejemplo
calcularIva(100, 'C'|'B')
{ 
    precio: 121
    iva: 21
    precioConIva: 121
    factura: 'B' | 'C'
}

En el caso de si la factura sea A el precio tendra el iva discriminado
Ejemplo
calcularIva(100, 'A')
{
    precio: 100
    iva: 21
    precioConIva: 121
    factura: 'A'
}
{
    precio: number
    iva: number
    precioConIva,
    factura
}
*/

const calcularIva = (precio, tipo_factura ) => {
    let iva = precio * 0.21

    const resultado = {
        precio: null,
        iva: iva,
        precioConIva: precio + iva,
        factura: tipo_factura
    }
    if (tipo_factura == 'C' || tipo_factura == 'B'){
        resultado.precio = precio + iva
    }
    else if (tipo_factura == 'A') {
        resultado.precio = precio
    }
    return resultado
}

console.log(calcularIva(1000, 'A'))
console.log(calcularIva(1000,'B'))












