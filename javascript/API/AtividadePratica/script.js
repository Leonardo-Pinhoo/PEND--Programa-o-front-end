const salvos = document.querySelector("#salvos");
let latitudeAtual, longitudeAtual;

function salvarPonto(){
    const agora = new Date();
    const dados = {
        latitude: latitudeAtual,
        longitude: longitudeAtual,
        data: agora.toLocaleDateString('pt-BR'),
        hora: agora.toLocaleTimeString('pt-BR'),
    }
    const registros = JSON.parse(localStorage.getItem("registros_ponto")) || [];
    registros.push(dados);
    localStorage.setItem("registros_ponto", JSON.stringify(registros));
    const item = document.createElement("li");
    item.textContent = `Ponto: ${dados.data} às ${dados.hora}`;
    salvos.appendChild(item);
}

function mostrarSalvos(){
    const registros = JSON.parse(localStorage.getItem("registros_ponto")) || [];
    salvos.innerHTML = "";
    registros.forEach((dados) => {
        const item = document.createElement("li");
        item.textContent = `Ponto: ${dados.data} às ${dados.hora}`;
        salvos.appendChild(item);
    });
}

navigator.geolocation.getCurrentPosition(
    function (posicao) {
        latitudeAtual = posicao.coords.latitude;
        longitudeAtual = posicao.coords.longitude;
        console.log("Latitude: " + posicao.coords.latitude);
        console.log("Longitude: " + posicao.coords.longitude);
        console.log("precisão", posicao.coords.accuracy)
    },
    function (erro) {
        console.log("Não foi possivel obter a localização", erro);
    }
);

const videoElement = document.querySelector("#camera");
const btnFotografar = document.querySelector("#fotografar");
const data = document.querySelector("#data");
const hora = document.querySelector("#hora");

const now = new Date();
const dataFormatada = now.toLocaleDateString('pt-BR');
const horaFormatada = now.toLocaleTimeString('pt-BR');

data.textContent = `Data: ${dataFormatada}`;
hora.textContent = `Hora: ${horaFormatada}`;

navigator.mediaDevices.getUserMedia({
    video: true
})
    .then((stream) => {
        videoElement.srcObject = stream;
    }).catch((erro) => {
        console.log("erro ao acessar a camera", erro);
    });

// ao carregar a página, já mostra o histórico salvo anteriormente
mostrarSalvos();

btnFotografar.addEventListener("click", function () {
    salvarPonto();
});