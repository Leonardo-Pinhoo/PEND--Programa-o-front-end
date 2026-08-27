const pouImg = document.querySelector('#pou_div img');
const pouDiv = document.getElementById('pou_div');
const comidas = document.querySelectorAll('[id="comida_div"] img');

let comidasComidas = 0;
const totalComidas = comidas.length;
let tamanhoAtual = 100;

comidas.forEach(comida => {
    comida.addEventListener('dragstart', (event) => {
        // usa a classe do div pai (pizza, hamburguer, coca...) como identificador
        event.dataTransfer.setData('text/plain', comida.parentElement.className);
    });
});

pouDiv.addEventListener('dragover', (e) => {
    event.preventDefault();
});

pouDiv.addEventListener('drop', (e) => {
    event.preventDefault();

    const classeComida = event.dataTransfer.getData('text/plain');
    const comidaDiv = document.querySelector('.' + classeComida);

    if (comidaDiv) {
        comidaDiv.style.display = 'none';
    }

    comidasComidas++;
    tamanhoAtual += 30;

    pouImg.style.width = tamanhoAtual + 'px';
    pouImg.style.height = tamanhoAtual + 'px';

    if (comidasComidas === 2) {
        pouImg.src = 'img/pou.svg';
        pouImg.alt = 'Pou normal';
    }

    if (comidasComidas === totalComidas) {
        pouImg.style.width = '1000px';
        pouImg.style.height = '1000px';
        pouGordo();
    }
});

function pouGordo() {
    pouImg.src = 'img/pou_gordo.svg';
    pouImg.alt = 'Pou gordo';
    const msg = document.querySelector("#mensagem")
    msg.textContent = "POU GORDASSOOOOOOO!!!!"
    setTimeout(() => {
        alert('Pou chegou ao maior tamanho! Fim de jogo 🎉');
    }, 500);
}