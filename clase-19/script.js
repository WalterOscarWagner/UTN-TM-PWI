

const alertar = () =>{
    alert('Hola mundo')
}



const btn2HTML = document.getElementById('btn-2')

btn2HTML.onclick = alertar


// Llamar un elemento por clase

const btn3HTML = document.querySelector('.btn-3')

btn3HTML.addEventListener('mouseover', alertar)


/*
En html tendremos un numero que se mostrara en un span, dicho numero seria inicialmente 1
Debemos crear el numero mediante JS
Habra un boton <button> + </button>
Cuando ese boton sea clickeado el numero debera incrementarse en 1

Crear el boton de decrementar

(Opcional) que no se pueda decrementar a - de 1
*/

const contadorHTML = document.getElementById('contador')
const btnIncrementarHTML = document.querySelector('.btn-incrementar')
const btnDecrementarHTML = document.querySelector('.btn-decrementar')

const renderizarContador = () =>{
    contadorHTML.innerText = estadoContador
}
const incrementarContador = () =>{
    estadoContador = estadoContador + 1
    renderizarContador()
}

const decrementarContador = () =>{
    estadoContador = estadoContador - 1
    renderizarContador()
}

let estadoContador = 4
renderizarContador()


btnIncrementarHTML.addEventListener('click', incrementarContador)
btnDecrementarHTML.addEventListener('click', decrementarContador)























