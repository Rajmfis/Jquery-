<!DOCTYPE html>
<html>
<head>
	<title>Coupon Website</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link href="https://fonts.googleapis.com/css?family=Fjalla+One&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Anton&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Alata&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Courgette&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="css/registrationformstyling.css">
	<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
</head>

<body>
<nav class="navbar navbar-expand-lg navbar-light " style="background-color: #68a5d1;">
	 <a class="navbar-brand" href="#" style="font-family: 'Courgette', cursive;
	 ;font-size: xx-large;color:white">Grab Coupon</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarText">
			<ul class="navbar-nav ml-auto">
				<li class="nav-item"> <a class="nav-link" href="#"><span style="color:whitesmoke;font-size: x-large;">Home</span></a>
				</li>
				<li class="nav-item needmargin"> <a class="nav-link" href="#"><span style="color:whitesmoke;font-size:x-large;">Subscription</span></a>
				<li class="nav-item"> <a class="nav-link"  data-toggle="modal" data-target="#exampleModal" href="#"><span style="color:whitesmoke;font-size: x-large;">Login</span></a>
<!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Enter your id and password</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
			 <form method="post" id="userdetails">
				<label>ID: <input type="text" class="form-control" name="userid" required></label>
				<label>Password: <input type="password" class="form-control" name="pwd" required></label>
				<input type="submit" class="btn btn-primary" >
       </form>
			 <p class="invalidId" style="color:red;"></p>
      </div>
    </div>
  </div>
