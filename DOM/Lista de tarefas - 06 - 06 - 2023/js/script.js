const botaoAdicionar = document.getElementById("botao-adicionar")
const listaTarefas = document.querySelector("#lista-tarefas")
const campoTarefa = document.querySelector("#campo-tarefa")

function newUserData() {
    let userData = {
        tarefas: []
    }

    return userData
}

let UserData = localStorage.getItem("UserData") ? JSON.parse(localStorage.getItem("UserData")) : newUserData()


function newTarefa(titulo, descricao){
    let tarefa = {
        titulo: titulo,
        descricao: descricao,
    }

    return tarefa
}

function carregarTarefa(titulo, indice, descricao) {
    
}

function criarTarefa(_titulo, indice, descricao) {
    const titulo = _titulo ? campoTarefa.value : _titulo

    if (titulo.length == 0) {
        return console.log("O campo não pode ser vazio!")
    }

    let elemento = document.createElement('li')
    elemento.className = "tarefa"
    elemento.textContent = titulo
    listaTarefas.appendChild(elemento)


    let botaoRemover = document.createElement('a')
    botaoRemover.textContent = "Remover",
    botaoRemover.className = "removerTarefa",

    elemento.appendChild(botaoRemover)

    botaoRemover.onmouseover = function(){
        elemento.style.borderColor = "#BE171C"
        botaoRemover.style.backgroundColor  = "#BE171C"
        botaoRemover.style.borderColor  = "#BE171C"
    }

    botaoRemover.onmouseout = function(){
        elemento.style.borderColor = "#5f61ff"
        botaoRemover.style.backgroundColor  = "#5f61ff"
        botaoRemover.style.borderColor  = "#5f61ff"
    }
    
    botaoRemover.onclick = function(){
        elemento.remove()
        UserData.tarefas.splice(indice, 1)
    }


    
}

botaoAdicionar.addEventListener("click", criarTarefa)

UserData.tarefas.forEach(tarefa => {
    criarTarefa(tarefa.titulo)
});

window.addEventListener('beforeunload', function (e) {
    localStorage.setItem("UserData", JSON.stringify(UserData))
});