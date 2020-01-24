<?php session_start();
include "dbutil.php";
  $id=$_POST['userid'];
  $password=md5($_POST['pwd']);
  // $id=165;
  // $password=md5('raj');
  $_SESSION["searchid"] = "$id";
  $_SESSION["username"]="";
  $_SESSION["searchpwd"]="$password";
  // header("Location: user profile.php");
  // echo $_SESSION["username"];
  $checkuser="SELECT * FROM users WHERE ID = '".$_SESSION['searchid']."'";
  $sql= "SELECT * FROM users WHERE ID = '".$_SESSION['searchid']."' AND  PWD ='$password'";
  // $sql="SELECT * FROM rere where ID = '" . $_SESSION['searchid'] . "'"; request fails here as query error occurred
//"SELECT * FROM users where ID = '" . $_SESSION['searchid'] . "'";
  $userexist=mysqli_query($link, $checkuser);
  $checkresult=mysqli_num_rows($userexist);

  $result = mysqli_query($link, $sql);
  $numrows = mysqli_num_rows($result);
  // echo $numrows;
  if($numrows>0){
    echo json_encode(array('success' => 1));
  }else if($checkresult===0){
    echo json_encode(array('success' => -1));
  }else{
    echo json_encode(array('success' => 0));
  }
  //1st check-> for 1 response if user exist
  //2nd check-> for -1 response if user is not registered
  //3rd check->if user enters wrong credentials.

?>