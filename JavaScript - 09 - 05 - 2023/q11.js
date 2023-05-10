let carro = {
    Marca: "Toyota",
    Modelo: "Corolla",
    Ano: 2006,

    getIdade: function(){
        return 2023 - this.Ano
    },

    getDescricao: function(){
        return this.Modelo + " é um carro da "+ this.Marca + " do ano de " + this.Ano + " e tem " + this.getIdade() + " anos de idade!"
    }
}

console.log(carro)
console.log(carro.Marca)
carro.Ano = 2025
console.log("Idade: "+ carro.getIdade())
console.log(carro.getDescricao())