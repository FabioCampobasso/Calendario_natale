function createSnowflake() {
    const snowflake = document.createElement('img');
    const randomValue = Math.random();
    let snowflakeImage;
    if (randomValue < 0.33) {
        snowflakeImage = 'fiocco.png';
    } else if (randomValue < 0.66) {
        snowflakeImage = 'fiocco2.png';
    } else {
        snowflakeImage = 'fiocco3.png';
    }
    
    snowflake.src = snowflakeImage;
    snowflake.className = 'snowflake';
    document.getElementById('snow-container').appendChild(snowflake);

    const startX = Math.random() * (window.innerWidth * 0.5); // Larghezza massima del 50%
    const startY = -230; // Posizione iniziale sopra la finestra
    const endX = Math.random() * (window.innerWidth * 0.5); // Larghezza massima del 50%
    const duration = Math.random() * 10 + 5;

    // Scala variabile tra il 50% e il 300%
  let scale;
if (randomValue < 0.5) {
    scale = (Math.random() * 250 + 50) / 100; // Scala tra il 50% e il 300% quando randomValue è inferiore a 0.5
} else {
    scale = (Math.random() * 250 + 50) / 100; // Scala tra il 50% e il 300% quando randomValue è maggiore o uguale a 0.5
}

    snowflake.style.left = startX + 'px';
    snowflake.style.top = startY + 'px'; // Imposta la posizione iniziale sopra la finestra
    snowflake.style.animation = `snowfall ${duration}s linear`;
    snowflake.style.transform = `scale(${scale})`; // Imposta la scala

    // Rimuovi il fiocco di neve quando raggiunge il fondo
    snowflake.addEventListener('animationiteration', function () {
        document.getElementById('snow-container').removeChild(snowflake);
    });
}


// Funzione per generare un fiocco di neve ogni 1/4 di secondo
function generateSnowflake() {
    createSnowflake();
}

// Aggiungi un gestore di eventi clic per generare un fiocco di neve quando si fa clic sulla finestra
window.addEventListener('click', function () {
    createSnowflake();
});

// Genera fiocchi di neve iniziali
for (let i = 0; i < 15; i++) { // Ridotto il numero di fiocchi iniziali
    createSnowflake();
}

// Genera un fiocco di neve ogni 1/4 di secondo
setInterval(generateSnowflake, 500);
