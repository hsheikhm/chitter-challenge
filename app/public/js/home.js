(function(){

  function characterCount(e) {
    var textEntered, charDisplay, counter;

    textEntered = document.getElementById('peep-text').value;
    charDisplay = document.getElementById('count');
    counter = (140 - (textEntered.length));
    charDisplay.textContent = counter;

    wasEnterKeyPressed(e);
  }

  function wasEnterKeyPressed(e) {
    var newPeepForm;

    newPeepForm = document.getElementById('new-peep-form');
    if(e.keyCode === 13){
      newPeepForm.submit();
    }
  }

  var elText = document.getElementById('peep-text');
  elText.addEventListener('keyup', function(e) {
    characterCount(e);
  }, false);

}());
