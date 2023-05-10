function calcularMedia(Media){
    let soma = 0;
    for(var i = 0; i < Media.length; i++) {
        soma += Media[i];
    }

    return soma / Media.length
}

console.log("Média: "+ calcularMedia([1, 5, 7, 4, 6, 9]))

