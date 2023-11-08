<?php
$target_dir = "uploads/";

// Genera un nome univoco per il file
$uniqueName = uniqid() . "_" . basename($_FILES["fileToUpload"]["name"]);
$target_file = $target_dir . $uniqueName;

// Verifica se il file è effettivamente un'immagine
$check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
if($check === false) {
    echo "Il file non è un'immagine.";
    exit;
}

// Controlla la dimensione del file (limita a 500KB)
if ($_FILES["fileToUpload"]["size"] > 500000) {
    echo "Mi dispiace, il tuo file è troppo grande.";
    exit;
}

// Ottieni l'estensione del file e controlla i formati permessi
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif" ) {
    echo "Mi dispiace, sono permessi solo JPG, JPEG, PNG & GIF.";
    exit;
}

// Prova a caricare il file
if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
    echo $uniqueName; // Restituisci il nome univoco del file
} else {
    echo "Si è verificato un errore durante il caricamento.";
}


?>
