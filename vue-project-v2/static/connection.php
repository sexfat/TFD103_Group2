<?php

  function getPDO(){

    $db_host = "127.0.0.1";
    $db_user = "root";
    $db_pass = "redgodkill000";
    $db_select = "A_cake";

    $dsn = "mysql:host=".$db_host.";dbname=".$db_select;

    return $pdo = new PDO($dsn, $db_user, $db_pass);

  }

?>