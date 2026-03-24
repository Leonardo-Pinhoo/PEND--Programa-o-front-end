let azul = document.querySelector(".deixar_azul");
let vermelho = document.querySelector(".deixar_vermelho");
let h1 = document.querySelector(".h1");

azul.addEventListener("click", function () {
    h1.style.color = "blue";
});
vermelho.addEventListener("click", function () {
    h1.style.color = "red";
});

//-------------------------------------------------------------------------

let text = document.getElementById("text");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
    text.classList.toggle("oculto");
});

//-------------------------------------------------------------------------

let textarea = document.querySelector("#textarea");
let contador = document.querySelector("#contador");

textarea.addEventListener("input", function () {
    let caracteres = textarea.value.length;
    contador.textContent = caracteres + " caracteres";
});

//-------------------------------------------------------------------------

let botao = document.querySelector("#botao");
let cliques = document.querySelector("#cliques");

botao.addEventListener("click", function () {
    let contador = parseInt(cliques.textContent);
    contador++;
    cliques.textContent = contador + " cliques";
});

//-------------------------------------------------------------------------

let input = document.querySelector("#input");
let adicionar = document.querySelector("#adicionar");
let lista = document.querySelector("#lista");
adicionar.addEventListener("click", function () {
    let item = input.value.trim();
    if (item !== "") {
        let li = document.createElement("li");
        li.classList.add("item");
        li.textContent = item;

        li.addEventListener("click", function () {
            let confirmar = prompt("Deseja excluir este item? (S/N)");
            if (confirmar !== null && confirmar.trim().toLowerCase() === "s") {
                lista.removeChild(li);
            }
        });

        lista.appendChild(li);
        input.value = "";
    }
});
//-------------------------------------------------------------------------

let nome = document.querySelector("#nome");
let enviarNome = document.querySelector("#enviarNome");
let mensagemNome = document.querySelector("#mensagemNome");
enviarNome.addEventListener("click", function () {
    let nomeUsuario = nome.value.trim();
    if (nomeUsuario !== "") {
        mensagemNome.style.color = "green";
        mensagemNome.textContent = "Nome enviado com sucesso: " + nomeUsuario;
        nome.value = "";
    } else {
        mensagemNome.style.color = "red";
        mensagemNome.textContent = "O campo nome é obrigatório";
    }
});
//--------------------------------------------------------------------------
let email = document.querySelector("#email");
let senha = document.querySelector("#senha");
let validar = document.querySelector("#btnValidacao");
let mensagemEmail = document.querySelector("#mensagemEmail");
let mensagemSenha = document.querySelector("#mensagemSenha");

function validarEmail(valorEmail) {
    if (valorEmail.includes('@') && valorEmail.includes('.')) {
        mensagemEmail.style.color = "green";
        mensagemEmail.textContent = "Email válido!";
    } else {
        mensagemEmail.style.color = "red";
        mensagemEmail.textContent = "Email inválido!";
    }
}

function validarSenha(valorSenha) {
    if (valorSenha < 6) {
        mensagemSenha.style.color = "red";       
        mensagemSenha.textContent = "Senha fraca!";
    } else if (valorSenha <= 10) {
        mensagemSenha.style.color = "orange";
        mensagemSenha.textContent = "Senha aceitável";
    } else {
        mensagemSenha.style.color = "green";
        mensagemSenha.textContent = "Senha forte";
    }
}

validar.addEventListener("click", function () {
    let valorEmail = email.value.trim();
    let valorSenha = senha.value.trim().length;

    validarEmail(valorEmail);   
    validarSenha(valorSenha);
});

senha.addEventListener("input", function () { 
    let valorSenha = senha.value.trim().length;
    validarSenha(valorSenha);
});

