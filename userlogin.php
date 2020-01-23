<?php session_start();
  $id=$_POST['userid'];
  
  $_SESSION["searchid"] = "$id";
  $_SESSION["username"]="";
  header("Location: my_profile.php");
  // echo $_SESSION["username"];
  // json_encode(array('success' => 1));
?>