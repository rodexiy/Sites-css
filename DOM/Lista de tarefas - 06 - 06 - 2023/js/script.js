const botaoAdicionar = document.getElementById("botao-adicionar")
const listaTarefas = document.querySelector("#lista-tarefas")
const campoTarefa = document.querySelector("#campo-tarefa")


function newUserData() {
    let userData = {
        tarefas: {}
    }

    return userData
}

let UserData = localStorage.getItem("UserData") ? JSON.parse(localStorage.getItem("UserData")) : newUserData()

console.log(UserData)

function newTarefa(titulo, descricao){
    let tarefa = {
        titulo: titulo,
        descricao: descricao,
        concluida: "",
    }

    return tarefa
}

function setConcluida(titulo, value) {
    UserData.tarefas[titulo].concluida = value
    console.log(UserData.tarefas[titulo])
}

function adicionarTarefa() {
    const titulo = campoTarefa.value
    let descricao = ""
    console.log(titulo)

    let novaTarefa = newTarefa(titulo, descricao)
    UserData.tarefas[titulo] = novaTarefa

    carregarTarefa(titulo, descricao)
}

function carregarTarefa(tarefa) {
    var titulo = tarefa.titulo ? tarefa.titulo: campoTarefa.value

    if (titulo.length == 0) {return}

    let elemento = document.createElement('li')
    elemento.className = "tarefa"
    elemento.textContent = titulo
    listaTarefas.appendChild(elemento)

    let botaoRemover = document.createElement('a')
    botaoRemover.textContent = "Remover",
    botaoRemover.className = "removerTarefa",

    elemento.appendChild(botaoRemover)

    if (UserData.tarefas[titulo].concluida == true) {
        elemento.classList.toggle('concluida')
        botaoRemover.classList.toggle("concluida_remover")
    }

    elemento.onclick = function() {
        if (!UserData.tarefas[titulo]) {return}
        elemento.classList.toggle('concluida')
        botaoRemover.classList.toggle("concluida_remover")
    
        if (UserData.tarefas[titulo].concluida != true) {
            setConcluida(titulo, true)
        }else{
            setConcluida(titulo, false)
        }
    }


    botaoRemover.onmouseover = function(){
        if (UserData.tarefas[titulo].concluida) {return }

    }

    botaoRemover.onmouseout = function(){
        if (UserData.tarefas[titulo].concluida) {return }
        elemento.style.borderColor = "#5f61ff"
        botaoRemover.style.backgroundColor  = "#5f61ff"
        botaoRemover.style.borderColor  = "#5f61ff"
    }
    
    botaoRemover.onclick = function(){
        UserData.tarefas[titulo] = undefined
        elemento.remove()
    }
}

botaoAdicionar.addEventListener("click", adicionarTarefa)
campoTarefa.addEventListener("keyup", function(enter) {
    if (enter.key != "Enter") {return}

    adicionarTarefa()
})

for (const [nome, obj] of Object.entries(UserData.tarefas)) {
    console.log(nome, obj)
    carregarTarefa(obj)
}



window.addEventListener('beforeunload', function (e) {
    localStorage.setItem("UserData", JSON.stringify(UserData))
});