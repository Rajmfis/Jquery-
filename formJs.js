var globalVariable = 1;
var bool;
var city;
var todelete;
var userId=[];
function validate() {
	
	// e.preventDefault();
	if(globalVariable===1){
		$('#usercreate').text('Please create new users');
		// document.getElementById('usercreate').innerText='Please create new users';
	}
	var inputEmail = document.myform.email.value;//picking the email field value   
	var phone = document.myform.contact.value;
	var firstname = document.myform.firstName.value;
	var lastname = document.myform.lastName.value;
	var password = document.myform.password.value;
	// alert(firstname);
	var allValue = true;
	var regexEmailPattern = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10}).([a-z]{2,10}?)$/;
	var regexPhonePattern = /^([0-9]{10,11})$/;
	var checkEmail = regexEmailPattern.test(inputEmail);
	var checkPhone = regexPhonePattern.test(phone);

	if (firstname === "") {
		// alert("hi js tested");
		$('#firstName').html('Please fill the firstName field');
		$('#firstName').css('color', 'red');
		allValue = false;
	}
	if (lastname === "") {
		$('#lastName').html('Please fill the lastName field');
		$('#lastName').css('color','red');
		allValue = false;
	}
	if (inputEmail === "") {
		$('#Email').html('Please fill the inputEmail field');
		$('#Email').css('color','red');
		allValue = false;
	}
	if (phone === "") {
		$('#Contact').html('Please fill the phone field');
		$('#Contact').css('color','red');
		allValue = false;
	}
	if (password === "") {
		$('#Password').html('Please fill the password field');
		$('#Password').css('color','red');
		allValue = false;
	}
	if (allValue === false) {
		return false;
	}
	if (checkPhone && allValue) {
		if (checkEmail) {
			$('#Password').text('');
			$('#Email').text('');
			$('#lastName').text('');
			$('#firstName').text('');
			$('#Contact').text('');
			createTable(firstname, lastname, inputEmail, phone);
			resetForm();
			return false;
		}
	}
	if (checkEmail === false && checkPhone === false) {
		$('#Contact').html('Entered Contact no is wrong');
		$('#Email').html('Entered Email id is wrong ');
		$('#Contact').css('color', 'red');
		$('#Email').css('color', 'red');
		return false;
	} else if (checkEmail === true && checkPhone === false) {
		$('#Contact').html('Entered contact no is wrong');
		$('#Contact').css('color','red');
		return false;
	} else if (checkEmail === false && checkPhone === true) {
		$('#Email').html('Entered email is incorrect');
		$('#Email').css('color', 'red');
		return false;
	}
}

$('#colorpick').change(function () {
	$('body').css('background-color') = $('#colorpick').val();
});

function resetForm() {
	$('#firstname').val('');
	$('#lastname').val('');
	$('#emailId').val('');
	$('#contactno').val('');
	$('#pwd').val('');
	$('#dropdown').val('');
	$('#states').remove();
	$('#cityname').remove();

	$('#fnamemessage').text('');
	$('#lnamemessage').text('');
	$('#emailmessage').text('');
	$('#contactmessage').text('');
}

function createTable(firstname, lastname, inputEmail, phone) {
	
	var mytable = $('table');
	
	if(bool===true && todelete!==undefined){
		var mytable=$('table');
		mytable.deleteRow(todelete);
		bool=false;
		todelete=undefined;
	}
	// alert("in createtable");
	// var row = mytable.insertRow(globalVariable++);
	// var cell1 = row.insertCell(0);
	// var cell2 = row.insertCell(1);
	// var cell3 = row.insertCell(2);
	// var cell4 = row.insertCell(3);
	// var cell5 = row.insertCell(4);
	// var cell6 = row.insertCell(5);
	// var cell7 = row.insertCell(6);
	// cell1.innerHTML = globalVariable - 1;
	// cell2.innerHTML = firstname;
	// cell3.innerHTML = lastname;
	// cell4.innerHTML = inputEmail;
	// cell5.innerHTML = phone;
	// cell6.innerHTML = '<button onclick="deleteUser(this);">&#10005</button> <button onclick="editUser(this);">Edit</button>';
	
	// cell6.setAttribute("onclick", "deleteUser(this);");//setattribute worked here for delete one
	// cell7.innerHTML = '<button>Edit</button>';
	// cell7.setAttribute("onclick", "editUser(this);");
	// cell7.innerText = city;
	var row='<tr id=\'data\'><td>'+(globalVariable)+'</td><td>'+
					firstname+'</td><td>'+lastname+'</td><td>'+inputEmail+'</td><td>'+phone+'</td><td>'+'<button onclick="deleteUser(this);">&#10005</button><button onclick="editUser(this);">Edit</button>'+'</td><td>'+city+'</td></tr>';
	mytable.append(row);
	$('#submit').val('Submit');
	$('#usercreate').text('');
	globalVariable++;
}

function deleteUser(element) {
	var val = confirm("Are you sure you want to delete the user ?");
	if (val === true) {
		// alert('deleting the user'+element.parentNode.rowIndex);
		$('#data').remove();
		// globalVariable--;
		if(globalVariable===1){
			$('#usercreate').text('Please create new users');
		}
	}
	else {
		alert('User not deleted');
	}
}

