/* DOM = document object model = modelo objeto del documento */

// Document es una variable global que se crea al abrir la pagina


/*console.log(document)*/
console.dir(document)

// Obtiene un elemento por id, si lo encuentra lo retorna (como objeto), sino, retorna null
const titulo = document.getElementById('titulo')
console.dir(titulo.innerText)


/*let nombre = prompt(' ingresa tu nombre ')*/
titulo.innerText = 'Hola' 

const cajaProducto = document.getElementById('caja-producto')
console.dir(cajaProducto)


cajaProducto.innerHTML = `
    <h2>Soy un subtitulo</h2>
    <p>Tv muy linda</p>
    <span>Precio: <b>$500</b></span>
    `