function retornaIguais(array1, array2){
    let array3 = []

    for (let numero = 0; numero < array1.length; numero++){
        if (array2.includes(array1[numero])){
            array3.push(array1[numero])
        }
    }

    return array3
}

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let array2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

console.log(retornaIguais(array1, array2))