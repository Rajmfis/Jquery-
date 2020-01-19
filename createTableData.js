
 
 var registrationformaction = (function() {
  /**
   * The method is called on submitting the form. 
   * It captures the inputs @emailId @contactno @firstname @lastname @password
   * there is a method called to store all the inputs in a table "createTable()"
   * "resetForm()" is called to clear all the input fields 
   */
  function submitAction() {
   var inputEmail = $("#emailId").val(); //picking the email field value
   var phone = $("#contactno").val();
   var firstname = $("#firstname").val();
   username = firstname;
   var lastname = $("#lastname").val();
   var password = $("#pwd").val();
 
   // alert(inputEmail+phone+firstname+lastname+password);
   if (inputEmail && phone && firstname && lastname && password) {
    createTable(firstname, lastname, inputEmail, phone);
    resetForm();
    return false;
   }
  }
 
  function changeBackgroundColor() {
   $("body").css("background-color", $("#colorpick").val());
  } 
  /**
  * This is a function resetform() is called for clearing all the inputfields
  * @example
  * resetForm()
  */
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
 
  //  $("#fnamemessage").text("");
  //  $("#lnamemessage").text("");
  //  $("#emailmessage").text("");
  //  $("#contactmessage").text("");
  }
 
  /**
   * This is called on submitting the form for creating the table
   *
   * @param {string} firstname - A string param
   * @param {string} lastname - A string param
   * @param {string} inputEmail - A string param
   * @param {string} phone - A string param
   * 
   * @return void
   *
   * @example
   *     createTable('raj','yadav','raj@gmail.com','70894048393')
   */
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
 
   var row = "<tr id=\"data\"><td>" + id + "</td><td>" +
    firstname + "</td><td>" + lastname + "</td><td>" + inputEmail + "</td><td>" + phone + "</td><td>" + city + "</td><td>" + "<button onclick=\"deleteUser(this);\">&#9747;</button> <button onclick=\"editUser(this);\">&#9745;</button>" + "</td></tr>";
   mytable.append(row); //append method is used with jquery for table
  //  alert('in the edit function');
   $("#submit").val("Submit");
   $("#usercreate").text("");
   id = oldId + 1;
   map.set(firstname, obj);
  //  console.log(map);
  //  Swal.fire({
  //   position: 'center',
  //   icon: 'success',
  //   title: 'Your data loaded into the table',
  //   showConfirmButton: false,
  //   width: '800px',
  //   timer: 1500
  //  })
   obj = {};
  }

  return {
   formsubmit: submitAction,
   backgroundColor: changeBackgroundColor,
   createrowdata:createTable,
  }
 })();
 