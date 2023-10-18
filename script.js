
document.addEventListener("DOMContentLoaded", function() {
    var submitButton1 = document.getElementById("submitButton1");
    submitButton1.addEventListener("click", function() {
        var messageInput1 = document.getElementById("messageInput1");
        var message1 = messageInput1.value;

        if (message1.trim() !== "") {
            // Codifica il messaggio per passarlo come parametro nell'URL
            var encodedMessage1 = encodeURIComponent(message1);

            // Costruisci l'URL della nuova pagina con il messaggio come parametro
            var newPageURL1 = "dedica.html?message=" + encodedMessage1;

            // Reindirizza l'utente alla nuova pagina
            window.location.href = newPageURL1;
        }
    });

    var submitButton2 = document.getElementById("submitButton2");
    submitButton2.addEventListener("click", function() {
        var messageInput2 = document.getElementById("messageInput2");
        var message2 = messageInput2.value;

        if (message2.trim() !== "") {
            // Codifica il messaggio per passarlo come parametro nell'URL
            var encodedMessage2 = encodeURIComponent(message2);

            // Costruisci l'URL della nuova pagina con il messaggio come parametro
            var newPageURL2 = "dedica.html?message=" + encodedMessage2;

            // Reindirizza l'utente alla nuova pagina
            window.location.href = newPageURL2;
        }
    });
});
