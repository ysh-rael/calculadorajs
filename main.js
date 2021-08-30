//Visor -- tela onde mostrara processo e resultado
 let visor = window.document.getElementById("visor")
 let numeroClick = window.document.querySelector('.btao')
 let n = '' //primeiro valor digitado
 let nn = '' //segundo valor (digitado após a escolha da operação)
 let res = '' //resultado
 let op = '' //operações


//a variável recebe ela mesmo mais o valor do botão clicado e depois mostra no visor seu valor
    function numero(clicked_id) { 
        n += [clicked_id]
        visor.innerHTML = n
        return(n)
    }

    function operaçao(clicked_id) {
        op = clicked_id
        visor.innerHTML += clicked_id
        N = Number(n)
        n = ''
    }

//Realiza as operações
    function resultado() {
            if (op == '+') {
                //SOMAR(+)
                res = N+Number(n)
            } else if (op == '-') {
                //SUBTRAIR(-)
                res = N-Number(n)
            } else if (op == '/') {
                //DIVIDIR
                res = N/Number(n)
            } else if (op == '*') {
                //multiplicar(*)
                res = N*Number(n)
            }
            //verifica se tem mais de 15 caracteres, se sim, mostra o n° com apenas 8 casas decimais.
            if (res.toString().length > 15 ) {
                visor.innerHTML = res.toFixed(8)
                N =''
                n = ''
                alert('Desculpe, o resultado ultrapassa 15 algorismos, e por isso não pode ser analisado.')
            } else {
                visor.innerHTML = res
                n = res
            }
     }

function limpar() {
    N =''
    n = ''
    visor.innerHTML = ''
}


/*COMPLETO E FUNCIONANDO!*/

        