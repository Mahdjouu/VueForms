<?php
        require_once('connexionMysql.php');

        if(mysqli_connect_errno())
        {
            echo "Erreur de connexion à la base de données";
        }
        else
        {
            $requeteGetType = "select * from nom_ouvrage";
            $reponseGetType = $db->query($requeteGetType);
            $response = array();
            if(mysqli_num_rows($reponseGetType)>0){
                while($row = mysqli_fetch_assoc($reponseGetType)){
                    $response[] =$row;
                }
                echo json_encode($response);
            }
        }
        exit;
?>