

const persona = {
    nombre: 'pepe',
    apellido: 'suarez',
    edad: 18
}

let respuesta = ''

for(let propiedad in persona){
    respuesta = respuesta + `${propiedad}: ${persona[propiedad]}\n`
}

console.log(respuesta)