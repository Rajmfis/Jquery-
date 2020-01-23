<?php session_start();
include "dbutil.php";
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}else{
    // echo "Connected successfully";
}

// Escape user inputs for security
$firstname = $_POST['firstName'];
$lastname = $_POST['lastName'];
$emailId = $_POST['email'];
$contact = $_POST['contact'];
$_SESSION["username"] = "$firstname";
$_SESSION["searchid"]="";

$sql = "INSERT INTO users (first_name,last_name,email_id,contact_no) VALUES ('$firstname','$lastname','$emailId','$contact');";

if(mysqli_query($link, $sql)){
    json_encode(array('success' => 1));   
    // echo "Records added successfully.";
} 
 
// close connection
mysqli_close($link);
?>