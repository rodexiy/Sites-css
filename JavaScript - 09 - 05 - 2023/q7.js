function filtarNumeros(array, referencia){
    novaArray = []

    for (let i = 0; i < array.length; i++){
        if (array[i] > referencia){
            novaArray.push(i)
        }
    }

    return novaArray
}

console.log(filtarNumeros([1, 5, 6, 7, 5, 4, 6, 7, 8, 9], 6))