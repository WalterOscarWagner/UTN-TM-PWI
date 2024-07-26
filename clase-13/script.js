


/*

1-crear una funcion que dado 3 valores nos devuelva la sumatoria

calcularSumatoria(1,2,3) => 6


function calcularSumatoria (a,b,c){
    return a + b + c
}
console.log(calcularSumatoria(1 ,2 ,3))

*/
/*
2-Crear una funcion que reciba 2 numeros y siempre devuelva el mayor
mayor(7,2) 7



function mayor(a,b){
    if(a > b){
    return a
    }
    else{
    return b
    }
}
console.log(mayor(7,2))
*/


/*
3-crear una funcion que se llame generarEmail que reciba un nombreDeUsuario y
retorne nombreDeUsuario + '@gmail.com'

generarEmail('pepe') => 'pepe@gmail.com


function generarEmail(nombreDeUsuario){
    return nombreDeUsuario + '@gmail.com'
}

console.log(generarEmail('pepe'))
*/





// ARROW FUNCTION


/*
// crear una funcion que dado 3 valores nos devuelva la sumatoria

const calcularSumatoria = (a, b, c) => a + b + c

console.log(calcularSumatoria(1,2,3))
*/

// Validar string

/*
const solicitar_y_validar_string = () => {
    let stringSolicitado = prompt("Ingrese un dato")
    while(!stringSolicitado || !isNaN(stringSolicitado)){
        alert('ERR0R : dato ingresado debe ser un string')
        stringSolicitado = prompt('Ingrese otro dato nuevamente')
    }
    return stringSolicitado
}

solicitar_y_validar_string()

*/






//CONVERTIR ESTAS FUNCIONES EN ARROW FUNCTION
/*
3-crear una funcion que se llame generarEmail que reciba un nombreDeUsuario y
retorne nombreDeUsuario + '@gmail.com'


function generarEmail(nombreDeUsuario){
    return nombreDeUsuario +' @gmail'
}

const generarEmail = (nombreDeUsuario) => nombreDeUsuario + '@gmail.com'

console.log(generarEmail('pepe'))

*/

/*

1-crear una funcion que dado 3 valores nos devuelva la sumatoria

calcularSumatoria(1,2,3) => 6


function calcularSumatoria(a,b,c){
    let sumatoria = a+b+c
    return sumatoria
}

const calcularSumatoria = (a , b , c ) => a + b + c 

console.log(5+6+8)
*/

/*
2-Crear una funcion que reciba 2 numeros y siempre devuelva el mayor
mayor(8,9) 9


const obtenerMayor =( a , b ) => {
    if(a > b){
        return a;
    } 
    else{
        return b;
    }
}

console.log(obtenerMayor( 8 , 9 ))
*/


