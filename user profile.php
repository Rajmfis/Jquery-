<?php session_start();
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
include "dbutil.php";

if(!isset($_SERVER['HTTP_REFERER'])){
  // redirect them to your desired location
  header('location:register.php');
  exit;
}

// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

// Attempt select query execution
if($_SESSION["searchid"]){
  $sql="SELECT * FROM USERS where ID = '" . $_SESSION['searchid'] . "'";
}else{
 $sql="SELECT * FROM USERS where FIRST_NAME = '" . $_SESSION['username'] . "'";
}
if($result = mysqli_query($link, $sql)){
    if(mysqli_num_rows($result) ==1){
      while($row = mysqli_fetch_array($result)){
        $fname=$row['FIRST_NAME'];
        $lname=$row['LAST_NAME'];
        $useremail=$row['EMAIL_ID'];
        $usercontact=$row['CONTACT_NO'];
        $id=$row['ID'];
      }
    }else{
      header("Location: failure.php");  
    }
}

mysqli_close($link);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Titillium+Web&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/profileStyling.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title><?php echo $fname ;?>'s Profile</title>
</head>
<body>
 <nav class="navbar navbar-expand-lg navbar-light " style="background-color: #68a5d1;">
	 <a class="navbar-brand" href="#" style="font-family: 'Courgette', cursive;
	 ;font-size: xx-large;">Grab Coupon</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarText">
			<ul class="navbar-nav ml-auto">
				<li class="nav-item"> <a class="nav-link" href="#"><span style="color:whitesmoke;font-size: x-large;">Home</span></a>
				</li>
				<li class="nav-item needmargin"> <a class="nav-link" href="#"><span style="color:whitesmoke;font-size:x-large;">Subscription</span></a>
                </li>
				<li class="nav-item needmargin"> 
        <!-- onclick="sessionDestroy.php" -->
        <!-- <form action="sessionDestroy.php"> -->
          <a class="nav-link" href="sessionDestroy.php">
            <span style="color:whitesmoke;font-size:x-large;">Logout</span></a>
        <!-- </form> -->
        </li>
			</ul>
    </div>
 </nav>
 <div class="row profile-info">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Welcome <?php echo $fname ?> </h5>
        <p class="card-text">You are subscribed for our Services</p>
        <a href="#" class="btn btn-primary">Explore more about new Services</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Profile Details: </h5>
        <p class="card-text">Name: <?php echo $fname;?> <?php echo $lname;?></p>
        <p class="card-text">Email: <?php echo $useremail;?></p>
        <p class="card-text">Contact Details: <?php echo $usercontact;?></p>
        <p class="card-text">Id: <?php echo $id;?></p>
        <a href="#" class="btn btn-primary">Change Password</a>
      </div>
    </div>
  </div>
 </div>
</body>
</html>