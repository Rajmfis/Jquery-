
 
 var registrationformaction = (function() {
  /**
   * The method is called on submitting the form. 
   * It captures the inputs @emailId @contactno @firstname @lastname @password
   * there is a method called to store all the inputs in a table "createTable()"
   * "resetForm()" is called to clear all the input fields 
   */
  function submitAction(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    $.ajax({
      type: "POST",
      url: 'userpage.php',
      data: $(this).serialize(),
      success: function(response){
        var jsonData = JSON.parse(response);
        if(jsonData.success === 1){
          location.href = 'user profile.php';
        }else{
          alert("unable to create profile.Please try after sometime");
          location.href ='register.php';
        }
      }
    });
  }

  function fetchname(event){
    event.preventDefault();
    event.stopImmediatePropagation();
      $.ajax({
        type: "POST",
        // contentType: "application/json;charset=utf-8",
        // dataType: "json",
        url: 'logging page.php',
        data: $(this).serialize(),
        success: function(response){
          try {
            var jsonData = JSON.parse(response);
            if (jsonData.success === 1){
              location.href = 'user profile.php';
            }else if(jsonData.success === -1){
              $(".invalidId").text("Seems like you are not registered with us. Kindly register yourself");
            }else{
              $(".invalidId").text("Invalid Credentials");
            }
          }catch (error) {
            alert("Error occurred while parsing json, redirecting to the home page");
            location.href = 'register.php';
          }
        }
        // error: function(ts) { alert('unable to parse') ;}
   });
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
    firstname + "</td><td>" + lastname + "</td><td>" + inputEmail + "</td><td>" + phone + "</td><td>" + city + "</td><td>" + "<button onclick=\"deleteUser(this);\"><i class=\"far fa-trash-alt\"></i></button> <button onclick=\"editUser(this);\"><i class=\"fas fa-edit\"></i></button>" + "</td></tr>";
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
   fetchdetails:fetchname,
  }
 })();
 