let dataAtual = new Date().getFullYear()
let livro = {
    titulo: "O Alquimista",
    autor: "Paulo Coelho",
    anoPublicacao: 1988,

    getIdade: function(){
        return dataAtual - this.anoPublicacao
    },

    getDescricao: function(){
        return "O livro "+ this.titulo + " foi escrito por "+ this.autor + " e publicado em "+ this.anoPublicacao + "."
    }
}

console.log(livro.titulo)
livro.anoPublicacao = 1992

livro.editora = "Rocco"

console.log(livro.getIdade())

console.log(livro.getDescricao())