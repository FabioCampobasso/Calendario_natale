// Ottieni il messaggio dalla query string dell'URL
const urlParams = new URLSearchParams(window.location.search);
const message = urlParams.get('message');

if (message) {
    // Visualizza l'animazione del testo
    const animatedText = document.getElementById('animatedText');
    animatedText.textContent = message;
}
