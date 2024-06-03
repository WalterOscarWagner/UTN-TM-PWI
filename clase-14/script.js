// arrays

/*

const nombres3 = [ 'maria' , 'pedro' , 'leonel' , 'ezequiel' , 'elias' , 'lucas' , 'julieta' , 'abril' , 'lautaro']
*/



//Eliminar a leonel
//eliminar al anterior a lucas
//agregar antes de abril a 'sofia' sin eliminar a abril


/*

let leonelPosition = nombres3.indexOf('leonel')
nombres3.splice(leonelPosition,1)
console.log(nombres3)


let lucasPosition = nombres3.indexOf('lucas')
nombres3.splice((lucasPosition -1),1)
console.log(nombres3)


let abrilPosition = nombres3.indexOf('abril')
nombres3.splice(abrilPosition,0 , 'sofia')
console.log(nombres3)

*/
/*
for(let index = 0; index < nombres3.length; index =index + 1){
    console.log(nombres3[index])
}
*/

/*
const nombres3 = [ 'maria' , 'pedro' , 'leonel' , 'ezequiel' , 'elias' , 'lucas'
, 'julieta' , 'abril' , 'lautaro']

*/

/*
Obtener cantidad total de caracteres de una lista de nombres:
Quiero que dado el array de nombre, por cada nombre sumes la cantidad de caracteres 
Al finalizar el recorrido decir ' la cantidad de caracteres es:{sumatoria de caracteres}'


Ejemplo: ['pepe','juan'] // = 8
*/


/*
let caracteres = 0
for (let index = 0 ; index < nombres3.length ; index = index + 1 ){
    caracteres = caracteres + nombres3[index].length
}

console.log( 'la cantidad de caracteres es: ' +  caracteres )
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


/* crear un array llamado samsung que contenga los productos que sean de la marca samsung 


const samsung = []
for(const producto of productos){
    if (producto.marca === 'samsung'){
        samsung.push(producto)
    }
}
console.log(samsung)

*/


//Crear una funcion que se llame buscarProductos(string) recibira un string y cada producto del array de productos verificara si el titulo tiene incluido el string buscado Esta funcion debe retornar un array de prductos

EJEMPLO:
buscarProducto('noblex') //retorna:
[
    {
        title: 'tv noblex 65" ',
        price: 6000,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 50" ',
        price: 4500,
        marca: 'noblex'
    }
]
buscarProducto('celular')
[
    {
    title: 'celular samsung 64gb',
    price: 4500,
    marca: 'samsung'
    },
    {
            title: 'celular samsung 128gb',
        price: 4500,
        marca: 'samsung'
    }
]




function buscarProducto (busqueda){
    const arrayProductos = []
    for (const producto of productos){
        if (producto.title.includes(busqueda)){
            arrayProductos.push(producto)
        }
    }
    return arrayProductos;
}
console.log(buscarProducto ('samsung'))