let botaoAumentar = document.getElementById("botao-aumentar")
let botaoDiminuir = document.getElementById("botao-diminuir")
let contador = document.getElementById("contador")

let valorTotal = 0

function atualizarContador() {
    contador.textContent = ": " + valorTotal + " :"
}

botaoAumentar.addEventListener("click", function(){
    valorTotal += 1
    atualizarContador()
})

botaoDiminuir.addEventListener("click", function(){
    valorTotal -= 1
    atualizarContador()
})