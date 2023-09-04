const verificador = require("./verificador")
const calculadora = require("./calculadora")
const conversor = require("./conversor")
const area = require("./area")
const calculadoraAvancada = require("./calculadoraAvancada")

//Verificar primo
console.log(verificador.isPrimo(7))

//Calculadora Média
console.log(calculadora.media([5,7,4,2,7,9,12,24]))

//Conversor temperatura
console.log(conversor.celsiusToFahrenheit(13))
console.log(conversor.fahrenheitToKelvin(21))
console.log(conversor.kelvinToCelsius(34))

//Calculadora Area
console.log(area.square(2))
console.log(area.circle(4))
console.log(area.triangle(3, 4))

//Calculadora Avançada
console.log(calculadoraAvancada.calculate("2 + 5 - 5"))
