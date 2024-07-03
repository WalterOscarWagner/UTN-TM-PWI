

const alertar = () =>{
    alert('Hola mundo')
}



const btn2HTML = document.getElementById('btn-2')

btn2HTML.onclick = alertar


// Llamar un elemento por clase

const btn3HTML = document.querySelector('.btn-3')

/*btn3HTML.addEventListener('click', alertar)*/
/*
renderizarContador(estadoContador)
btn3HTML.addEventListener('mouseover', alertar)
*/
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
const errorContadorHTML = document.querySelector('.error-contador')

const renderizarContador = () =>{
    contadorHTML.innerText = estadoContador
}
const incrementarContador = () =>{
    estadoContador = estadoContador + 1
    renderizarContador(estadoContador )
    limpiarError()
}

const decrementarContador = () =>{
    if(estadoContador > 1){
        estadoContador = estadoContador - 1
        renderizarContador(estadoContador)
    }
    else{
        errorContadorHTML.innerText = 'No se puede decrementar a - 0'
    }
}



let estadoContador = 1
renderizarContador()

btnIncrementarHTML.addEventListener('click', incrementarContador)
btnDecrementarHTML.addEventListener('click', decrementarContador)


/*
const renderizarContador = () =>{
    contadorHTML.innerText = estadoContador
}
*/
const handleIncrementarContador = () =>{
    estadoContador = estadoContador + 1
    renderizarContador()
}

const handleDecrementarContador = () =>{
    estadoContador = estadoContador - 1
    renderizarContador()
}
/*
let estadoContador = 4
renderizarContador()

*/
btnIncrementarHTML.addEventListener('click', handleIncrementarContador)
btnDecrementarHTML.addEventListener('click', handleDecrementarContador)


const formLoginHTML = document.getElementById('form-login')

console.dir(formLoginHTML)


const handleLogin = ( evento ) =>{
    // Prevenimos que se racarge la pagina al enviarse el formulario
    evento.preventDefault()
    console.log('formulario enviado')
    console.dir(formLoginHTML.username.value)
    console.dir(formLoginHTML.password.value)
}


formLoginHTML.addEventListener('submit', handleLogin)





























