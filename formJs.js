//validate is called on submitting the form
$('document').ready(function(){
	 //the function validates the email fields
	jQuery.validator.addMethod("customEmail", function(value, element) { 
		return this.optional( element ) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value ); 
	}, "Please enter valid email address!");
	jQuery.validator.addMethod("phone", function(value, element) { 
		return this.optional( element ) || /^([0-9]{10,11})+$/.test( value ); 
	}, "Please enter valid phone number!");

	var registerForm=$("#form");
	// if(firstname&&lastname&&password&&inputEmail&&phone){
  	registerForm.validate({
      rules:{
					firstName: {
            required: true,
					},
					lastName: {
						required: true,
					},
          email: {
							required: true,
							customEmail: true
					},
					contact: {
						required: true,
						phone:true
					},
          password: {
              required: true
					},
					region:{
						required: true
					},
      },
      messages:{
				firstName: {
					required: 'Please enter first name!'
				},
				lastName: {
					required: 'Please enter last name!'
				},
        username: {
          required: 'Please enter username!'
        },
        email: {
          required: 'Please enter email!',
          email: 'Please enter valid email!'
      	},
        password: {
          required: 'Please enter password!'
        },
				region:{
					required: "Please select an option from the list",
				},
			}
			});
			$('#form').on('submit',(function () {
				var inputEmail = $("#emailId").val(); //picking the email field value
				var phone = $("#contactno").val();
				var firstname = $("#firstname").val();
				var lastname = $("#lastname").val();
				var password = $("#pwd").val();
		
	// alert(inputEmail+phone+firstname+lastname+password);
	if(inputEmail&&phone&&firstname&&lastname&&password){
		createTable(firstname, lastname, inputEmail, phone);
		resetForm();
		return false;
		}
	}))
	})

 $("#colorpick").change(function() {
	$("body").css("background-color", $("#colorpick").val());
 });
 //resetform is called for clearing the inputfields
 function resetForm() { //the method is called from validate, when all the records are submitted and 
	//put in the table
	inputfname.val("");
	inputlname.val("");
	inputemailid.val("");
	$("#contactno").val("");
	$("#pwd").val("");
	$("#dropdown").val("");
	$("#states").remove();
	$("#cityname").remove();
 
	$("#fnamemessage").text("");
	$("#lnamemessage").text("");
	$("#emailmessage").text("");
	$("#contactmessage").text("");
 }
 //called from validate method for creating the table
 function createTable(firstname, lastname, inputEmail, phone) {
	//it is used to create table row and columns everytime when the user submits the details in the form
	var mytable = $("table");
	oldId = id;
	//the block checks if there is any row to delete
	if (bool === true && todelete !== undefined) {
	 $("table tr:eq(" + todelete + ")").remove();
	 bool = false;
	 todelete = undefined;
	 id = delId;
	}
	
	var row = "<tr id=\"data\"><td>" + (id) + "</td><td>" +
	 firstname + "</td><td>" + lastname + "</td><td>" + inputEmail + "</td><td>" + phone + "</td><td>" + "<button onclick=\"deleteUser(this);\">&#10005</button><button onclick=\"editUser(this);\">Edit</button>" + "</td><td>" + city + "</td></tr>";
	mytable.append(row); //append method is used with jquery for table
	$("#submit").val("Submit");
	$("#usercreate").text("");
	id = oldId + 1;
	
 }
 //called when the user clicks the delete button, it deletes the user from the table
 function deleteUser(element) {
	//dialogbox asks whether the user wants to continue or not
	var val = confirm("Are you sure you want to delete the user ?");
	if (val === true) {
	 alert("deleting the user" + element.parentNode.parentNode.rowIndex);
	 $("table tr:eq(" + element.parentNode.parentNode.rowIndex + ")").remove();
	 // id--;
	 if (id === 1) {
		$("#usercreate").text("Please create new users");
	 }
	} else {
	 alert("User not deleted");
	}
 }
 //editUser accepts the current object passed as this which will be used 
 //to track current user
 function editUser(user) {
	// debugger;
	if ($("#firstname").val()!== "" && $("#lastname").val() !== "") {
	 var clear = confirm("Your entered will be cleared. Do you want to continue");
	 if (clear === false) { //scenario when form is dirty, so if it doesn"t want to override values we simply return
		return;
	 }
	 if (clear == true) { //if user wants to override and edit the values then there must be dropdowns so we remove it
		//reason to put here  as if the below code is put in the code then there will be a problem for select tag as select
		//tags and options are not yet created for the user and hence it wouldn"t work. 
		$("#dropdown").val("");
		$("#states").remove();
		$("#cityname").remove();
	 }
	}
	todelete = $(user).parents("tr")[0].rowIndex;
	delId = $(user).parents("tr")[0].cells[0].innerText;
	var col2 = $(user).parents("tr")[0].cells[1].innerText; // get current row 2nd  cell TD value
	// console.log(col2);
	var col3 = $(user).parents("tr")[0].cells[2].innerText; // get current row 3rd  cell  TD value
	var col4 = $(user).parents("tr")[0].cells[3].innerText; // get current row 4th  cell TD value
	var col5 = $(user).parents("tr")[0].cells[4].innerText; // get current row 5th  cell TD value

	$("#submit").val("Edit");
	inputfname.val(col2);
	inputlname.val(col3);
	inputemailid.val(col4);
	$("#contactno").val(col5);
	$("#pwd").val("**********");
	$("#dropdown").val("");
	// todelete = user.parentNode.parentNode.rowIndex;
	bool = true;
	scrollToTop();
 }
 
 function scrollToTop() {
	window.scrollTo(0, 0);
 }
 
 function editHtmlTbleSelectedRow(rIndex, id) {
	$("#table").deleteRow(rIndex);
 }
 
 //all the below functions are used to validate each and every fields
 function validateFirstName(element) { //it validates the firstname by length
 
	var fnameSelector = $("#fnamemessage");
	if (element.value === "" && element.value.length <= 2) {
	 inputfname.css("background-color", "red");
	 fnameSelector.text("Not a valid first name");
	} else {
	 fnameSelector.text("Valid name");
	 inputfname.css("background-color", "skyblue");
	}
 }
 
 function validateLastName(element) { //it validates the firstname by length
	var lnameSelector = $("#lnamemessage");
	if (element.value === "" && element.value.length <= 2) {
	 inputlname.css("background-color", "red");
	 lnameSelector.text("Not a valid last name");
	} else {
	 lnameSelector.text("Valid lastname");
	 inputlname.css("background-color", "skyblue");
	}
 }
 //validates the email field
 function validateEmail(element) { ////it validates the firstname by the regex 
	var checkEmail = regexEmailPattern.test(element.value);
	var emailSelector = $("#emailmessage");
	if (!checkEmail) { //in case its invalid then background becomes red and message shown as not a validemailid
	 inputemailid.css("background-color", "red");
	 emailSelector.text("Not a valid EmailId");
	} else {
	 emailSelector.text("Valid Email");
	 inputemailid.css("background-color", "skyblue");
	}
 }
 //validates the phone number
 function validateContact(element) { //validates the phone number by length
	var value = regexPhonePattern.test(element.value);
	var contactSelector = $("#contactmessage");
	if (!value) {
	 inputcontactno.css("background-color", "red");
	 contactSelector.text("Not a valid Phone number");
	} else {
	 contactSelector.text("Valid number");
	 inputcontactno.css("background-color", "skyblue");
	}
 }
 
 //dropdown is shown based on the selection
 function dropdownfunction() {
	var country = $('#dropdown');
	
	//first country is selected based on country the states are shown and based on states cities will be shown by calling the thirddropdown() method
	if (country.val() === 'India') {
		var array = ["Maharashtra", "Delhi"];
	} else if (country.val() === 'Australia') {
		var array = ["South Australia", "Victoria"];
	} else if (country.val() === 'Canada') {
		var array = ["Alberta", "Columbia"];
	}
	var concatString = "<option value=\"\">Select</option>";
	for (var i = 0; i < array.length; i++) {
		concatString += "<option>" + array[i] + "</option>";
	}
	concatString = "<select required=\"required\" id=\"states\" onchange=\"thirdDropdown(this)\">" + concatString + "</select>";
	$('#output').html( concatString);
}

 function thirdDropdown(element) {
	var cities = [];
	if (element.value === "Maharashtra") {
	 cities = ["pawai", "thane"];
	} else if (element.value === "Delhi") {
	 cities = ["Noida", "South-Delhi"];
	} else if (element.value === "South Australia") {
	 cities = ["Dunstan", "Mitchell"];
	} else if (element.value === "Victoria") {
	 cities = ["Altona", "Euroa"];
	} else if (element.value === "Alberta") {
	 cities = ["Acadia", "Bighorn"];
	} else if (element.value === "Columbia") {
	 cities = ["Washington"];
	}
	var concatString = "<option value=\"\">Select</option>";
	for (var i = 0; i < cities.length; i++) {
	 concatString += "<option>" + cities[i] + "</option>";
	}
	concatString = "<select required=\"required\" id=\"cityname\" onchange=\"cityvalue(this)\">" + concatString + "</select>";
	$("#output2").html(concatString);
 }
 
 function cityvalue(element) {
	city = element.value;
 }
 
 function loadDefaultUserData() {
 
	const xhr = new XMLHttpRequest();
 
	xhr.open("GET", "users.json", true);
 
	xhr.onload = function() {
	 if (this.status === 200) {
		// console.log(this.responseText);
		const userDetails = JSON.parse(this.responseText);
		var randomUserIndex = Math.floor(Math.random() * 3);
		// alert(userDetails[randomUserIndex].FirstName);
		//passing the values we got from the json and
		//storing into the html table instead of putting into the form
		city = userDetails[randomUserIndex].City;
		createTable(userDetails[randomUserIndex].FirstName,
		 userDetails[randomUserIndex].LastName,
		 userDetails[randomUserIndex].Email, userDetails[randomUserIndex].ContactNo,
		 userDetails[randomUserIndex].Pwd);
		//can"t keep dropdown values explitcitly
		//as on selection of one other generates so can"t be kept
		//as first only is not there
	 }
	}
	xhr.send();
 }

 function reloadPage() {
	window.location.reload();
 }