</div>
				</li>				
				</li>
			</ul>
		</div>
	</nav>
	
 <div class="ordering">
	<div class="card-group row">
		<div class="card details  col-md" id="first-card" style="background-image: url('assets/images/logo4.webp'); background-position:center bottom;border-color: #05ffb0;">
			<nav>
				<div class="nav nav-tabs" id="nav-tab" role="tablist">
					<a class="nav-item nav-link active" style="color:rgb(88, 199, 143);" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true"><p style="font-family: 'Anton', sans-serif;	font-size:xx-large; color:rgba(230, 226, 17, 0.993);text-align: center;">About us</p></a>
					<a class="nav-item nav-link btn-seconday" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false"><p style="font-family: 'Anton', sans-serif; font-size:xx-large; color:rgba(230, 226, 17, 0.993);text-align: center;">Total Coupon Sold</p></a>
				</div>
			</nav><br>
			<div class="tab-content" id="nav-tabContent">
				<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><p  style="font-family: 'Montserrat', sans-serif;
					font-size:larger;color:mintcream;">Grab Coupon is a service that can save you money through the use of virtual coupons. Much like a physical coupon book, you can use Groupon to get deals of up to 80 percent off of all sorts of things, from food and retail products to travel and services. You can use Groupon on a computer and from a phone or tablet.</p></div>
				<div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
				<div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"><p  style="font-family: 'Montserrat', sans-serif;
					font-size:larger;color:mintcream;">As of now we have sold coupons worth 284 crores USD. From January 2010 through January 2011, Groupon's U.S. monthly revenues grew from $11 million to $89 million. Consolidated revenue for the full year 2014 reached nearly $3.2 billion. Groupon's consolidated gross billings for the full year 2014 increased 32% year-over-year to $7.6 billion. </p></div>
			</div>
		</div>
		
		<div class="card col-md" id="second-card" style="border-color: #05ffb0;">
			<!-- <img  class="card-img-top" alt="Photo"> -->
			<div class="card-body" >
				<!-- <div class="form-content">  -->
				<form action="userpage.php" method="post" id="form" name="myform">
					<div class="form-row">
						<div class="form-group col-lg-12"> <span class="text-center"> 
							<h4 class="card-title">Subscribe and Never Miss any Coupon</h4>
							<p class="card-text">It's free and only takes a minute</p>
						</span>
						</div>
					</div>
					<div class="form-row">
						<div class="form-group col-lg-12">
							<div id="first-name">
								<label for="first-name" class="required font-weight-bold">First Name</label>
								<br>
								<input type="text" class="form-control" name="firstName" id="firstname" size="40"><span id="fnamemessage"></span>
								<div id="firstName" class="remove"></div>
							</div>
						</div>
					</div>
					<div class="form-row">
						<div class="form-group col-lg-12">
							<div id="last-name">
								<label for="last-name" class="font-weight-bold">Last Name</label>
								<br>
								<input type="text" class="form-control" name="lastName" id="lastname" size="40"> <span id="lnamemessage"></span>
								<div id="lastName" class="remove"></div>
							</div>
						</div>
					</div>
					<div class="form-row">
						<div class="form-group col-lg-12">
							<div id="email">
								<label for="email" class="required font-weight-bold">Email</label>
								<br>
								<input type="text" class="form-control" name="email" id="emailId" size="40"> <span id="emailmessage"></span>
								<div id="Email" class="remove"></div>
							</div>
						</div>
					</div>
					<div class="form-row row">
						<div class="form-group col-sm-12">
							<div id="contact">
								<label for="contact" class="required font-weight-bold">Contact No.</label>
								<br>
								<input type="text" class="form-control" name="contact" id="contactno" size="40"> <span id="contactmessage"></span>
								<div id="Contact" class="remove"></div>
							</div>
						</div>
					</div>
					<div class="form-row">
						<div class="form-group col-lg-12">
							<div id="password">
								<label for="password" class="required font-weight-bold">Password</label>
								<br>
								<input type="password" class="form-control" name="password" id="pwd" size="40">
								<!-- onkeyup="validatePassword(this)" --> <span id="passwordmessage"></span>
								<div id="Password" class="remove"></div>
							</div>
						</div>
					</div>
					<!-- <br> -->
					<label class="font-weight-bold">Region</label>
					<select class="custom-select" name="region" class="dropdown" id="dropdown" onchange="dropdownfunction()">
						<option value="" name="Select">Select</option>
						<option>India</option>
						<option>Australia</option>
						<option>Canada</option>
					</select> <span id="output">
											<!-- resultant tobeadded here -->
									 </span>
					<span id="output2">
											<!-- resultant tobeadded here -->
									 </span>
					<label id="dropdownmessage"></label>
					<br>
					<!-- <br> -->
					<input type="submit" value="Submit" class="btn btn-primary" id="submit">
					<!-- <input type="button" value="LoadDefaultUserData" class="btn btn-primary" onclick="loadDefaultUserData()"> -->
					<!-- <input type="reset" name=""> -->
					<div class="text-center">
						<br>
						<p class="bottom-text">By clicking the Sign Up button, you agree to our <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
						</p>
					</div>
					<h4 id="usercreate" class="text-center" style="font-family: monospace;">Please create new user</h4>	
			</form>
			
			<div class="text-center">
				<footer>
					<p>Already have an account? <a href="#">Login Here</a>
					</p>
					<p class="colorpicker">Pick Your color:
						<input type="color" id="colorpick" name="colorpicker">
						<input type="submit" class="submitbtn" name="" value="Refresh" onclick="reloadPage();">
					</p>
				</footer>
			</div>
			</div>
		</div>
	<div class="card col-md" id="third-card" style="background-image: url('assets/images/gmail.jpg');   background-size: cover;
	background-repeat: no-repeat; color: rgba(236, 86, 169, 0.993);padding-top: 200px;border-color: #05ffb0;">
		<div class="card-body text-center">
		 <form id="subscription-mail">	
			<h5 class="card-title " style="font-size: 35px;">Want to get notified for the updates</h5>
			<p class="card-text" style="font-size: 25px;">Subscribe to our newsletter</p>
			<input type="text" name="email" id="subsmail" placeholder="example@gmail.com" class="form-control"><br>
			<!-- <button type="submit" onclick="emailSubscribe();" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Get 2 free coupons now">
				Submit
			</button> -->
			<!-- data-toggle="tooltip" data-placement="top" title="Get 2 free coupons now" -->
			<input type="submit" class="btn btn-primary" >
		 </form>
		</div>
	</div>
