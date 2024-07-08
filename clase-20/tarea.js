
const comprarBotonHTML = document.getElementById('comprar')
const contenedorContadorHTML = document.getElementById('elegir-cantidad')


const restarBotonHTML = document.getElementById('restar')
const contadorCantidadHTML = document.getElementById('numero')
const agregarBotonHTML = document.getElementById('agregar')

contenedorContadorHTML.style.display = 'none'

const handleBuy = () => {
    comprarBotonHTML.style.display = 'none'
    contenedorContadorHTML.style.display = 'flex'
}

comprarBotonHTML.addEventListener('click', handleBuy)


const volver = () => {
    comprarBotonHTML.style.display = 'flex'
    contenedorContadorHTML.style.display = 'none'
}

const renderizarContador = () => {
    contadorCantidadHTML.innerText = numero
}

const agregar = () => {
    numero = numero + 1
    renderizarContador()
}
const restar = () => {
    if (numero > 1) {
        numero = numero - 1
        renderizarContador()
    }
    else if (numero === 1) {
        volver()
    }
}

let numero = 1
renderizarContador()


agregarBotonHTML.addEventListener ('click', agregar)
restarBotonHTML.addEventListener('click', restar)
