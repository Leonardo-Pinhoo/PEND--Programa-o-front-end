let nome = document.querySelector("#nome").value
let cpf = document.querySelector("#cpf").value
let idade = document.querySelector("#idade").value
let idConta = document.querySelector("#idConta").value
let msgResultado = document.querySelector("#msgResultado")

class ContaBancaria {
    constructor(nome, cpf, idade, idConta, saldo) {

        this.nome = nome
        this.cpf = cpf
        this.idade = idade
        this.idConta = idConta
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor
    }

    sacar(valor) {
        if (valor > this.saldo) {
            msgResultado.style.color = 'red'
            msgResultado.textContent = "Saldo insuficiente"
            console.log("passou")
        } else {
            this.saldo -= valor
            msgResultado.style.color = 'green'
            msgResultado.textContent = "Saque realizado com sucesso!"
            console.log("N passou")
        }
    }

}


document.querySelector("#depositar").addEventListener("click", function () {
    let saldo = parseFloat(document.querySelector("#saldo").value)
    let valor = parseFloat(document.querySelector("#valor").value)
    const conta = new ContaBancaria(nome, cpf, idade, idConta, saldo)
    conta.depositar(valor)
    msgResultado.style.color = "green"
    msgResultado.textContent = "Depósito realizado com sucesso!"
})

document.querySelector("#sacar").addEventListener("click", function () {
    let saldo = parseFloat(document.querySelector("#saldo").value)
    let valor = parseFloat(document.querySelector("#valor").value)
    const conta = new ContaBancaria(nome, cpf, idade, idConta, saldo)
    conta.sacar(valor)
})

