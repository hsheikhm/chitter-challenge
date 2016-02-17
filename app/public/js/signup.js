(function(){

  function setupName() {
    var fullNameField;
    fullNameField = document.getElementById('full-name');
    fullNameField.focus();
  }

  function checkUsername(e) {
    var elMsg = document.getElementById('username-feedback');
    if (this.value.indexOf('@') > -1) {
      elMsg.removeAttribute('class');
      elMsg.textContent = "";
    } else {
      elMsg.setAttribute('class', 'feedback-div');
      elMsg.textContent = "Username must have an '@' sign";
    }
  }

  var elUsername = document.getElementById('username');
  elUsername.addEventListener('blur', checkUsername, false);

  window.addEventListener('load', setupName, false);

}());
