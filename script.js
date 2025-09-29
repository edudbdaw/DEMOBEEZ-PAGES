// --- SCRIPT PARA EL TEMPORIZADOR DE CUENTA ATRÁS ---

// FECHA ACTUALIZADA para el proyecto L.M.P.L
// Formato: AÑO, MES (0-11, por eso 11 es Diciembre), DÍA, HORA, MINUTO, SEGUNDO
const countdownDate = new Date("2025-12-01T00:00:00").getTime();

// Actualizar el contador cada segundo
const interval = setInterval(() => {
    // Obtener la fecha y hora actual
    const now = new Date().getTime();

    // Encontrar la distancia entre ahora y la fecha de lanzamiento
    const distance = countdownDate - now;

    // Cálculos de tiempo para días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Comprobar que los elementos existen antes de intentar modificarlos
    if (document.getElementById("days")) {
        document.getElementById("days").innerText = String(days).padStart(2, '0');
        document.getElementById("hours").innerText = String(hours).padStart(2, '0');
        document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
        document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
    }

    // Si la cuenta atrás termina, mostrar un mensaje
    if (distance < 0) {
        clearInterval(interval);
        if (document.getElementById("countdown")) {
            document.getElementById("countdown").innerHTML = "¡YA DISPONIBLE!";
        }
    }
}, 1000);