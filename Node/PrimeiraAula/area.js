let area = {}

area.square = function(x) {
    return x * x
}

area.circle = function(radius) {
    return (radius^2) * Math.PI 
}

area.triangle = function(x, y) {
    return (x * y) / 2
}



let keys = Object.keys(area)
for (i = 0; i < keys.length; i++) {
    module.exports[keys[i]] = area[keys[i]]
}