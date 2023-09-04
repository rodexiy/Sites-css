let verificador = {}

verificador.isPrimo = function(number) {
    for (var i = 2; i < number; i++) {
        if(number % i === 0) {
           return false;
        }
      }
      return number !== 1;  
}

let keys = Object.keys(verificador)
for (i = 0; i < keys.length; i++) {
    module.exports[keys[i]] = verificador[keys[i]]
}