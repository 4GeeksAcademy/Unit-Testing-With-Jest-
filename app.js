// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){

    let valueInYen = valueInDollar * 106.58
    return valueInYen;
}


const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.0062
    return valueInPound;
}



// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}
// solo un registro en consola para nosotros.
console.log(sum(7,3))
// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)



module.exports = {sum, fromEuroToDollar,fromDollarToYen,fromYenToPound};