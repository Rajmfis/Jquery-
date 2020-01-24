<?php session_start();
include "dbutil.php";

// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

// Escape user inputs for security
$firstname = $_POST['firstName'];
$lastname = $_POST['lastName'];
$emailId = $_POST['email'];
$contact = $_POST['contact'];
$password=md5($_POST['password']);
$_SESSION["username"] = "$firstname";
$_SESSION["searchid"]="";

$sql = "INSERT INTO users(first_name,last_name,email_id,contact_no,pwd) VALUES ('$firstname','$lastname','$emailId','$contact','$password');";

if(mysqli_query($link, $sql)){//see the return values
   echo json_encode(array('success' => 1));
}else{
   echo json_encode(array('success' => 0)); 
}

// close connection
mysqli_close($link);
?>