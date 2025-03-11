# 🐾 App Animal  

Este é um projeto simples de integração entre **frontend e backend**, onde desenvolvi tanto a interface quanto a API.  
A aplicação permite cadastrar, excluir, listar e pesquisar animais.  

## 🚀 Tecnologias utilizadas  

- **Frontend:** HTML, CSS e JavaScript puro  
- **Backend:** Python com FastAPI  
- **Banco de Dados:** `dict` em memória (dados não persistem ao reiniciar o servidor)  

## 📌 Funcionalidades  

1. **Adicionar um animal** (nome, idade, gênero e cor)  
2. **Excluir um animal** pelo ID  
3. **Listar todos os animais** cadastrados em tempo real  
4. **Pesquisar um animal específico** pelo ID  

## 🛠 Como executar o projeto  

### 1️⃣ Clonar o repositório  

```bash
git clone https://github.com/steven-dev8/app-animal.git
cd app-animal
```
### 2️⃣ Criar e ativar o ambiente virtual

```bash
python -m venv venv
# Ativar no Windows
venv\Scripts\activate
# Ativar no Linux/Mac
source venv/bin/activate
```
### 3️⃣ Instalar as dependências

```bash
pip install -r requirements.txt
```

### 4️⃣ Iniciar o servidor FastAPI

```bash
uvicorn src.server:app --reload
```

### 5️⃣ Abrir o frontend

**Basta abrir o arquivo public/index.html no navegador.**

## Observações
- O "banco de dados" utilizado é um dicionário Python (`dict`), ou seja, os dados **não** persistem quando o servidor é reiniciado.
- Certifique-se de ter o **Python 3.8+** instalado.

## Melhorias Futuras
- Implementar um banco de dados para persistência dos dados.
- Melhorar o design e usabilidade do front-end.
- Criar testes automatizados para a API.
