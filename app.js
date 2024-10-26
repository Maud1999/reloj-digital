const reloj = document.querySelector(".reloj");

function actualizarReloj() {
  const tiempo = new Date();

  const horas = tiempo.getHours().toString().padStart(2, 0);
  const minutos = tiempo.getMinutes().toString().padStart(2, 0);
  const segundos = tiempo.getSeconds().toString().padStart(2, 0);

  reloj.innerText = `${horas} : ${minutos} : ${segundos}`;
}

actualizarReloj();

const tiempoActual = 1000;

setInterval(actualizarReloj, tiempoActual);
