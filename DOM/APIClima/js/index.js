//d89d6730da884fd0bda225616231107
const temperatura = document.getElementById("temperatura")
const umidade = document.getElementById("umidade")
const nuvens = document.getElementById("nuvens")
const vento = document.getElementById("vento")
const dirVento = document.getElementById("dirVento")
const uv = document.getElementById("uv")
const nomeCidade = document.getElementById("nomeCity")

async function pegarClima() {

    try {
        let cidade = input.value
        let link = await fetch(`https://api.weatherapi.com/v1/current.json?key=d89d6730da884fd0bda225616231107&q=${cidade}&aqi=no`)

        const dados = await link.json()

        console.log(dados)
        nomeCidade.textContent = input.value

        const clima = dados.current

        console.log(clima)

        umidade.textContent = clima.humidity + "%"
        temperatura.textContent = clima.temp_c+ "ºC"
        nuvens.textContent = clima.condition.text
        vento.textContent = clima.wind_kph + "kmh"
        dirVento.textContent = clima.wind_dir
        uv.text = clima.uv



    }catch{
        throw Error("Erro")
    }
}



const input = document.getElementById("card-input")
const botao = document.getElementById("card-button")


botao.addEventListener("click", pegarClima)
input.addEventListener("keydown", function(key) {
    if (key == "Enter") {
        console.log("pegar clima")
        pegarClima()
    }
})
