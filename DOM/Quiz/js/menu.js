let Rank = JSON.parse(localStorage.getItem("Rank")) || []
const tabela = document.getElementById("tabela")


function ordenar() {
    
    for (let i = 0; i < Rank.length; i++) {
        for (let j = 0; j < i; j++) {
            if (Rank[i].Pontos > Rank[j].Pontos) {
                let aux = Rank[i]
                Rank[i] = Rank[j]
                Rank[j] = aux
            }
        }
    }

}

function carregarTabela() {
    ordenar()

    for (let i = 0; i < Rank.length; i++) {
        let data = Rank[i]
        let row = document.createElement("tr")
        let tdNome = document.createElement("td")
        let tdPontos = document.createElement("td")
    
    
        tdNome.textContent = data.Nome
        tdPontos.textContent = data.Pontos

        row.appendChild(tdNome)
        row.appendChild(tdPontos)

        tabela.append(row)
    }

}
carregarTabela()