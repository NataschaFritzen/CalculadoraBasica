function efetuaOperacao() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operador = document.getElementById("operador").value;
    let resultado;

    switch (operador) {   // Testar valor da variavel operador //

        case "+":        //"Case" significa caso //
            resultado = num1 + num2;
            break;

        case "-":
            resultado = num1 - num2;
            break;

        case "*":
            resultado = num1 * num2;
            break;

        case "/":
            if (num2 === 0) {          // "if" se ...//
                resultado = "Divisão por 0 é inválida!";
            } else {                  // "else" se não...//
                resultado = num1 / num2;
            }
            break;

        default:                     //Caso não for //
            resultado = "Operador inválido!";
    }

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}
