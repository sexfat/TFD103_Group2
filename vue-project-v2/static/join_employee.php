<?php
include "connection.php";
$number = htmlspecialchars($_GET["number"]);
$password = htmlspecialchars($_GET["password"]);
$name = htmlspecialchars($_GET["name"]);
$biulder = htmlspecialchars($_GET["biulder"]);
$create_date = htmlspecialchars($_GET["create_date"]);
$authority = htmlspecialchars($_GET["authority"]);
$sql = "INSERT INTO `A_cake`.`EMPLOYEE`  (`EMPLOYEE_NUMBER`, `EMPLOYEE_NAME`, `PASSWORD`, `AUTHORITY`,`CREATE_DATE`, `BIULDER`, `ACTIVE`) VALUES(?,?,?,?,NOW(),?,1) ";

$statement = getPDO()->prepare($sql);
       $statement -> bindValue(1,$number);
       $statement -> bindValue(2,$name);
       $statement -> bindValue(3,$password);
       $statement -> bindValue(4,$authority);
       $statement -> bindValue(5,$biulder);
       $statement -> execute();
?>