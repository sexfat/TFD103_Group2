<?php
include "connection.php";
// $number = htmlspecialchars($_GET["number"]);
// $password = htmlspecialchars($_GET["password"]);
// $name = htmlspecialchars($_GET["name"]);
// $biulder = htmlspecialchars($_GET["biulder"]);
// $create_date = htmlspecialchars($_GET["create_date"]);
// $authority = htmlspecialchars($_GET["authority"]);
$data = json_decode(file_get_contents("php://input"));
$number = $data->number;
$password = $data->password;
$name = $data->name;
$biulder = $data->biulder;
$create_date = $data->create_date;
$authority = $data->authority;
$sql = "INSERT INTO `A_cake`.`EMPLOYEE`  (`EMPLOYEE_NUMBER`, `EMPLOYEE_NAME`, `PASSWORD`, `AUTHORITY`,`CREATE_DATE`,`PHONE`, `BIULDER`, `ACTIVE`,`IMG`) VALUES(?,?,?,?,NOW(),1234,?,11234) ";

$statement = getPDO()->prepare($sql);
       $statement -> bindValue(1,$number);
       $statement -> bindValue(2,$name);
       $statement -> bindValue(3,$password);
       $statement -> bindValue(4,$authority);
       $statement -> bindValue(5,$biulder);
       $statement -> execute();

echo $number;
?>