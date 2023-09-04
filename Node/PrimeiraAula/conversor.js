let conversor = {}

conversor.celsiusToFahrenheit = function(C) {
    return (9/5)*C + 32
} 

conversor.fahrenheitToKelvin = function(F) {
    return (F + 459,67) * 5/9
} 

conversor.kelvinToCelsius = function(K) {
    return K - 273.1
} 


let keys = Object.keys(conversor)
for (i = 0; i < keys.length; i++) {
    module.exports[keys[i]] = conversor[keys[i]]
}