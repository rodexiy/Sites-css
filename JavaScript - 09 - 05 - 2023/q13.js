function DiferencaDeDias(data1, data2){
    return data1.getDate() - data2.getDate()
}

let data1 = new Date()
data1.setDate(20)
let data2 = new Date()
data2.setDate(15)
console.log(DiferencaDeDias(data1, data2) + " Dias")