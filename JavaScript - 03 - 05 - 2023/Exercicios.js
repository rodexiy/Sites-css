//Exercícios para treinar a sintaxe do Javascript:

//1 - Verificar se um número é positivo, negativo ou zero.
const numeroPositivoOuNegativo = 0;

if (numeroPositivoOuNegativo > 0){
    console.log("Positivo")
}else if(numeroPositivoOuNegativo < 0){
    console.log("Negativo")
}else{
    console.log("Zero")
}

//2 - Calcular a média de 3 notas e mostrar a situação do aluno (aprovado, reprovado ou em exame).
const n1 = 5
const n2 = 7
const n3 = 9
const media = (n1 + n2 + n3) / 3

if (media >= 7){
    console.log("Aprovado")
}else if(media <= 6){
    console.log("Exame")
}else{
    console.log("Reprovado")
}

//3 - Mostrar os múltiplos de 3 entre 1 e 30.
for (let fator = 1; fator <= 30; fator++){
    console.log("3 x " + fator +" = "+  fator * 3)
}

//4 - Calcular o fatorial de um número.
let numeroFatorial = 5;
let FatorialFinal = 1;
for (let mult = 1; mult <= numeroFatorial; mult++ ){
    FatorialFinal *= mult
}

console.log("O fatorial de "+ numeroFatorial + " é: "+ FatorialFinal)

//5 - Verificar se um ano é bissexto.
let ano = 2020;
if (ano / 4 == Math.round(ano / 4)){
    console.log("O ano é bissexto!")
}else{
    console.log("O ano não é bissexto")
}

//6 - Converter uma temperatura em Celsius para Fahrenheit.
let temperaturaC = 40;
let temperaturaF = (temperaturaC * 9/5) + 32

console.log("A temperatura em fahrenheit é: "+ temperaturaF)


//7 - Verificar se uma palavra é um palíndromo.
let palavra = "rua"
let palindromo = true

for (let caractere = 0; caractere < palavra.length; caractere++){
    if (palavra.charAt(caractere) != palavra.charAt(palavra.length - 1 - caractere)){
        palindromo = false
    }   
}

if (palindromo){
    console.log("A palavra "+ palavra+ " é palindromo!")
}else{
    console.log("A palavra "+ palavra+ " não é palindromo!")
}
