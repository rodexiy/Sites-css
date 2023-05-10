function contarValor(arr, valor){
    let contador = 0
    console.log(valor)
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == valor){
            contador++;
        }
    }

    return contador
}

console.log("O número 5 aparece : "+ contarValor([5, 5, 3 ,5, 34, 9 , 3, 2], 5))