function editUser(user) {

	if(document.myform.firstName.value!=='' && document.myform.lastName.value!==''){
		var clear=confirm('Your entered will be cleared. Do you want to continue');
		if(clear===false){//scenario when form is dirty, so if it doesn't want to override values we simply return
			// document.getElementById('dropdown').value = "";
			// document.getElementById('states').remove();
			// document.getElementById('cityname').remove();
			return ;
		}
		if(clear==true){//if user wants to override and edit the values then there must be dropdowns so we remove it
			//reason to put here  as if the below code is put in the code then there will be a problem for select tag as select
			//tags and options are not yet created for the user and hence it wouldn't work. 
			$('#dropdown').val('');
			// document.getElementById('states').value = "";
			// document.getElementById('cityname').value = "";
			$('#states').remove();
			$('#cityname').remove();
		}
	}


	var mytable = $('#table');
	var id = mytable.rows[user.parentNode.parentNode.rowIndex].cells[0].text();
	// alert(id);
	// alert(user.parentNode.parentNode.rowIndex);
	globalVariable = id;//retaining the same id of the user and initialized to the first cell
	// alert(globalVariable);
	$('#submit').val('Edit');
	$('#firstname').val(mytable.rows[user.parentNode.parentNode.rowIndex].cells[1].val());
	$('#lastname').val(mytable.rows[user.parentNode.parentNode.rowIndex].cells[2].text());
	$('#emailId').val(mytable.rows[user.parentNode.parentNode.rowIndex].cells[3].text());
	$('#contactno').val(mytable.rows[user.parentNode.parentNode.rowIndex].cells[4].text());
	$('#pwd').val("**********");
	$('#dropdown').val("");
	// document.getElementById('states').value = "";
	// document.getElementById('cityname').value = "";
	// document.getElementById('states').remove();
	// document.getElementById('cityname').remove();
	todelete = user.parentNode.parentNode.rowIndex;
	// alert(todelete);
	// document.getElementById('submit').value="Edit";
	bool=true;
	scrollToTop();
}
function scrollToTop() {
	window.scrollTo(0, 0);
}
function editHtmlTbleSelectedRow(rIndex, id) {
	$('#table').deleteRow(rIndex);
}


function validateFirstName(element) {

	if (element.value === "" && element.value.length <= 2) {
		$('#firstname').css('background-color','red');
		$('#fnamemessage').text('Not a valid first name');
	} else {
		$('#fnamemessage').text('Valid name');
		$('#firstname').css('background-color','skyblue');
	}
}

function validateLastName(element) {
	if (element.value === "" && element.value.length <= 2) {
		$('#lastname').css('background-color','red');
		$('#lnamemessage').text('Not a valid last name');
	} else {
		// document.getElementById('firstname').style.background-color="green";
		$('#lnamemessage').text('Valid lastname');
		$('#lastname').css('background-color', 'skyblue');
	}
}

function validateEmail(element) {
	var regexEmailPattern = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10}).([a-z]{2,10}?)$/;
	var checkEmail = regexEmailPattern.test(element.value);
	if (!checkEmail) {
		$('#emailId').css('background-color','red');
		$('#emailmessage').text('Not a valid EmailId');
	} else {
		$('#emailmessage').text('Valid Email');
		$('#emailId').css('background-color' ,'skyblue');
	}
}

function validateContact(element) {
	var regexPhonePattern = /^([0-9]{10,11})$/;
	var value = regexPhonePattern.test(element.value);
	if (!value) {
		$('#contactno').css('background-color','red');
		$('#contactmessage').text('Not a valid Phone number');
	} else {
		$('#contactmessage').text('Valid number');
		$('#contactno').css('background-color' ,'skyblue');
	}
}

function validatePassword(element) {
	// document.getElementById('firstname').style.background-color="red";
	// if(element.value==="" && element.value.length<=8 &&element.includes){
	// 	document.getElementById('fnamemessage').innerText="Not a valid password";
	// }else{
	// 	// document.getElementById('firstname').style.background-color="green";
	// 	document.getElementById('fnamemessage').innerText="Valid name";
	// 	document.getElementById('firstname').style.background-color="skyblue";
	// }	
}

function dropdownfunction() {
	var country = document.getElementById('dropdown');
	if (country.value === 'India') {
		var array = ["Maharashtra", "Delhi"];
	} else if (country.value === 'Australia') {
		var array = ["South Australia", "Victoria"];
	} else if (country.value === 'Canada') {
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
	if (element.value === 'Maharashtra') {
		var cities = ["pawai", "thane"];
	} else if (element.value === 'Delhi') {
		var cities = ["Noida", "South-Delhi"];
	} else if (element.value === 'South Australia') {
		var cities = ["Dunstan", "Mitchell"];
	} else if (element.value === 'Victoria') {
		var cities = ["Altona", "Euroa"];
	} else if (element.value === 'Alberta') {
		var cities = ["Acadia", "Bighorn"];
	} else if (element.value === 'Columbia') {
		var cities = ["Washington"];
	}
	var concatString = "<option value=\"\">Select</option>";
	for (var i = 0; i < cities.length; i++) {
		concatString += "<option>" + cities[i] + "</option>";
	}
	concatString = "<select required=\"required\" id=\"cityname\" onchange=\"cityvalue(this)\">" + concatString + "</select>";
	$('#output2').html(concatString);
}
function cityvalue(element) {
	// alert(element.value);
	city = element.value;
}

function reloadPage() {
	window.location.reload();
}

