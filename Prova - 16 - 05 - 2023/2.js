let anterior = 0;
let atual = 1;

let soma = 0;

for (let conta = 0; atual <= 50000; conta++){
    if (atual % 2 == 0){
        soma += atual
    }

    let aux = atual
    atual += anterior
    anterior = aux
}

console.log("Soma: "+ soma)