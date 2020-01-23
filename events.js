/** 
 * dom event triggers the function formsubmit function
 * on submit of the form
 * 
*/
$('#form').on('submit', registrationformaction.formsubmit);
$('#userdetails').on('submit', registrationformaction.fetchdetails);


/**
  * This is a function used to change the background on changing the color
  *
  * @param {} -no arguments
  * picks the color and set it to background-color
  *
*/
 $("#colorpick").change(registrationformaction.backgroundColor);