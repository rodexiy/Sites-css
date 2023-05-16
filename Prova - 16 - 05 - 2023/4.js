let Frutas = ["maça", "banana", "laranja"]

console.log(Frutas)

//adiciona manga e abacaxi ao final da array
Frutas.push("manga")
Frutas.push("abacaxi")

console.log(Frutas)

//remove a primeira fruta
Frutas.shift()

console.log(Frutas)

//Adiciona tangerina e abacate entre banana e laranja
Frutas.splice(1, 0, "tangerina", "abacate")
Frutas.splice(0, 0, "abacaxi")

console.log(Frutas.length)

//Array com tamanho das frutas
const tamanho = Frutas.map((fruta) => {
    return fruta.length
})

console.log(tamanho)

//Filtra as frutas maiores que 5
const maiores = Frutas.filter((fruta) => {
    return fruta.length > 5
})

console.log(maiores)
console.log(Frutas)