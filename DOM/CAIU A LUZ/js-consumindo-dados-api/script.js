const inputNome = document.getElementById("nome")
const inputNascimento = document.getElementById("nascimento")
const inputTelefone = document.getElementById("telefone")
const inputEmail = document.getElementById("email")
const inputCEP = document.getElementById("cep")
const inputEndereco = document.getElementById("endereco")
const inputNumero = document.getElementById("numero")
const inputComplemento = document.getElementById("complemento")
const inputBairro = document.getElementById("bairro")
const inputCidade = document.getElementById("cidade")
const inputEstado = document.getElementById("estado")

const botaoEnviar = document.getElementById("enviar")

const divErro = document.getElementById("erro")



divErro.innerHTML = ""
function errorMessage(message) {
    divErro.style.display = "block"
    divErro.innerHTML = message
}

async function buscaEndereco(cep) {
    try {
        const _consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const consultaCEP = await _consultaCEP.json()

        if (consultaCEP.erro) {
            errorMessage("CEP não existe")
            throw Error("CEP não existe")
        }
        
        inputBairro.value = consultaCEP.bairro
        inputCidade.value = consultaCEP.localidade
        inputEstado.value = consultaCEP.uf
        inputEndereco.value = consultaCEP.logradouro

        return consultaCEP
    } catch(erro){
        errorMessage("CEP inválido")
        return "error"
    }

}



inputCEP.addEventListener("keypress", function(key){
    if (key.code == "Enter") {
        let cep = inputCEP.value
        let consultaCEP = buscaEndereco(cep)


    }
})