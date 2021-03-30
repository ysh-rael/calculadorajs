let valor
let resultado

function botao(numeros) {
    valor = document.calculadora.tela.value += numeros;
}

function limparTela() {
    document.calculadora.tela.value = "";    
}

function igual() {
    resultado = eval(valor);
    document.calculadora.tela.value = resultado;  
}

function deleta() {
    let calculo = document.calculadora.tela.value;
    document.calculadora.tela.value = calculo.substring(0, calculo.length-1);
}