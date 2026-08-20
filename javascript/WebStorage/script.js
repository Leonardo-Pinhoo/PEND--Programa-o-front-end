const nome = document.querySelector("#nome")
const salvar = document.querySelector("#salvar")
const recuperar = document.querySelector("#recuperar")
const excluir = document.querySelector("#excluir")
const resultado = document.querySelector("#resultado")

salvar.addEventListener("click", function(){
    localStorage.setItem("nome", nome.value)
    const nomeSalvo = localStorage.getItem("nome")
    resultado.textContent = `O nome digitado e: ${nomeSalvo}`
})

recuperar.addEventListener("click", function(){
    const nomeRecuperado = localStorage.getItem("nome")

    resultado.textContent = `O nome digitado e: ${nomeRecuperado}`
})

excluir.addEventListener("click", function(){
    localStorage.removeItem("nome")
    resultado.textContent = "Nome excluido com sucesso"
})