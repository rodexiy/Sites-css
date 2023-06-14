let bmudarCorFundo = document.getElementById("mudarCorDeFundo")
let bmudarCorTitulo = document.getElementById("mudarCorTitulo")
let bmudarCorParagrafo = document.getElementById("mudarCorParagrafo")
let bmudarFonteTitulo = document.getElementById("mudarFonteTitulo")
let bmudarFonteParagrafo = document.getElementById("mudarFonteParagrafo")
let bmudarTudo = document.getElementById("mudarTudo")
let paragrafo = document.getElementById("paragrafo")
let titulo = document.getElementById("titulo")

let logCorFundo = document.getElementById("logCorFundo")
let logCorTitulo = document.getElementById("logCorTitulo")
let logCorParagrafo = document.getElementById("logCorParagrafo")
let logFonteTitulo = document.getElementById("logFonteTitulo")
let logFonteParagrafo = document.getElementById("logFonteParagrafo")

const fontes = [
    'Bebas Neue',
    'Cinzel',
    'Comfortaa',
    'Faster One',
    'Gotu',
    'Halant',
    'Kaisei HarunoUmi',
    'M PLUS Rounded 1c',
    'Marcellus',
    'Mate SC',
    'Montserrat',
    'Nunito Sans',
    'Press Start 2P',
    'Reggae One',
    'Scope One',
];

function fonteAleatoria() {
    return fontes[parseInt(Math.random() * fontes.length)]
}

function corAleatoria(){
  const max_hex = 0xFFFFFF;

  let codigo = '#' + parseInt((Math.random() * max_hex))
  .toString(16)
  .padStart(6, '0');

  return codigo.toUpperCase()
}

function mudarCorDeFundo() {
    let cor = corAleatoria()
    document.body.style.backgroundColor = cor
    logCorFundo.textContent = "Cor de fundo: "+ cor
}

function mudarCorTitulo() {
    let cor = corAleatoria()
    titulo.style.color = cor
    logCorTitulo.textContent = "Cor do titulo: "+ cor
}

function mudarCorParagrafo() {
    let cor = corAleatoria()
    paragrafo.style.color = cor
    logCorParagrafo.textContent = "Cor do paragrafo: "+ cor
}

function mudarFonteTitulo() {
    let fonte = fonteAleatoria()
    titulo.style.fontFamily = fonte
    console.log(typeof fonte)
    logFonteTitulo.textContent   = "Fonte do titulo: "+ fonte
}

function mudarFonteParagrafo() {
    let fonte = fonteAleatoria()
    paragrafo.style.fontFamily = fonte
    logFonteParagrafo.textContent = "Fonte do paragrafo: "+ fonte
}

function mudarTudo(){
    mudarCorDeFundo()
    mudarCorTitulo()
    mudarCorParagrafo()
    mudarFonteTitulo()
    mudarFonteParagrafo()
}

bmudarCorFundo.addEventListener("click", mudarCorDeFundo)
bmudarCorTitulo.addEventListener("click", mudarCorTitulo)
bmudarCorParagrafo.addEventListener("click", mudarCorParagrafo)
bmudarFonteTitulo.addEventListener("click", mudarFonteTitulo)
bmudarFonteParagrafo.addEventListener("click", mudarFonteParagrafo)
bmudarTudo.addEventListener("click", mudarTudo)