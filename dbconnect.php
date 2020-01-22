<?php

/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$link = mysqli_connect("localhost", "raj", "Raj@199704", "couponusers");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}else{
    echo "Connected successfully";
}

// Escape user inputs for security
$firstname = $_POST['firstName'];
$lastname = $_POST['lastName'];
$emailId = $_POST['email'];
$contact = $_POST['contact'];

// echo $first_name;

// attempt insert query execution
// $sql = "INSERT INTO USERS(first_name, last_name, email_id,contact_no) VALUES ('$first_name', '$last_name', '$email','$contact')";


//  echo $contactno



// if($_POST && isset( $_POST['firstName'], $_POST['lastName'], $_POST['email'], $_POST['contact'])) {
//  $first_name = $_POST['firstName'];
//  $last_name = $_POST['lastName'];
//  $emailId = $_POST['email'];
//  $contactno = $_POST['contact'];
// }

$sql = "INSERT INTO users (first_name,last_name,email_id,contact_no) VALUES ('$firstname','$lastname','$emailId','$contact');";

// $sql = "INSERT INTO users(first_name,last_name,email_id,contact_no) VALUES ('raj','yadav','1997yadav','575859053')";


// $sql = "INSERT INTO USERS(first_name, last_name, email_id,contact_no) VALUES (".$_POST["firstName"]."','".$_POST["lastName"]."','".$_POST["email"]."','".$_POST["contact"]."')";

if(mysqli_query($link, $sql)){
    echo "Records added successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
 
// close connection
mysqli_close($link);
?>