</div>
</div>
<div class="card-group" > 
 <div class="card">
  <div class="card-body" style="background-color:#68a5d1;text-align: center;">
    <h5 class="card-title" style="font-size: xx-large;">Follow us on</h5>
    <p class="card-text">
			<a href="#" style="font-size: xx-large;padding-right: 30px;color: white;"><i data-toggle="tooltip" data-placement="top" title="GooglePlus" class="fab fa-google-plus-g"></i></a>
			<a href="#" style="font-size: xx-large;padding-right: 30px;color: white;"><i data-toggle="tooltip" data-placement="top" title="Facebook" class="fab fa-facebook-square"></i></a>
			<a href="#" style="font-size: xx-large;padding-right: 30px;color: white;"><i data-toggle="tooltip" data-placement="top" title="Instagram" class="fab fa-instagram"></i></a>
			<a href="#" style="font-size: xx-large;color: white;"><i data-toggle="tooltip" data-placement="top" title="LinkedIn" class="fab fa-linkedin"></i></a>
		</p>
		<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
			<ol class="carousel-indicators">
				<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			</ol>
			<h6 class="card-title" style="font-size: xx-large;">And get exciting Deals like below</h6>
			<div class="carousel-inner">
				<div class="carousel-item active " >
					<img src="assets/images/deal4.jpg" height="400px" class="" alt="Previous Deals">
				</div>
				<div class="carousel-item">
					<img src="assets/images/deal2.jpg" height="400px" class="" alt="Previous Deals">
				</div>
				<div class="carousel-item">
					<img src="assets/images/deal3.jpg" height="400px" class="" alt="Previous Deals">
				</div>
			</div>
			<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
		</div>
	 </div>
  </div>
</div>
<div style="font-family: 'Fjalla One', sans-serif;
">
<div class="card-group " >
<div class="card container" style="background-color:#ccffff;border-color: #05ffb0;">
	 <div class="card-body">
	 <form>
	 <p><u style="font-size:x-large;">Contact Us</u></p><br>
  <div class="form-row">
		
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
	 </div>
 </div>

 <div class="card" style="background-color:#e0ebeb;">
	 <div class="card-body " style="border-color: #05ffb0;">
		<h4>We are located at</h4>
      <p class="card-text">
			SCO No. 364-65-66, 3rd Floor, Sec - 34A, Chandigarh, Sector 34A, Chandigarh, 160022, PQF9H8 Sector 34, Chandigarh
		</p>
		<div class="embed-responsive embed-responsive-16by9">
			<iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.8049409986284!2d76.7661648146105!3d30.723883593111207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedadf8b3ec0f%3A0xdc97839385d14a05!2sGroupon%20India!5e0!3m2!1sen!2sin!4v1579506180755!5m2!1sen!2sin" width="100" height="100" frameborder="0"  style="border:0;" allowfullscreen=""></iframe>
		</div>		
	 </div>
 </div>
 
 </div>
 </div>

<div class="card-group" style="border-color: #68a5d1;"> 
 <div class="card ">
	<div class="card-body" style="background-color: #68a5d1;">
   <!-- <div class="card-footer"> -->
	  <h4 style="text-align: center;padding-top: 10px;color: white;">We would love to hear feedback on : <a href="#"><u>feedback@grabcoupon.com</u></a></h4>
	  <p style="font-family: 'Alata', sans-serif;
	   font-size: large;text-align: center;color: white;
		 ">Copyright @2020: <a href="#">GrabCoupon.com</a>
		</p>
	 <!-- </div> -->
	</div>
 </div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.1/dist/jquery.validate.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
	<script src="js/windowFunctions.js"></script>
	<script src="js/variableObject.js"></script>
	<script src="js/selectorsAndRegex.js"></script>
	<script src="js/updateAndDelete.js"></script>
	<script src="createTableData.js"></script>
	<script src="js/regiondropdown.js"></script>
	<script src="js/registrationFormValidation.js"></script>
	<script src="events.js"></script>
</body>

</html>