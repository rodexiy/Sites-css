let estudante = {
    nome: "Thiago",
    idade: 15,
    nota1: 5,
    nota2: 9,
    nota3: 7,

    media: function () {
        return (this.nota1 + this.nota2 + this.nota3) / 3
    },

    situacao: function () {
        let media = this.media()
        if (media >= 7) 
            return "Aprovado"
        else
            return "Reprovado"
    }

}

console.log(estudante.nome)
console.log(estudante.media())
console.log(estudante.situacao())