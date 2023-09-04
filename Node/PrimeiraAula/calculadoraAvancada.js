let calculadora = {}

calculadora.sum = function(x, y) {
    return x + y
};

calculadora.sub = function(x, y) {
    return x - y
};

calculadora.mult = function(x, y) {
    return x * y
};

calculadora.div = function(x, y) {
    return x / y
};

calculadora.calculate = function(equation) {
    
    let operator = "none"

    let operators = ['+', '-', '*', '/']
    for (i = 0; i < equation.length; i++) {
        if (operators.includes(equation.charAt(i))) {
            operator = equation.charAt(i)
            break
        }
    }

    if (operator == "none") {
        return "Inválido"
    }

    let splitted = equation.split(operator)
    let x = parseFloat(splitted[0])
    let y = parseFloat(splitted[1])
    let result

    switch(operator) {
        case '+':
            result = calculadora.sum(x, y)
            break
        case '-':
            result = calculadora.sub(x, y)
            break
        case '*':
            result = calculadora.mult(x, y)
            break
        case '/':
            result = calculadora.div(x, y)
            break
        default:
            console.log(operator)
    }

    return result
}





let keys = Object.keys(calculadora)
for (i = 0; i < keys.length; i++) {
    module.exports[keys[i]] = calculadora[keys[i]]
}