// arrays



const nombres = [ 'pepe' , 'juan', 'ezequiel' ]

console.log(nombres[1])
console.log('tengo ' + nombres.length + ' nombres')


// Metodos de arrays

// .push() : agrega un elemento al final del array y devuelve la nueva longitud


nombres.push('maria')

console.log(nombres)

// .unshift(): agregar un elemento al principio del array
/*
nombres.unshift('pepe')

console.log(nombres)

*/

let nombre = 'pepe'
nombre = nombre.toUpperCase()

console.log(nombre)



// .pop: elimina el ultimo elemento y lo retorna

let ultimoElemento = nombres.pop()

console.log(ultimoElemento)


//.shift: elimina el primer elemento y lo retorna

/*
// SOLAMENTE FUNCIONA BIEN CON LOS ARRAYS DE STRING

//.indexOf() : devuelve la posicion de un string en el array de string

let posicionDeJuan = nombres.indexOf('juan')
console.log('la posicion de juan es ' + posicionDeJuan)
console.log(nombres)
*/
/*
//.splice() : elimina elementos a partir de... y pones cuantos queres eliminar
Tambien sirve para agregar elementos a partir de...

nombres.splice(posicionDeJuan,1)

console.log(nombres)


const nombres2 = ['maria','pedro','leonel','ezequiel','elias']

//Eliminar a Ezequiel

// Primero averiguo cual es la posicion

let posicionDeEzequiel = nombres2.indexOf('ezequiel')

console.log('la posicion de ezequiel es' + posicionDeEzequiel)

// Ahora lo elimino

nombres2.splice(posicionDeEzequiel,1)
console.log(nombres2)
*/

const nombres3 = ['maria','pedro','leonel','ezequiel','elias','lucas'
    ,'julieta','abril','lautaro']
console.log(nombres3)


// Eliminar a leonel

let posicionDeLeonel = nombres3.indexOf('leonel')

nombres3.splice(posicionDeLeonel,1)
console.log(nombres3)

//eliminar al anterior a lucas

let posicionDeLucas = nombres3.indexOf('lucas')
nombres3.splice((posicionDeLucas -1),1)
console.log(nombres3)


//agregar antes de 'abril' a 'sofia' sin eliminar a 'abril'

let abrilPosition = nombres3.indexOf('abril')
nombres3.splice(abrilPosition,0 , 'sofia')
console.log(nombres3)


// Consultar si esta en la lista

console.log(nombres3.includes('leonel'))




for(let index = 0; index < nombres3.length; index = index + 1){
    console.log(nombres3[index])
}

/*
const nombres3 = [ 'maria' , 'pedro' , 'leonel' , 'ezequiel' , 'elias' , 'lucas'
    , 'julieta' , 'abril' , 'lautaro']
*/

    // string.length => obtener la cantidad de caracteres

/*
Obtener cantidad total de caracteres de una lista de nombres:
Quiero que dado el array de nombre, por cada nombre sumes la cantidad de caracteres 
Al finalizar el recorrido decir ' la cantidad de caracteres es:{sumatoria de caracteres}'


Ejemplo: ['pepe','juan'] // = la sumatoria de caracteres es 8


const nombres3 = [ 'maria' , 'pedro' , 'leonel' , 'ezequiel' , 'elias' , 'lucas'
    , 'julieta' , 'abril' , 'lautaro']



let caracteres = 0
for (let index = 0 ; index < nombres3.length ; index = index + 1 ){
    caracteres = caracteres + nombres3[index].length
}

console.log( 'la cantidad de caracteres es: ' +  caracteres )


// Como recorrer un array

for(let nombre of nombres3){
    console.log(nombre)
}
*/



// Dado el siguiente array crear un segundo array llamado mayusculas que solo contenga alguna palabra con alguna letra mayuscula 


/*

const nombres =['pepe', 'lucas', 'PEDRO', 'JuaN']

//esto debe generar un segundo array con ['PEDRO', 'JuaN']

const estaEnMinuscula = (string) => {
    return string == string.toLowerCase()
} 

const tieneMayuscula = (string) => {
    return !estaEnMinuscula(string)
}


const mayusculas =[];
for (let nombre of nombres){
    if (tieneMayuscula(nombre)){
        mayusculas.push(nombre);
    }
}

console.log(mayusculas);

*/


/*
const productos = [
    {
        title: 'tv samsung 32"',
        price: 3000,
        marca: 'samsung'
    },
    {
        title: 'tv samsung 50"',
        price: 4600,
        marca: 'samsung'
    },
    {
        title: 'tv lg 42"',
        price: 3500,
        marca: 'lg'
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 65"',
        price: 6000,
        marca: 'noblex'
    },
    {
    title: 'celular samsung 64gb',
    price: 4500,
    marca: 'samsung'
    },
    {
        title: 'celular samsung 128gb',
        price: 4500,
        marca: 'samsung'
    },
]
*/

/*
// crear un array llamado samsung que contenga los productos que sean de la marca samsung 


const samsung = []
for(const producto of productos){
    if (producto.marca === 'samsung'){
        samsung.push(producto)
    }
}
console.log(samsung)
*/


//Crear una funcion que se llame buscarProducto(string) recibira un string y cada producto del array de productos verificara si el titulo tiene incluido el string buscado Esta funcion debe retornar un array de productos
/*
EJEMPLO:
buscarProducto('noblex') 
*/
/*
const productos = [
    {
        title: 'tv samsung 32"',
        price: 3000,
        marca: 'samsung'
    },
    {
        title: 'tv samsung 50"',
        price: 4600,
        marca: 'samsung'
    },
    {
        title: 'tv lg 42"',
        price: 3500,
        marca: 'lg'
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 65"',
        price: 6000,
        marca: 'noblex'
    },
    {
    title: 'celular samsung 64gb',
    price: 4500,
    marca: 'samsung'
    },
    {
        title: 'celular samsung 128gb',
        price: 4500,
        marca: 'samsung'
    },
]

function buscarProducto (busqueda){
    const arrayProductos = []
    for (const producto of productos){
        if (producto.title.toLowerCase().includes(busqueda.toLowerCase())){
            arrayProductos.push(producto)
        }
    }
    return arrayProductos;
}


let stringBuscado = prompt('ingrese el producto que desea buscar')
console.log(buscarProducto ('stringBuscado'))
*/