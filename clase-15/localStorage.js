// localStorage y sessionStorage



/*mejorar la funcion login para que el objeto retornado lo guarde en localStorage
*/

/*
const login = () => {
    const usuario = {
        email: null,
        password: null
    }

    usuario.email = solicitarDato(
        'Ingrese un email',
        'Error email invalido: ingrese nuevamente el email',
        validacionPassword
    )

    usuario.password = solicitarDato(
        'Ingrese un password',
        'Error password,vuelva a ingresar',
        validacionPassword
    )

    alert(`Usuario ${usuario.email} registrado`)


}
*/
/*
const calculadora = () =>{
    let operacion = prompt('Ingrese una operacion')
    while(!validacionOperacion(operacion)){
        operacion = prompt('Error operacion no disponible,seleccione una operacion')
    }

    let a =prompt('Ingrese un primer numero')
    while(!validacionNumero(a)){
        a = prompt('Error numero no valido, ingrese nuevamente')
    }

    let b = prompt('Ingrese un numero')
    while(!validacionNumero(b)){
        b = prompt('Error numero no valido, ingrese nuevamente')
    }

    let resultado = 0

    if(operacion === '+'){
        resultado = Number(a)+ Number(b)
    }
    else if(operacion === '-'){
        resultado = Number(a) - Number(b)
    }

    alert(`El resultado de ${a} ${operacion} ${b} es ${resultado}`)
}



let objetoString = JSON.stringify(login())
localStorage.setItem('usuario', objetoString)

*/




























