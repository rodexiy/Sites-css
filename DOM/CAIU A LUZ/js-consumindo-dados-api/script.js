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


// const consultaViaCEP = fetch("https://viacep.com.br/ws/89255250/json/")
//     .then(resposta => resposta.json())
//     .then(r =>{ 
//         if (r.erro) { 
//             throw Error("Esse CEP não existe");
//         }else {
//             console.log(r);
//         }
//     })
//     .catch(err => console.log(err))
//     .finally(mensagem => console.log("Processamento concluido"));



async function buscaEndereco(cep) {
    try {
        const _consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const consultaCEP = await _consultaCEP.json()

        if (consultaCEP.erro) {
            console.log("Ocorreu um erro")
            throw Error("CEP não existe")
        }
        
        inputBairro.value = consultaCEP.bairro
        inputCidade.value = consultaCEP.localidade
        inputEstado.value = consultaCEP.uf
        inputEndereco.value = consultaCEP.logradouro

        return consultaCEP
    } catch(erro){
        
        return "error"
    }

}



inputCEP.addEventListener("keypress", function(key){
    if (key.code == "Enter") {
        let cep = inputCEP.value
        let consultaCEP = buscaEndereco(cep)


    }
})