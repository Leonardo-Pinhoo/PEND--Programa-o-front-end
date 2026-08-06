class Aluno {
    constructor(nome, idade, cruso, matricula){
        this.nome = nome;
        this.idade = idade;
        this.cruso = cruso;
        this.matricula = matricula;
    }

    aprender(nome, curso){
        this.nome = nome;
        this.curso = curso;
        return `Eu ${nome} estou aprendendo ${curso}`;
    }

    estudar(nome, cruso){
        this.nome = nome;
        this.cruso = cruso;
        return `Eu ${nome} estou estudando ${cruso}`;
    }

    apresentar(nome, idade, curso){
        this.nome = nome;
        this.idade = idade;
        return `Eu ${nome} tenho ${idade} anos e estou cursando ${curso}`;
        
    }
}


const aluno1 = new Aluno("Maria", "18", "Engenharia Civil", "123456");
console.log(aluno1.aprender("Maria", "Engenharia Civil"));
console.log(aluno1.estudar("Maria", "Engenharia Civil"));
console.log(aluno1.apresentar("Maria", "18", "Engenharia Civil"));

const aluno2 = new Aluno("Pedro", "19", "Desenvolvimento de Sistemas", "123457");
console.log(aluno2.aprender("Pedro", "Desenvolvimento de Sistemas"));
console.log(aluno2.estudar("Pedro", "Desenvolvimento de Sistemas"));
console.log(aluno2.apresentar("Pedro", "19", "Desenvolvimento de Sistemas"));

const aluno3 = new Aluno("Ana", "20", "Ciência de Dados", "123457");
console.log(aluno3.aprender("Ana", "Ciência de Dados"));
console.log(aluno3.estudar("Ana", "Ciência de Dados"));
console.log(aluno3.apresentar("Ana", "20", "Ciência de Dados"));