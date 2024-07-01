
/*
Crear una funcion llamada registraProducto
La funcion solicitara al usuario:
-Titulo: debe ser un string con mas de 4 caracteres
-Precio: debe ser un numero positivo mayor a 1
-Descripcion: debe ser un string con al menos 10 caracteres
-Categoria: debe ser un string que este dentro de las siguientes opciones ['tecnologia', 'hogar','otros']
-Marca: debe ser un string con al menos 3 caracteres

Se solicitara siempre mediante uso de prompts

Se mostrara al usuario la sig plantilla/texto por prompt (para que pueda contestar):
Confirmar producto:
-Titulo: 'mesa de trabajo de madera'
-Precio: '300'
-Descripcion: 'mesa de trabajo ideal para astillarse'
-Categoria: 'hogar'
-Marca 'jorge el carpintero'

Si el usuario elige cancelar(con el button) o escribe 'CANCELAR' o 'NO' se volvera a comenzar
Si el usuario presiona aceptar o escribe 'SI' entonces la funcion creara un objeto del producto y lo
mostrara por consola
*/

const categoriasDisponibles =['tecnologia', 'hogar', 'otros']
const validarStringConMinimo = (valor, minimo) => valor && isNaN(valor) && valor.lenght >= minimo

const validarTitulo = (valor) => validarStringConMinimo(valor, 4)
const validarPrecio = (valor) =>valor && !isNaN(valor) > 1
const validarDescripcion = (valor) => validarStringConMinimo(valor, 10)
const validarCategoria = (valor) => categoriasDisponibles.includes(valor)
const validarMarca = (valor) => validarStringConMinimo(valor, 3)
const validarNegacion = (confirmacion) => confirmacion === null || confirmacion.toLowerCase() === 'cancelar' || confirmacion.toLowerCase() === 'no'

const crearObjetoConfeccion = (mensaje, error, validacion) =>{
    return {
        mensaje: mensaje,
        error: error,
        validacion: validacion
    }
}

const DATOS_PRODUCTO = {
    TITULO: crearObjetoConfeccion(
        'Ingrese un titulo min (4) caracteres:',
        'Error al ingresar titulo, ingrese nuevamente:',
        validarTitulo
    ),
    PRECIO: crearObjetoConfeccion(
        'Ingrese un precio positivo mayor a $ 1',
        'Error al ingresar precio, ingrese nuevamente',
        validarPrecio
    ),
    DESCRIPCION: crearObjetoConfeccion(
        'Ingrese una descripcion min (10) caracteres',
        'Error al ingresar descripcion, ingrese nuevamente',
        validarDescripcion
    ),
    CATEGORIA: crearObjetoConfeccion(
        'Ingrese una categoria valida (categorias validas: ' + categoriasDisponibles.join(',') +')',
        'Error al ingresar una categoria, (categorias validas: ' + categoriasDisponibles.join(',') +')',
        validarCategoria
    ),
    MARCA: crearObjetoConfeccion(
        'Ingrese una marca min (3) caracteres',
        'Error al ingresar marca, ingrese nuevamente',
        validarMarca
    ),
}



const solicitarDato = (objetoDeConfeccion) => {
    
    let dato = prompt(objetoDeConfeccion.mensaje)
    while(!objetoDeConfeccion.validacion(dato)){
        dato = prompt(objetoDeConfeccion.error)
    }
    return dato
}


const registraProducto = () => {
    let titulo = solicitarDato(DATOS_PRODUCTO.TITULO)
    let precio = solicitarDato(DATOS_PRODUCTO.PRECIO)
    let descripcion = solicitarDato(DATOS_PRODUCTO.DESCRIPCION)
    let categoria = solicitarDato(DATOS_PRODUCTO.CATEGORIA)
    let marca = solicitarDato(DATOS_PRODUCTO.MARCA)

    let mensajeConfirmacion =`
    Esta seguro de confirmar el producto:
    Titulo: ${titulo}
    Precio: ${precio}
    Descripcion: ${descripcion}
    Categoria: ${categoria}
    Marca: ${marca}
    `
    let confirmacion = prompt(mensajeConfirmacion)
    if(validarNegacion(confirmacion)){
        registraProducto()
    }
    else{
        const producto = {
            titulo,
            precio,
            descripcion,
            categoria,
            marca
        }
        console.log(producto)
    }

}

registraProducto()

































































