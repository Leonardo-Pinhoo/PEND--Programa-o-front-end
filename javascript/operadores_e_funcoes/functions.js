function saudacao() {
    console.log("Olá! javaScript!");
}
saudacao();

function soma(a, b) {
    return a + b;
}
console.log("A soma de 5 e 3 é:", soma(5, 3));

function saudacaoNome(nome) {
    return "Olá, " + nome + "!";
}   
console.log(saudacaoNome("Camila"));

function imc(peso, altura) {
    return peso / (altura ** 2);
}   
console.log("IMC de 70kg e 1.75m:", imc(70, 1.75));

function imparOuPar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}
console.log("O número 7 é:", imparOuPar(7));
console.log("O número 4 é:", imparOuPar(4));

console.log("***********************************************FUNÇÕES NATIVAS************************************************");

let agora = new Date();
console.log("Data atual:", agora);

function mostrarDataHora() {
    let data = new Date();

    console.log("Dia:", data.getDate());
    console.log("Mês:", data.getMonth() + 1); // Mês começa do 0
    console.log("Ano:", data.getFullYear());
    console.log("Hora:", data.getHours());
    console.log("Minutos:", data.getMinutes());
    console.log("Segundos:", data.getSeconds());
}
mostrarDataHora();


function desafio() {
    let data = new Date();
    console.log(`horas ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()} ${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`);

}
desafio();

console.log("Math.PI:", Math.PI);

function caucularOperacoes(numero) {
    console.log("Número:", numero);
    console.log("Raiz quadrada:", Math.sqrt(numero));
    console.log("Número elevado ao quadrado:", Math.pow(numero, 2));
    console.log("Valor absoluto:", Math.abs(numero));
    console.log("Número arredondado para baixo:", Math.floor(numero));
    console.log("Número arredondado para cima:", Math.ceil(numero));
}

caucularOperacoes(7.8);

function analisarTexto(texto) {
    console.log("Texto:", texto);
    console.log("Número de caracteres:", texto.length);
    console.log("Texto em maiúsculas:", texto.toUpperCase());
    console.log("Texto em minúsculas:", texto.toLowerCase());
    console.log("Primeira letra:", texto.charAt(0));
    console.log("Última letra:", texto.charAt(texto.length - 1));
}
analisarTexto("JavaScript é incrível!");

function inclui(frase) {
    console.log(frase.includes("JavaScript"));
}
inclui("Eu adoro JavaScript!");

function adicionar(nome, curso) {
    return `Olá, ${nome}! Bem-vindo ao curso de ${curso}.`;
}
console.log(adicionar("Camila", "JavaScript"));

