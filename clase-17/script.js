/* DOM = document object model = modelo objeto del documento */

// Document es una variable global que se crea al abrir la pagina


console.log(document)

/*
console.dir(document)

// Obtiene un elemento por id, si lo encuentra lo retorna (como objeto), sino, retorna null
const titulo = document.getElementById('titulo')
console.dir(titulo.innerText)
*/

/*let nombre = prompt(' ingresa tu nombre ')*/
/*
titulo.innerText = 'Hola' 

const cajaProducto = document.getElementById('caja-producto')
console.dir(cajaProducto

)


cajaProducto.innerHTML = `
    <h2>Soy un subtitulo</h2>
    <p>Tv muy linda</p>
    <span>Precio: <b>$500</b></span>
    `

*/
// EJERCICIO


/*
const usuario = {
    nombre,
    apellido,
    direccion,
    edad
}

// mostrarlo dentro de un div

h2: Nombre completo: {nombre} {apellido}
span: Edad: {edad}
span: Direccion: {direccion}

*/
/*

const usuario = {
    nombre: 'pepe',
    apellido: 'argento',
    direccion: 'siempreviva 123',
    edad: '40'
}

const usuarioo = document.getElementById('usuario')

usuario.innerHTML = `
    <h2>nombre completo: ${usuario.nombre} ${usuario.apellido}</h2>
    <span>Edad: ${usuario.edad}</span>
    <span>Direccion: ${usuario.direccion}</span>

`
*/
/*
const productos = [
    {
        nombre: 'tv samsung 32"',
        precio: 500,
        id: 1,
        descripcion: 'Según diferentes tablas comparativas que publican tanto fabricantes de pantallas como expertos independientes, un 32” HD (1366 X 768) se puede ver bien a dos o tres metros de distancia, y un Full HD (1920 X 1080), brindará mejor rendimiento a 1,5 o 2 metros.5 may 2023',
        thumbnail: 'https://m.media-amazon.com/images/I/61UUChLhLgL._AC_SL500_.jpg'
    },
    
    {
    nombre: 'tv samsung 42"',
    precio: 1500,
    id: 2,
    descripcion: 'Según diferentes tablas comparativas que publican tanto fabricantes de pantallas como expertos independientes, un 32” HD (1366 X 768) se puede ver bien a dos o tres metros de distancia, y un Full HD (1920 X 1080), brindará mejor rendimiento a 1,5 o 2 metros.5 may 2023',
    thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/ar/un43t5300agczb/gallery/ar-fhd-t5300-un43t5300agczb-356627272?$650_519_PNG$'
    },

    {
        nombre: 'tv samsung 52"',
        precio: 2500,
        id: 3,
        descripcion: 'Según diferentes tablas comparativas que publican tanto fabricantes de pantallas como expertos independientes, un 32” HD (1366 X 768) se puede ver bien a dos o tres metros de distancia, y un Full HD (1920 X 1080), brindará mejor rendimiento a 1,5 o 2 metros.5 may 2023',
        thumbnail: 'https://m.media-amazon.com/images/I/61UUChLhLgL._AC_SL500_.jpg'
    }

]

const productosHTML = document.getElementById('productos')


let plantillaProductos = ''
for(const producto of productos){
    plantillaProductos = plantillaProductos + `
    <div>
        <h2>${producto.nombre}</h2>
        <img width='200px' src="${producto.thumbnail}"/>
        <span>Precio: ${producto.precio}</span>
        <p>${producto.descripcion}</p>
        </div>
        <hr>
    `
}


productosHTML.innerHTML = plantillaProductos

*/
/*
*
Renderizar un carrito:

Un array de items llamado carrito
Cada item tiene el sig formato
object:
    nombre: string
    id: 
    precio:
    cantidad:
    img: string con la imagen


    Cada item mostrado en HTML va a tener este formato

    Div
        h3: {nombre} id:#{id}
        img: el src tendra el valor {img} y el ancho en 100px
        span: Precio unitario: ${precio} x {cantidad} unidaddes
        span: Total: ${precio * cantidad}

Por debajo del div donde renderizamos el carrito, crear en HTML un span que este vacio
Llamar dicho span por JS y cambiar el texto para que diga : TOTAL: ${precio total}
*/

/*


const carrito = [
    {
        nombre:'tv samsung',
        id: 1,
        precio: 5000,
        cantidad: 2,
        img:'https://m.media-amazon.com/images/I/61UUChLhLgL._AC_SL500_.jpg'
    },
    {
        nombre:'celular samsung',
        id: 2,
        precio: 3000,
        cantidad: 3,
        img:' https://tienda.personal.com.ar/images/720/webp/Samsung_A24_Silver_Frente_min_d91cc80eb8.png'
    },
    {
        nombre: 'bicicleta',
        id: 3,
        precio: 4000,
        cantidad: 2,
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Farticulo.mercadolibre.com.ar%2FMLA-1133858696-bicicleta-mtb-rodado-29-zion-pampa-21-vel-frenos-a-discos-_JM&psig=AOvVaw3o1e0fEaCIWDsYiz7Rs-N1&ust=1718463823825000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjJroOv24YDFQAAAAAdAAAAABAP'
    }
]


const renderizarCarrito = (carrito) =>{
    const carritoHTML = document.getElementById("carrito")
    const totalHTML = document.getElementById('total')

    let plantillaCarrito = `
    for(const item of carrito)
    
    
    
    
    
    `
}


*/



































































