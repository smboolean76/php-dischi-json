<?php
$albums = file_get_contents("dischi.json");

// SE abbiamo un parametro $_GET['genre'] e non è vuoto
// allora filtro gli albums
if(!empty($_GET['genre'])) {
    $albums = json_decode($albums, true);
    $albums = array_filter($albums, fn($elm) => strtolower($elm['genre']) === strtolower($_GET['genre']) );
    $albums = json_encode($albums);
}
// ALTRIMENTI
// restituisco tutti gli albums

header("Content-Type: application/json");
echo $albums;