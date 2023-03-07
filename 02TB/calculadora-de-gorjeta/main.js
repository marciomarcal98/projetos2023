let conta = 0
let pessoas = 0
let porcentagemGorjeta = 0

function receberConta() {
    conta = Number(document.querySelector("#conta").value)
    console.log(conta)
}

function receberPessoas() {
    pessoas = Number(document.querySelector("#conta").value)
    console.log(pessoas)
}
                                
function receberPorcentagemGorjeta(valor) {
    if (valor === 'custom') {
        porcentagemGorjeta = Number(document.querySelector("#gorjeta").value)
    } else {
        porcentagemGorjeta = valor
    }

    console.log(porcentagemGorjeta)
}