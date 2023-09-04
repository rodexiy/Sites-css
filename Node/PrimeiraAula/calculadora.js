let calculadora = {}

calculadora.media = function(arrayNumeros) {
    let soma = 0

    arrayNumeros.forEach(numero => {
        soma += numero
    });

    return soma / arrayNumeros.length
}

let keys = Object.keys(calculadora)
for (i = 0; i < keys.length; i++) {
    module.exports[keys[i]] = calculadora[keys[i]]
}