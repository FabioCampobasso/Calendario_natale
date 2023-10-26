
    // Definiamo i link per ciascuna immagine
        var link1 = "dedica.html";
        var link2 = "dedica2.html";
        var link3 = "dedica3.html";

        // Variabile per memorizzare il link selezionato
        var linkSelezionato = "";

        // Gestore di eventi per cliccare sulle immagini
        function imageClickHandler(imageId, link) {
            // Rimuovi la classe "clicked" da tutte le immagini
            var allImages = document.querySelectorAll("img");
            allImages.forEach(function(img) {
                img.classList.remove("clicked");
            });

            // Aggiungi la classe "clicked" all'immagine cliccata
            var selectedImage = document.getElementById(imageId);
            selectedImage.classList.add("clicked");

            // Imposta il link selezionato
            linkSelezionato = link;
        }

        // Aggiungi gestori di eventi alle immagini di selezione
        document.getElementById("link1").addEventListener("click", function() {
            imageClickHandler("link1", link1);
        });

        document.getElementById("link2").addEventListener("click", function() {
            imageClickHandler("link2", link2);
        });

        document.getElementById("link3").addEventListener("click", function() {
            imageClickHandler("link3", link3);
        });

        // Aggiungi un gestore di eventi al pulsante "Invia"
        document.getElementById("submitButton").addEventListener("click", function() {
            if (linkSelezionato !== "") {
                // Estrai il messaggio dall'input
                var messageInput = document.getElementById("messageInput");
                var message = messageInput.value;

                // Codifica il messaggio per passarlo come parametro nell'URL
                var encodedMessage = encodeURIComponent(message);

                // Costruisci l'URL della nuova pagina con il messaggio come parametro
                var newPageURL = linkSelezionato + "?message=" + encodedMessage;

                // Reindirizza l'utente alla nuova pagina
                window.location.href = newPageURL;
            }
        });