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


function adicionar_animal(){
    const forms_animal = document.getElementById('formes-animal');
    const nome_animal = document.getElementById('nome');
    const idade_animal = document.getElementById('idade');
    const genero_animal = document.getElementById('genero');
    const cor_animal = document.getElementById('cor');
    
    forms_animal.onsubmit = async (event) => {
        event.preventDefault() // No reload page
        await axios.post('http://127.0.0.1:8000/animals', {
            name: nome_animal.value,
            age: idade_animal.value,
            genre: genero_animal.value,
            color: cor_animal.value
        })
        listar_animais()  
    }
}

function excluir_animal() {
    const forms_excluir_animals = document.getElementById('excluir_animals')
    var id_animal = parseInt(document.getElementById('id_animal').value);

    forms_excluir_animals.onsubmit = async (event) => {
        event.preventDefault();
        const msg = await axios.delete(`http://127.0.0.1:8000/animals/${id_animal}`);
        listar_animais()

    }
    
}

function main() {
    adicionar_animal();
    listar_animais();
    excluir_animal();
}

main()