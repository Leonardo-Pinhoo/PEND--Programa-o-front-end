const mapa1 = document.querySelector("#mapa1");
const mapa2 = document.querySelector("#mapa2");

navigator.geolocation.getCurrentPosition(
    function (posicao){
        console.log("Latitude: " + posicao.coords.latitude);
        console.log("Longitude: " + posicao.coords.longitude);
        console.log("precisão", posicao.coords.accuracy )
        mapa1.style.display = 'block';
        mapa2.style.display = 'none';
    },
    function (erro){
        console.log("Não foi possivel obter a localização", erro);
        mapa1.style.display = 'none';
        mapa2.style.display = 'block';
    }
); 