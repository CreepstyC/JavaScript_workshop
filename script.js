const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const direccion = document.getElementById('direccion')

form.addEventListener('submit', (e) => {
    let messages = []

    if (nombre.value.length >= 25) {
        messages.push('El nombre supera la cantidad de caracteres posibles')
    }

    if (apellido.value.length >= 25) {
        messages.push('El apellido supera la cantidad de caracteres posibles')
    }

    // if (direccion.value != 'cll'+'') {
    //     messages.push('La dirección debe comenzar por cll')
    // }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(',\n')
    }
}) 