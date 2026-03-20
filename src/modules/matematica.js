function Sumar(num1, num2){
    return num1 + num2;
}

function Restar(num1, num2){
    return num1 - num2;
}

function Multiplicar(num1, num2){
    return num1 * num2;
}

function Dividir(num1, num2){
    if(num2 == 0){
        return 0; } else { 
    if (num1 != 0){
        return num1 / num2
    } else { return "Error: No se puede dividir por cero"  }}}

const pi = 3.1416;

export {Sumar, Restar, Multiplicar, Dividir, pi};