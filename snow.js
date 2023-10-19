// snow.js

// Array di nomi delle immagini dei fiocchi
const snowflakeImages = ['fiocco1.png', 'fiocco2.png', 'fiocco3.png'];

// Funzione per creare un fiocco di neve casuale con un'immagine
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    
    // Scegli casualmente un'immagine da snowflakeImages
    const randomImage = snowflakeImages[Math.floor(Math.random() * snowflakeImages.length)];
    snowflake.style.backgroundImage = `url(${randomImage})`;

    // Imposta una posizione casuale all'interno dell'elemento "snow-container"
    const container = document.getElementById('snow-container');
    const maxX = container.offsetWidth;
    const maxY = container.offsetHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    // Imposta una dimensione casuale per il fiocco di neve
    const size = Math.random() * 20 + 10; // Imposta la dimensione desiderata
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    
    // Imposta una transizione per un movimento fluido
    const duration = Math.random() * 4 + 4; // Imposta la durata desiderata
    snowflake.style.animation = `fall ${duration}s linear infinite`;
    
    // Imposta la posizione iniziale
    snowflake.style.left = `${randomX}px`;
    snowflake.style.top = `${randomY}px`;
    
    container.appendChild(snowflake);
}

// Funzione per creare una serie di fiocchi di neve
function createSnowfall() {
    for (let i = 0; i < 50; i++) { // Imposta il numero desiderato di fiocchi di neve
        createSnowflake();
    }
}

// Esegui la creazione della nevicata quando il documento è pronto
document.addEventListener('DOMContentLoaded', createSnowfall);
