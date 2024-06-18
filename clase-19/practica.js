/*
En html tendremos un numero que se mostrara en un span, dicho numero 
seria inicialmente 1
Debemos crear el numero mediante JS
Habra un boton <button> + </button>
Cuando ese boton sea clickeado el numero debera incrementarse en 1

*/

const renderizarContador = () =>{
    contadorHTML.innerText = estadoContador
}

const contadorHTML = document.getElementById('contador')
const btnIncrementarHTML = document.querySelector('.btn-incrementar')


let estadoContador = 1


