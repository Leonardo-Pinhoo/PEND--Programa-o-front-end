const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");

// contexto.beginPath();
// contexto.moveTo(10, 0);
// contexto.lineTo(200, 200);
// contexto.lineTo(200,0);
// contexto.stroke();

// contexto.fillRect(50,50,150,100);
// contexto.strokeRect(250,50,120,100);

// contexto.beginPath();
// contexto.arc(250,250,50,0, Math.PI * 2);
// contexto.stroke();

contexto.lineWidth = 10;
contexto.lineCap = "round";
contexto.lineJoin = "round";

contexto.beginPath();
contexto.arc(260,75, 25, 0, Math.PI * 2);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(250, 100);
contexto.lineTo(250, 180);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(250, 180);
contexto.lineTo(275,225);
contexto.lineTo(275,275)
contexto.moveTo(250, 180);
contexto.lineTo(225,225);
contexto.lineTo(225,275)
contexto.stroke();

contexto.beginPath();
contexto.moveTo(250,100)
contexto.lineTo(210,150);
contexto.lineTo(260,170)
contexto.stroke();

contexto.beginPath();
contexto.moveTo(250,100);
contexto.lineTo(290,150);
contexto.lineTo(330,120);
contexto.stroke();

