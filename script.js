// Mostrar fecha y hora en la cabecera de la página
let time = document.getElementById("current-time");

setInterval(() => {
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
}, 1000)
 // 1000 milisegundo = 1 segundo


 