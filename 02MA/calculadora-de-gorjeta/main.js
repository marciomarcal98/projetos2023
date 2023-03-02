let conta = 0
let pessoas = 0
let porcentagemGorjeta = 0

function receberConta() {
    conta = Number(document.querySelector("#conta").value)
}

function receberPessoas() {
    pessoas = Number(document.querySelector("#pessoas").value)
}

function receberPorcentagem(porcentagem) {
    if (porcentagem === 0) {
        porcentagemGorjeta = Number(document.querySelector("#gorjeta").value)
    } else {
        porcentagemGorjeta = porcentagem
    }

    console.log(porcentagemGorjeta)
}