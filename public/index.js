async function listar_animais() {
    const content = await axios.get('http://127.0.0.1:8000/animals') // Endpoint
    const animais = content.data
    const lista = document.getElementById('lista-animais')

    lista.innerHTML = ''
    
    Object.entries(animais).forEach(([chave, valor]) => {
        const item = document.createElement('li')
        item.innerText = `${chave}, ${valor.name}`
        lista.appendChild(item)
    })
}

document.getElementById('btn_enviar').addEventListener("click", async (event) => {
    event.preventDefault() // No reload page
    const nome_animal = document.getElementById('nome');
    const idade_animal = document.getElementById('idade');
    const genero_animal = document.getElementById('genero');
    const cor_animal = document.getElementById('cor');
    await axios.post('http://127.0.0.1:8000/animals', {
        name: nome_animal.value,
        age: idade_animal.value,
        genre: genero_animal.value,
        color: cor_animal.value
    })
    listar_animais()  
})

document.getElementById('btn_excluir').addEventListener('click', async (event) => {
    event.preventDefault();
    const forms_excluir_animals = document.getElementById('excluir_animals')
    const id_animal = parseInt(document.getElementById('id_animal').value);
    const msg = await axios.delete(`http://127.0.0.1:8000/animals/${id_animal}`);
    listar_animais()
})

document.getElementById('btn_consulta').addEventListener('click', async () => {
    const id = document.getElementById('id_consulta').value;
    const dados = await axios.get(`http://127.0.0.1:8000/animals/${id}`)
    const info = dados.data
    if (dados) {
        const nome = document.getElementById('nome_consulta');
        const idade = document.getElementById('idade_consulta');
        const sexo = document.getElementById('sexo_consulta');
        const cor = document.getElementById('cor_consulta');

        nome.innerText = info.name;
        idade.innerText = info.age;
        sexo.innerText = info.genre;
        cor.innerText = info.color;
    }
})

listar_animais();