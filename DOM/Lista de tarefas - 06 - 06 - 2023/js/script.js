const botaoAdicionar = document.getElementById("botao-adicionar")
const listaTarefas = document.querySelector("#lista-tarefas")
const campoTarefa = document.querySelector("#campo-tarefa")

function newUserData() {
    let userData = {
        tarefas: {},
        indiceAtual: 1,
    }

    return userData
}

let UserData = localStorage.getItem("UserData") ? JSON.parse(localStorage.getItem("UserData")) : newUserData()

console.log(UserData)

function newTarefa(titulo, descricao){
    let tarefa = {
        titulo: titulo,
        descricao: descricao,
        indice: 0,
        concluida: "",
    }
    UserData.indiceAtual += 1
    tarefa.indice = UserData.indiceAtual
    

    return tarefa
}

function setConcluida(indice, value) {
    UserData.tarefas[indice].concluida = value
    console.log(UserData.tarefas[indice])
}

function adicionarTarefa() {
    const titulo = campoTarefa.value

    if (titulo.length == 0) {return};
    let descricao = ""
    console.log(titulo)

    let novaTarefa = newTarefa(titulo, descricao)
    UserData.tarefas[novaTarefa.indice] = novaTarefa

    carregarTarefa(novaTarefa)
}

function carregarTarefa(tarefa) {
    var titulo = tarefa.titulo ? tarefa.titulo : campoTarefa.value
    var indice = tarefa.indice ? tarefa.indice : UserData.indiceAtual


    let elemento = document.createElement('li')
    elemento.className = "tarefa"
    elemento.textContent = titulo
    listaTarefas.appendChild(elemento)

    let botaoRemover = document.createElement('a')
    botaoRemover.textContent = "Remover",
    botaoRemover.className = "removerTarefa",

    elemento.appendChild(botaoRemover)

    if (UserData.tarefas[indice].concluida == true) {
        elemento.classList.toggle('concluida')
        botaoRemover.classList.toggle("concluida_remover")
    }

    elemento.onclick = function() {
        if (!UserData.tarefas[indice]) {return}
        elemento.classList.toggle('concluida')
        botaoRemover.classList.toggle("concluida_remover")
    
        if (UserData.tarefas[indice].concluida != true) {
            setConcluida(indice, true)
        }else{
            setConcluida(indice, false)
        }
    }


    botaoRemover.onmouseover = function(){
        if (UserData.tarefas[indice].concluida) {return }

    }

    botaoRemover.onmouseout = function(){
        if (UserData.tarefas[indice].concluida) {return }
        elemento.style.borderColor = "#5f61ff"
        botaoRemover.style.backgroundColor  = "#5f61ff"
        botaoRemover.style.borderColor  = "#5f61ff"
    }
    
    botaoRemover.onclick = function(){
        UserData.tarefas[indice] = undefined
        elemento.remove()
    }
}

botaoAdicionar.addEventListener("click", adicionarTarefa)
campoTarefa.addEventListener("keyup", function(enter) {
    if (enter.key != "Enter") {return}

    adicionarTarefa()
})

for (const [indice, obj] of Object.entries(UserData.tarefas)) {
    console.log(indice, obj)
    carregarTarefa(obj)
}



window.addEventListener('beforeunload', function (e) {
    console.log(UserData.tarefas.length)
    if (UserData.tarefas.length == 0 ){
        UserData.tarefaAtual = 0;
    }


    localStorage.setItem("UserData", JSON.stringify(UserData))
});