let azul = document.querySelector(".deixar_azul");
let vermelho = document.querySelector(".deixar_vermelho");
let h1 = document.querySelector(".h1");

azul.addEventListener("click", function() {
    h1.style.color = "blue";
});
vermelho.addEventListener("click", function() {
    h1.style.color = "red";
});

//-------------------------------------------------------------------------

let text = document.getElementById("text");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
    text.classList.toggle("oculto");
});

//-------------------------------------------------------------------------

let textarea = document.querySelector("#textarea");
let contador = document.querySelector("#contador");

textarea.addEventListener("input", function() {
    let caracteres = textarea.value.length;
    contador.textContent = caracteres + " caracteres";
});

//-------------------------------------------------------------------------

let botao = document.querySelector("#botao");
let cliques = document.querySelector("#cliques");

botao.addEventListener("click", function() {
    let contador = parseInt(cliques.textContent);
    contador++;
    cliques.textContent = contador + " cliques";
});

//-------------------------------------------------------------------------

let input = document.querySelector("#input");
let adicionar = document.querySelector("#adicionar");
let lista = document.querySelector("#lista");
adicionar.addEventListener("click", function() {
    let item = input.value.trim();
    if (item !== "") {
        let li = document.createElement("li");
        li.classList.add("item");
        li.textContent = item;
        lista.appendChild(li);
        input.value = "";
    }
    let excluir = document.querySelector(".item");
    function confirmarExclusao() {
        let confirmar = prompt("Deseja excluir este item? (S/N)");
        return confirmar;
    }
    excluir.addEventListener("click", function() {
        if (confirmarExclusao() === "S" || confirmarExclusao() === "s") {
            lista.removeChild(excluir);
        }
    });
});
//-------------------------------------------------------------------------

let nome = document.querySelector("#nome");
let enviarNome = document.querySelector("#enviarNome");
let mensagemNome = document.querySelector("#mensagemNome");
enviarNome.addEventListener("click", function() {
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



