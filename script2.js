
// FUNZIONE PER I VARI BOTTONI PULSANTI: FA PASSARE DA UNA PAGINA ALL'ALTRA QUANDO SI CLICCA INVIA

document.addEventListener("DOMContentLoaded", function() {
    var submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", function() {
        var messageInput = document.getElementById("messageInput");
        var message = messageInput.value;

        if (message.trim() !== "") {
            // Codifica il messaggio per passarlo come parametro nell'URL
            var encodedMessage = encodeURIComponent(message);

            // Costruisci l'URL della nuova pagina con il messaggio come parametro
            var newPageURL = "dedica.html?message=" + encodedMessage;

            // Reindirizza l'utente alla nuova pagina
            window.location.href = newPageURL;
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var submitButton = document.getElementById("submitButton2");
    submitButton.addEventListener("click", function() {
        var messageInput = document.getElementById("messageInput2");
        var message = messageInput.value;

        if (message.trim() !== "") {
            // Codifica il messaggio per passarlo come parametro nell'URL
            var encodedMessage = encodeURIComponent(message);

            // Costruisci l'URL della nuova pagina con il messaggio come parametro
            var newPageURL = "dedica2.html?message=" + encodedMessage;

            // Reindirizza l'utente alla nuova pagina
            window.location.href = newPageURL;
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var submitButton = document.getElementById("submitButton3");
    submitButton.addEventListener("click", function() {
        var messageInput = document.getElementById("messageInput3");
        var message = messageInput.value;

        if (message.trim() !== "") {
            // Codifica il messaggio per passarlo come parametro nell'URL
            var encodedMessage = encodeURIComponent(message);

            // Costruisci l'URL della nuova pagina con il messaggio come parametro
            var newPageURL = "dedica3.html?message=" + encodedMessage;

            // Reindirizza l'utente alla nuova pagina
            window.location.href = newPageURL;
        }
    });
});

function nascondiFormaInBaseAllaData() {
  const dataAttuale = new Date();
  const giorno = dataAttuale.getDate();
  const mese = dataAttuale.getMonth() + 1;

  const forma1 = document.getElementById("forma1");
  const forma2 = document.getElementById("forma2");
  const forma3 = document.getElementById("forma3");

  if (mese === 10 && giorno >= 18 && giorno <= 25) {
    forma1.classList.remove("overlay");
  }

  if (mese === 10 && giorno >= 19 && giorno <= 25) {
    forma2.classList.remove("overlay");
  }

  if (mese === 10 && giorno >= 20 && giorno <= 25) {
    forma3.classList.remove("overlay");
  }
}

nascondiFormaInBaseAllaData();


//----------------------------------------------------------------------------------------------------------------------










