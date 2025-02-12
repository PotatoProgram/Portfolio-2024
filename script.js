function saveInputs() {
  event.preventDefault();
  var answers = {
    //name input (inconsistency due to "name"'s reserved status)
    nameResponse: document.forms["message-send"]["name"],
    //email input
    email: document.forms["message-send"]["email"],
    //age input
    age: document.forms["message-send"]["age"],
    //message input
    message: document.forms["message-send"]["message"],
  };
  //set localstorage item to new inputs
  localStorage.setItem("loginDetails", JSON.stringify(answers));
  
}
