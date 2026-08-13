class Produto {
    constructor(nome, preco, categoria, desconto){
        this.nome = nome;
        this.preco = Number(preco);
        this.categoria = categoria;
        this.desconto = Number(desconto);
    }

    aplicarDesconto(){
        let precoNovo = this.preco - (this.preco * (this.desconto / 100));
        return precoNovo;
    }

}
class Produtos{
    constructor(){
        this.produtos = []
    }
    adicionarProduto(produto){
        this.produtos.push(produto)
    }
    exibir(){

        const mostrar = document.querySelector("#mostrar");
        mostrar.innerHTML = "";

        this.produtos.forEach(produto => {
            mostrar.innerHTML += `
            <p>Nome: ${produto.nome}</p>
            <p>Preço: R$ ${produto.preco}</p>
            <p>Categoria: ${produto.categoria}</p>
            <p>Desconto: ${produto.desconto}%</p>
            <p>Preço novo: R$ ${produto.aplicarDesconto()}</p>
        `;
        })
    }
}
const cadastrar = document.querySelector("#btnCadastrar");
const produtos = new Produtos()
cadastrar.addEventListener("click", function(){
    const nome = document.querySelector("#nome").value;
    const preco = document.querySelector("#preco").value;
    const categoria = document.querySelector("#categoria").value;
    const desconto = document.querySelector("#desconto").value;

    const produto = new Produto(nome, preco, categoria, desconto);

    produtos.adicionarProduto(produto)
    console.log(produtos)
    produtos.exibir();
});