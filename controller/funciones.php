<?php
require_once 'model/funcionesBD.php';

//recoge todas las canciones almacenadas en la base de datos
function getAllSongs()
{
    $conn = openConnectionDB("notabase");

    $sql = "select * from songs";
    
    $result = $conn->query($sql);

    while ($row = $result->fetch_assoc()) {

        // echo $row['name']."<br>";
    }
    closeConnection($conn);
    return $result;
}

//Se encarga de recoger el nombre de la canción
function getSongByName($nombre)
{
    $conn = openConnectionDB("notabase");

    $sql = "SELECT * FROM songs WHERE name = '" . $nombre . "'";
                            
    $resultName = $conn->query($sql);
 
    closeConnection($conn);
    return $resultName;
   
}

//Se encarga de recoger la imagen de la canción mediante el nombre
function getAlbumSongByName($nombre){
    $conn = openConnectionDB("notabase");
    $sql = "SELECT imagePath FROM songs WHERE name = '" . $nombre . "'";
    $imageResultList = $conn->query($sql);
    closeConnection($conn);
    return $imageResultList;
    
}

//Se encarga de recoger el audio de la canción mediante el nombre
function getAudioSongByName($nombre) {
    $conn = openConnectionDB("notabase");
    
    $sql = "SELECT path FROM songs WHERE name = '" . $nombre . "'";
    
    $listaCancionesResultado = $conn->query($sql);
    
    closeConnection($conn);
    return $listaCancionesResultado;
}

