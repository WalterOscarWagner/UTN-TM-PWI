/*

Fetch es una funcion que me permite hacer peticiones HTTP, recibe 2 parametros
1) URL (un string que sera la url a la que vamos a consultar o peticionar)
2) un objeto de configuracion de la peticion

*/




/* async await */


const solicitarUsuarios = async () =>{
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET'
})

    console.log(respuesta)
    const resultado = await respuesta.json()
    console.log(resultado)
}


solicitarUsuarios()








































