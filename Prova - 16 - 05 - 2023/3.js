function imprimirPrimos() {
    for (let numero = 2; numero <= 100; numero++){
        let dividiu = false
        for (let contador = 2; contador < numero; contador++) {
            if (numero % contador == 0){
                dividiu = true
            } 
        }

        if (!dividiu){
            console.log("Primo: "+ numero)
        }
    }
}


imprimirPrimos()
