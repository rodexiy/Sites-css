const imagemCarro = document.getElementById("imagemCarro")
const respostas = document.getElementById("respostas")
const comecar2 = document.getElementById("comecar2")
const divNome = document.getElementById("divNome")
const jogo = document.getElementById("jogo")

let Pontos = 0;
let Nome = ""

// localStorage.clear()
let Rank = localStorage.getItem("Rank") ? JSON.parse(localStorage.getItem("Rank")) : []


console.log(Rank)
let questaoAtual = 1;

const questoes = {
    [1]: {
        Imagem: "/Assets/accord.jpg",
        Respostas: [
            "Chevette",
            "Accord",
            "Civic",
            "Prelude"
        ],
        Correta: "Accord",
        Pontos: 1
    },

    [2]: {
        Imagem: "/Assets/488.png",
        Respostas: [
            "F40",
            "LaFerrari",
            "488",
            "SF90"
        ],
        Correta: "488",
        Pontos: 1
    },

    [3]: {
        Imagem: "/Assets/Evo7.jpg",
        Respostas: [
            "Evo 7",
            "Evo X",
            "Evo 5",
            "Evo 3"
        ],
        Correta: "488",
        Pontos: 1
    },

    [3]: {
        Imagem: "/Assets/ZL1.webp",
        Respostas: [
            "ZL1",
            "GT 2000",
            "GTR R35",
            "Eclipse"
        ],
        Correta: "ZL1",
        Pontos: 1
    },
}


function Acertou() {
    Pontos += questoes[questaoAtual].Pontos

}

function Ultima() {
    let data = {
        Nome: Nome,
        Pontos: Pontos
    };

    Rank.push(data)
    window.location.href = "/index.html"
}


function RespostaEscolhida(resposta) {
    let respostaCorreta = questoes[questaoAtual].Correta

    if (respostaCorreta == resposta) {
        Acertou()
    }

    

    if (questaoAtual== Object.keys(questoes).length) {
        Ultima()
    }else {
        questaoAtual += 1
        carregar()
    }

}


function carregar() {
    imagemCarro.src = questoes[questaoAtual].Imagem

    const resposta = document.querySelectorAll('.resposta');

    resposta.forEach(resposta => {
        resposta.remove();
    });

    for (let i = 0; i < questoes[questaoAtual].Respostas.length; i++) {
        let nomeCarro = questoes[questaoAtual].Respostas[i]
        let botaoResposta = document.createElement("p") 
        botaoResposta.className = "resposta"
        botaoResposta.textContent = nomeCarro
        respostas.appendChild(botaoResposta)

        botaoResposta.addEventListener("click", function() {
            RespostaEscolhida(nomeCarro)
        })
        
    }
}


function salvarNome(nome) {

    if (nome.length > 0) {
        Nome = nome
        return true
    }


    return false
}


const NomeInput = document.getElementById("NomeInput")
comecar2.addEventListener("click", function() {
    if (salvarNome(NomeInput.value)) {
        divNome.style.display = "none"
        jogo.style.display = "flex"

        carregar()

    }
    
    
})


window.addEventListener('beforeunload', function (e) {
    localStorage.setItem("Rank", JSON.stringify(Rank))
});