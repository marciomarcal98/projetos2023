let conta = 0
let gorjeta = 0

function receberConta() {
    const contaRecebida = document.querySelector("#conta").value
    conta = Number(contaRecebida)
}

function receberGorjeta(porcentagem) {
    gorjeta = porcentagem
    document.querySelector(`input[value="${porcentagem}%"]`).classList.add("button-selected")
}