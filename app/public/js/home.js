(function(){

  function characterCount() {
    var textEntered, charDisplay, counter;
    textEntered = document.getElementById('peep-text').value;
    charDisplay = document.getElementById('count');
    counter = (140 - (textEntered.length));
    charDisplay.textContent = counter;
  }

  var elText = document.getElementById('peep-text');
  elText.addEventListener('keyup', characterCount, false);

}());
