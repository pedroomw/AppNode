import countryToCurrency from "country-to-currency";

function obtenerMoneda(codigoPais) {
    const moneda = countryToCurrency[codigoPais];
    
    if (!moneda) {
        return "No encontrada";
    } else { 
        return moneda
    }
}

export {obtenerMoneda}