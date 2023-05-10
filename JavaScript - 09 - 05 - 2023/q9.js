function contarVogais(palavra){
    let contador = 0
    const vogais = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < palavra.length; i++){
        if (vogais.includes(palavra.charAt(i))){
            contador++
        }
    }
    return contador
}

console.log("A palavra Ratue tem: " + contarVogais("Ratue") + " Vogais")