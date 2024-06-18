/*
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

const carrito = [
    {
        nombre:'tv samsung',
        id: 1,
        precio: 5000,
        cantidad: 1,
        thumbnail: ' https://m.media-amazon.com/images/I/61UUChLhLgL._AC_SL500_.jpg'
    },
    {
        nombre:'celular samsung',
        id: 2,
        precio: 3000,
        cantidad: 3,
        thumbnail:' https://tienda.personal.com.ar/images/720/webp/Samsung_A24_Silver_Frente_min_d91cc80eb8.png'
    },
    {
        nombre: 'bicicleta',
        id: 3,
        precio: 4000,
        cantidad: 1,
        thumbnail:'https://biciperetti.com.ar/wp-content/uploads/2022/11/DSC_4849-15-300x300.jpg'
    }
]

const renderizarCarrito = (carrito) =>{

const carritoHTML = document.getElementById("carrito")
const totalHTML = document.getElementById('total')

let total = 0
let plantillaCarrito = ''
for(const objeto of carrito){
    total = total + (objeto.precio * objeto.cantidad)
    plantillaCarrito = plantillaCarrito + `
    <div>
        <h3> ${objeto.nombre} #${objeto.id}</h3>
        <img width = '100px' src="${objeto.thumbnail}"/>
        <span> PRECIO UNITARIO: ${objeto.precio} x ${objeto.cantidad}</span>
        <span> TOTAL: ${objeto.precio * objeto.cantidad}</span>
    </div>
    <hr>
    `
}

carritoHTML.innerHTML = plantillaCarrito
totalHTML.innerText = 'TOTAL: $' + total
}


renderizarCarrito(carrito)



/*
Crear una funcion llamada eliminarItemPorId que va a recibir un Id
Y debera buscar en el array carrito y eliminar al Item con el Id recibido,peo OJO, 
solamente vamos a eliminar si la cantidad es 1,sino deberemos reducir la cantidad en 1

EJEMPLO:

eliminarItemPorId(2)
busca al celular y como tiene 3 de cantidad, cambia el 3 por 1 menos,es decir 2
Al finalizar invocaremos nuevamente a renderizar carrito

eliminarItemPorId(3)
Busca la bicicleta y como tiene 1 de cantidad,elimina el item del carrito
Al finalizar invocaremos nuevamente a renderizar carrito
*/

const buscarObjetoPorId = (id) =>{
    for(const objeto of carrito){
        if(objeto.id === id){
            return objeto
        }
    }
}

const eliminarObjetoPorId = (id) =>{
    const objetoBuscado = carrito.find ((objeto) =>  objeto.id === id)
    if(objetoBuscado){
        if(objetoBuscado.cantidad === 1){
            //LOGICA PARA ELIMINAR ITEM
            const posicionObjeto = carrito.findIndex((objeto) => objeto.id === id)
            carrito.splice(posicionObjeto, 1)
            
        }
        else{
            objetoBuscado.cantidad = objetoBuscado.cantidad - 1
            // LOGICA PARA DECREMENTAR EN 1 LA CANTIDAD
        }
        renderizarCarrito(carrito)
    }
    else{
        console.error('Error: objeto con id inexistente')
    }

    /*const objetoBuscado = buscarObjetoPorId(id)*/
    console.log(objetoBuscado)
}


eliminarObjetoPorId()



/*
Crear la funcion llamada agregarObjetoAlCarrito(objeto)
Objeto es un objeto con 
*/
/*
agregarObjetoAlCarrito ({
    nombre: 'Toyota GR86',
    id: 4,
    precio: 25000,
    thumnail:'https://www.google.com/imgres?q=toyota%20corolla&imgurl=https%3A%2F%2Fmedia.toyota.com.ar%2Fafed49ca-5392-4a01-82d6-0c74f9d2bbc7.png&imgrefurl=https%3A%2F%2Fwww.toyota.com.ar%2Fmodelos%2Fcorolla&docid=9q3wX3wFLTNWxM&tbnid=lOUViuIIVzo1XM&vet=12ahUKEwjekNyrreWGAxXzqpUCHQIgAUgQM3oECHsQAA..i&w=580&h=280&hcb=2&itg=1&ved=2ahUKEwjekNyrreWGAxXzqpUCHQIgAUgQM3oECHsQA'
})
*/
/*
Buscar si en el carrito ya existe un elemento con ese id
Si existe unicamente incrementaran su cantidad en 1

Si no existe van a agregarlo al carrito y van a crear una propiedad para ese objeto
llamada cantidad y con el valor 1

*/



const agregarObjetoAlCarrito = (producto) => {
    const objetoBuscado = carrito.find((objeto) => objeto.id === producto.id)
    if(objetoBuscado){
        /* Logica para incrementar la cantidad */
        objetoBuscado.cantidad = objetoBuscado.cantidad + 1
    }
    else {
        /* Logica para agregar el producto al carrito */
        
            producto.cantidad = 1
            carrito.push(producto)
        }
        renderizarCarrito(carrito)

    }



    agregarObjetoAlCarrito ({
        nombre: 'Toyota GR86',
        id: 4,
        precio: 25000,
        thumnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s'

    })





























































