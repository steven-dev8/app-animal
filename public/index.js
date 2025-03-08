async function listar_animais() {
    const content = await axios.get('http://127.0.0.1:8000/animals') // Endpoint
    const animais = content.data
    
    Object.values(animais).forEach(valor => {
        const lista = document.getElementById('lista-animais')
        const item = document.createElement('li')
        item.innerText = valor.name
        lista.appendChild(item)
    })
}

listar_animais()