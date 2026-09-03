navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
})
.then((stream) =>{
    const videoElement = document.querySelector("#camera");
    videoElement.srcObject = stream;
}).catch((erro) =>{
    console.log("erro ao acessar a camera", erro);
});