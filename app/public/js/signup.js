(function(){

  function checkUsername() {
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
  elUsername.onblur = checkUsername;

}());
