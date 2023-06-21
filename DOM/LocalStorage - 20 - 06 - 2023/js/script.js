function newUserData() {
    let UserData = {
        nomeSalvo: "",
        temaCor: "modo-claro",
        listaDeCompras: []
    }

    return UserData
}


let UserData = localStorage.getItem("UserData") ? JSON.parse(localStorage.getItem("UserData")) : newUserData()

function clearData() {
    UserData = newUserData()
    localStorage.clear()
}

document.body.className = UserData.temaCor || "modo-claro"

let listaCompras = document.getElementById("lista-compras")
let botaoAdicionar = document.getElementById("adicionar-btn")
let inputItem = document.getElementById("item-input")

botaoAdicionar.addEventListener("click", function() {
    let nomeItem = inputItem.value
    if (nomeItem == "") {return}

    let index = UserData.listaDeCompras.length
    UserData.listaDeCompras[index] = nomeItem
    inputItem.value = ""

    adicionarItemNaLista(nomeItem, index)
})

function adicionarItemNaLista(nomeItem, index) {

    let itemLista = document.createElement("li")
    itemLista.innerText = nomeItem
    listaCompras.appendChild(itemLista)

    itemLista.addEventListener("click", function() {
        UserData.listaDeCompras.splice(index, 1)
        itemLista.remove()
    })
}

for (let index = 0; index < UserData.listaDeCompras.length; index++) {
    adicionarItemNaLista(UserData.listaDeCompras[index])
}











let botaoTema = document.getElementById("toggle")
botaoTema.addEventListener("click", function(){
    console.log(UserData.temaCor)
    if (UserData.temaCor == "modo-claro") {
        UserData.temaCor = "modo-escuro" 
    }else {
        UserData.temaCor = "modo-claro"
    }

    document.body.className = UserData.temaCor
})


let areaNome = document.getElementById("nome")
function salvarNome() {
    let nome = areaNome.value
    UserData.nomeSalvo = nome

}

let mensagem = document.getElementById("mensagem")
function recuperarNome() {
    let nome = UserData.nomeSalvo 
    mensagem.textContent = nome
}

recuperarNome()


window.addEventListener('beforeunload', function (e) {
    localStorage.setItem("UserData", JSON.stringify(UserData))
});