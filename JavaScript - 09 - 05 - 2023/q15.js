let frutas = ["maça", "banana", "laranja"]

console.log(frutas[1]);
frutas.push("manga")
frutas.splice(0, 1)
console.log(frutas.length)

for (let i = 0; i < frutas.length; i ++){
    console.log(frutas[i])
}

console.log("--------ForEach-------")
frutas.forEach(fruta => {
    console.log(fruta)
});

const tamanho = frutas.map((palavra) => {
    return palavra.length
})

const maiorque5 = frutas.filter((palavra) => {
    return palavra.length > 5
})


console.log(tamanho)
console.log(frutas.reduce((acumulador, numero) => {
    return acumulador + numero.length;
},0))