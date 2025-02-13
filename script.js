//If localStorage has already been set on page load, use it to replace the "guestProtocol" and "Welcome..." lines
//otherwise, do nothing
if (localStorage.loginDetails) {
    var loginDetails = JSON.parse(localStorage.loginDetails);
    var welcome = document.getElementById("welcome");
    var entry = document.getElementById("entry");
    welcome.innerHTML = "Welcome back, " + loginDetails.nameResponse + ", to the Repository";
    entry.innerHTML = "C:\\terminal\\" + loginDetails.email + "\\>";
}



function saveInputs() {
  //allegedly, event is deprecated
  //it still works though, and I'm too lazy to find what the alternative is
    event.preventDefault();
  var answers = {
    //name input (inconsistency due to "name"'s reserved status)
    nameResponse: document.forms["message-send"]["name"].value,
    //email input
    email: document.forms["message-send"]["email"].value,
    //age input
    age: document.forms["message-send"]["age"].value,
    //message input
    message: document.forms["message-send"]["message"].value,
  };
  //set localstorage item to new inputs
  localStorage.setItem("loginDetails", JSON.stringify(answers));

  document.body.append("Login saved with message: " + answers.message);
}