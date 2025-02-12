function saveInputs() {
    event.preventDefault();
    var answers = (document.getElementById("message-send")).serializeArray;
    console.log(answers);
}