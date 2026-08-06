class Produto{
    constructor(nome, preco, estoque){
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    vender(estoque){
        this.estoque -= estoque;
        return `Produto ${this.nome} vendido com sucesso`;
    }

    repor(estoque){
        this.estoque += estoque;
        return `Produto ${this.nome} reposto com sucesso`;
    }

    alterarPreco(novoPreco){
        this.preco = novoPreco;
        return `Produto ${this.nome} com novo preço ${novoPreco}`;
    }
    
}

const produto1 = new Produto("Produto 1", 10, 10);
console.log(produto1.vender(5));
console.log(produto1.repor(5));
console.log(produto1.alterarPreco(15));

const produto2 = new Produto("Produto 2", 20, 20);
console.log(produto2.vender(10));
console.log(produto2.repor(10));
console.log(produto2.alterarPreco(25));

const produto3 = new Produto("Produto 3", 30, 30);
console.log(produto3.vender(15));
console.log(produto3.repor(15));
console.log(produto3.alterarPreco(35));