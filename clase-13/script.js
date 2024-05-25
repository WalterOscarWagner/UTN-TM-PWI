


/*

1-crear una funcion que dado 3 valores nos devuelva la sumatoria

calcularSumatoria(1,2,3) => 6

2-Crear una funcion que reciba 2 numeros y siempre devuelva el mayor

mayor(7,2) 7

3-crear una funcion que se llame generarEmail que reciba un nombreDeUsuario y
retorne nombreDeUsuario + '@gmail.com'

generarEmail('pepe') => 'pepe@gmail.com

*/

/*
//1   (modo abreviado,es correcto)
function sumatoria (a,b,c){
    return a+b+c
}

function calcularSumatoria(a,b,c){
    let sumatoria = a+b+c
    return sumatoria
}

console.log(calcularSumatoria(1,2,3))

*/
/*

//2
function mayor(a+b){
    if(a > b){
        return a
    } 
    else{
        return b
    }
}

*/


//3
/*
function generarEmail(nombreDeUsuario){
    return String(nombreDeUsuario +' @gmail')
}


console.log(generarEmail('pepe'))

*/



// ARROW FUNCTION

// crear una funcion que dado 3 valores nos devuelva la sumatoria
/*
const calcularSumatoria = (a, b, c) => a + b + c

console.log(calcularSumatoria(1,2,3))


*/

/*
validar string
*/
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


function generarEmail(nombreDeUsuario){
    return String(nombreDeUsuario +' @gmail')
}

const generarEmail = (usuario) => usuario + '@gmail.com
*/



/*

function calcularSumatoria(a,b,c){
    let sumatoria = a+b+c
    return sumatoria
}

const calcularSumatoria = (a+b+c) => a+b+c

*/


/*
function mayor(a,b){
    if(a > b){
        return a
    } 
    else{
        return b
    }
}

const obtenerMayor = (a,b) =>{
    if (a>b){
        return a;
    }
    else{
        return b;
    }
}
*/

/*
const sumar =(a,b) => Number(a)+Number(b)
*/
