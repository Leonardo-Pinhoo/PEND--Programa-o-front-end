class Produto {
    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = Number(preco);
        this.categoria = categoria;
        this.desconto = Number(desconto);
    }

    aplicarDesconto() {
        let precoNovo = this.preco - (this.preco * (this.desconto / 100));
        return precoNovo;
    }

}
class Produtos {
    constructor() {
        this.produtos = []
    }
    adicionarProduto(produto) {
        this.produtos.push(produto)
        localStorage.setItem("produtos", JSON.stringify(this.produtos))
    }
    exibir() {

        const mostrar = document.querySelector("#mostrar");
        mostrar.innerHTML = "";

        this.produtos.forEach((produto, i) => {
            mostrar.innerHTML += `
            <p>Nome: ${produto.nome}</p>
            <p>Preço: R$ ${produto.preco}</p>
            <p>Categoria: ${produto.categoria}</p>
            <p>Desconto: ${produto.desconto}%</p>
            <p>Preço novo: R$ ${produto.aplicarDesconto()}</p>
            <button onclick="produtos.excluirProduto(${i})">EXCLUIR</button>
        `;
        })
    }
    excluirProduto(i) {
        this.produtos.splice(i, 1)
        this.exibir()
        localStorage.setItem("produtos", JSON.stringify(this.produtos))
    }
    carregarProduto() {
        const dados = localStorage.getItem("produtos");
        if (dados) {
            const produtosSalvos = JSON.parse(dados);

            produtosSalvos.forEach(p => {
                const produto = new Produto(p.nome, p.preco, p.categoria, p.desconto);
                this.produtos.push(produto);
            });

            this.exibir();
        }
    }
}
const cadastrar = document.querySelector("#btnCadastrar");
const produtos = new Produtos()
cadastrar.addEventListener("click", function () {
    const nome = document.querySelector("#nome").value;
    const preco = document.querySelector("#preco").value;
    const categoria = document.querySelector("#categoria").value;
    const desconto = document.querySelector("#desconto").value;

    const produto = new Produto(nome, preco, categoria, desconto);

    produtos.adicionarProduto(produto)
    console.log(produtos)
    produtos.exibir();
});
produtos.carregarProduto()