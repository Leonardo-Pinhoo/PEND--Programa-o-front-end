const salvos = document.querySelector("#salvos");
const canvas = document.querySelector("#canvas");
let latitudeAtual, longitudeAtual;

function salvarPonto(foto){
    const agora = new Date();
    const dados = {
        latitude: latitudeAtual,
        longitude: longitudeAtual,
        data: agora.toLocaleDateString('pt-BR'),
        hora: agora.toLocaleTimeString('pt-BR'),
        foto: foto,
    }
    const registros = JSON.parse(localStorage.getItem("registros_ponto")) || [];
    registros.push(dados);
    localStorage.setItem("registros_ponto", JSON.stringify(registros));

    const item = document.createElement("li");
    item.textContent = `Ponto: ${dados.data} às ${dados.hora}`;

    const imagem = document.createElement("img");
    imagem.src = dados.foto;
    imagem.width = 300;
    imagem.height = 300;

    salvos.appendChild(item);
    salvos.appendChild(imagem);
}

function mostrarSalvos(){
    const registros = JSON.parse(localStorage.getItem("registros_ponto")) || [];
    salvos.innerHTML = "";
    registros.forEach((dados) => {
        const item = document.createElement("li");
        const foto = document.createElement("img");
        foto.src = dados.foto;
        foto.width = 300;
        foto.height = 300;
        item.textContent = `Ponto: ${dados.data} às ${dados.hora}`;
        salvos.appendChild(item);
        salvos.appendChild(foto);
    });
}

function tirarFoto(){
    const contexto = canvas.getContext("2d");
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    contexto.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/png");
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

mostrarSalvos();

btnFotografar.addEventListener("click", function () {
    const foto = tirarFoto();
    salvarPonto(foto);
});