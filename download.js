document.getElementById("captureAndDownloadButton").addEventListener("click", function() {
    const elementToCapture = document.getElementById("elementToCapture");

    // Cattura l'immagine con HTML2Canvas
    html2canvas(elementToCapture).then(function(canvas) {
        // Ottieni l'immagine come base64
        const image = canvas.toDataURL("image/png");

        // Crea un elemento <a> con il link di download
        const a = document.createElement("a");
        a.href = image;
        a.download = "cattura_immagine.png";
        a.textContent = "Scarica l'immagine";

        // Aggiungi il link al documento
        document.body.appendChild(a);

        // Simula un clic sul link per avviare il download
        a.click();

        // Rimuovi il link (facoltativo)
        document.body.removeChild(a);
    });
});
