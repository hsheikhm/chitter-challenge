(function(){

  function updatePeepsCount() {

    var numberOfPeeps, peepCounter;

    peepCounter = document.getElementById('peeps-counter');
    numberOfPeeps = elPeeps.getElementsByTagName('li').length;
    peepCounter.textContent = "(" + numberOfPeeps + ")";
  }

  window.addEventListener('load', updatePeepsCount, false);
  var elPeeps = document.getElementById('peeps');

  $('#currentUser').on('mouseover', function() {
    var peepsMadeCount = $('a.trash-icon').length;
    var $showUserPeepsCount = $("<p id='user-peeps-info'>You've made " + peepsMadeCount + ' peeps<p>');
    $(this).after($showUserPeepsCount);
  });

  $('#currentUser').on('mouseout', function() {
    $('#user-peeps-info').remove();
  });

  $('#peeps-header').hide().fadeIn();
  var $li = $('li');
  $li.hide().each(function(index) {
    $(this).delay(200 * index).fadeIn();
  });

  $('.glyphicon-trash').on('click', function() {
    var $li = $(this).parents('li');
    $li.slideUp(600, function() {
      $li.remove();
      updatePeepsCount();
    });
  });

}());
