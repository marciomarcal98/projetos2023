let conta = 0
let quantidadePessoas = 0

function receberConta() {
    conta = Number(document.querySelector("#conta").value)
    console.log(conta)
}

function receberPessoas() {
    quantidadePessoas = Number(document.querySelector("#pessoas").value)
    console.log(quantidadePessoas)
}

function receberPorcentagemGorjeta(porcentagem) {
    console.log(porcentagem)
}