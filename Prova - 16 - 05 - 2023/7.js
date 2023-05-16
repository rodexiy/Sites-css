let frase = "programacao web e mobile"

let jaPrintados = []
for (let caracter = 0; caracter < frase.length; caracter++) {
    if (!jaPrintados.includes(frase[caracter])) {
        let quantidade = 0;
        for (let caracter2 = 0; caracter2 < frase.length; caracter2++) {

            if (frase[caracter] == frase[caracter2] && caracter2 != caracter) {
                jaPrintados.push(frase[caracter])
                quantidade++;
            }
        }

        if (quantidade > 1){
            console.log(frase[caracter] + " : " + quantidade)
        }
    }
}