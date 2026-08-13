class Aluno {
    constructor(nome, idade, curso, matricula) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    }

    estudar() {
        console.log(`${this.nome} está estudando...`);
    }

    apresentar() {
        console.log(`O ${this.nome} está fazendo uma ótima apresentação...`);
    }

}

class Turma {
    constructor() {
        this.alunos = []
    }

    adicionarAluno(aluno) {
        this.alunos.push(aluno)
    }

    exibirNaTela() {
        const resultado = document.querySelector("#resultado");
        resultado.innerHTML = "";

        this.alunos.forEach(aluno => {
            resultado.innerHTML += `
            <div>
                <p> Nome: ${aluno.nome}</p>
                <p> Idade: ${aluno.idade}</p>
                <p> Curso: ${aluno.curso}</p>
                <p> Matrícula: ${aluno.matricula}</p>
                <p>-------------------------------------------</p>
            </div>
                `
        })
    }
}

const turma = new Turma()
const botaoCadastrar = document.querySelector("#botaoCadastrar");


botaoCadastrar.addEventListener("click", function () {
    const nome = document.querySelector("#nome").value;
    const idade = document.querySelector("#idade").value;
    const curso = document.querySelector("#curso").value;
    const matricula = document.querySelector("#matricula").value;

    const aluno = new Aluno(nome, idade, curso, matricula);


    turma.adicionarAluno(aluno)

    console.log(turma)
    turma.exibirNaTela()

});



