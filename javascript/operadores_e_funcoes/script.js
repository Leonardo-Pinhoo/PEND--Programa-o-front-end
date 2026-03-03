console.log("Hello, world!");

let a = 10;
let b = 3;

console.log("Adição", a + b);
console.log("Subtração" ,a - b);
console.log("Multiplicação", a * b);
console.log("Divisão", a / b);
console.log("Resto da divisão", a % b);
console.log("Fatoração", a ** b);

let contador = 5;
contador++;
console.log("Resultado com incremento ++", contador);

let nota1 = 7;
let nota2 = 8;
let nota3 = 9;
let media = (nota1 + nota2 + nota3) / 3
console.log("A média é: " + media);

let num = 30;
let div = 4;
let resultado = num % div
console.log("O resto da divisão de " , num , " por " , div , " é: " , resultado);
let x = 10;
let y = "10"

console.log("Com == é igual valor", x == y);   
console.log("Com === é igual valor e tipo", x === y);  
console.log("Com != é diferente valor", x != y);   
console.log("Com !== é diferente valor e tipo", x !== y);  

let age = 20;
if (age >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

let num1 = 15;
let num2 = 15;

if (num1 > num2) {
    console.log(num1 , " é maior que " , num2);
} else if (num1 < num2) {
    console.log(num1 , " é menor que " , num2);
} else {
    console.log(num1 , " é igual a " , num2);
}

console.log("Operador Logicos:");

let idade = 25;
let possuiCarteira = true;
if (idade >= 18 && possuiCarteira) {
    console.log("Pode dirigir");
}

let chovendo = false;
let guardaChuva = true;
if (chovendo || guardaChuva) {
    console.log("Você está preparado para a chuva");
}

let ligado = false;
console.log("Negação:", !ligado);

let nota = 8;
let frequencia = 75;

if (nota >= 7 && frequencia >= 75) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

let login = true
let token = false
if (login === true || token === true) {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}