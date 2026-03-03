function dataAtual() { 
    const data = new Date();
    console.log("Data atual:", data.getHours() + ":" + data.getMinutes());
}

let n1 = prompt("Digite a primeira nota:");
let n2 = prompt("Digite a segunda nota:");
function calcularMedia(n1, n2) {
    let media = (parseFloat(n1) + parseFloat(n2)) / 2;
    let somatoria = parseFloat(n1) + parseFloat(n2);
    console.log("A média é:", media);
    console.log("O somatório é:", somatoria);
}

let nome = prompt("Digite seu nome:");
function modificaNome(nome) {
    console.log("Olá, " + nome + "!");
    console.log("Número de caracteres no seu nome:", nome.length);
    console.log("Seu nome em maiúsculas:", nome.toUpperCase());
}

let html = prompt("Digite uma frase:");
function verificarHTML(html) {
    console.log(html.includes("HTML"));
}

dataAtual();
calcularMedia(n1, n2);
modificaNome(nome);
verificarHTML(html);
console.log("***********************************************FUNÇÕES************************************************");