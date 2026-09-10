const video = document.querySelector("#camera");
const botao = document.querySelector("#botao");
const canvas = document.querySelector("#canvas");
const foto = document.querySelector("#foto");


navigator.mediaDevices.getUserMedia({
    video: true
})
.then((stream) =>{
    video.srcObject = stream;
}).catch((erro) =>{
    console.log("erro ao acessar a camera", erro);
});

botao.addEventListener("click", () =>{
    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;

    const contexto = canvas.getContext("2d");

    contexto.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height);

    foto.src = canvas.toDataURL("image/png");

});