<?php
$id = $_GET['id'];

// Estrai il percorso dell'immagine dal database usando l'ID
$stmt = $pdo->prepare("SELECT path FROM images WHERE id = ?");
$stmt->execute([$id]);
$image = $stmt->fetch();

// Assegna il percorso dell'immagine a una variabile PHP
$imagePath = $image['path'];

// Ora puoi utilizzare $imagePath come variabile nel tuo codice PHP
?>

