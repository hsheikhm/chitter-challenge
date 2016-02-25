(function(){

  function characterCount(e) {
    var textEntered, charDisplay, counter;

    textEntered = document.getElementById('peep-text').value;
    charDisplay = document.getElementById('count');
    counter = (140 - (textEntered.length));
    charDisplay.textContent = counter;
  }

  var elText = document.getElementById('peep-text');
  elText.addEventListener('keyup', function(e) {
    characterCount(e);
  }, false);

  $('#peep-text').focus();
  $('#new-peep-button').attr('disabled', true);

  $('#peep-text').on('input', function() {
    var $button = $('#new-peep-button');
    if($(this).val().length > 0){
      $button.attr('disabled', false);
    } else {
      $button.attr('disabled', true);
    }
  });

  $('#peep-text').on('keypress', function(e) {
    if(e.which === 13){
      e.preventDefault();
    }
  });

}());
