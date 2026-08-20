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

    exibir(){
        const mostrar = document.querySelector("#mostrar");
        mostrar.innerHTML = `
            <p>Nome: ${this.nome}</p>
            <p>Preço: R$ ${this.preco}</p>
            <p>Categoria: ${this.categoria}</p>
            <p>Desconto: ${this.desconto}%</p>
            <p>Preço novo: R$ ${this.aplicarDesconto()}</p>
        `;
    }
}

const cadastrar = document.querySelector("#btnCadastrar");

cadastrar.addEventListener("click", function(){
    const nome = document.querySelector("#nome").value;
    const preco = document.querySelector("#preco").value;
    const categoria = document.querySelector("#categoria").value;
    const desconto = document.querySelector("#desconto").value;

    const produto = new Produto(nome, preco, categoria, desconto);
    localStorage.setItem("produto", JSON.stringify(produto));
    produto.exibir();
});

const dados = localStorage.getItem("produto");
if(dados){

    const produtoSalvo = JSON.parse(dados);
    
    const produto = new Produto(
        produtoSalvo.nome,
        produtoSalvo.preco,
        produtoSalvo.categoria,
        produtoSalvo.desconto
    );

    produto.exibir()
}