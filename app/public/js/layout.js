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
    $('.container-fluid').css('height', '0px');
    $(this).after($showUserPeepsCount.hide().fadeIn());
  });

  $('#currentUser').on('mouseout', function() {
    $('#user-peeps-info').animate({
      opacity: 0.0,
      marginRight: '-=80'
    }, 700, function() {
      $(this).remove();
    });
  });

  $('#peeps-header').hide().fadeIn();

  var $li = $('li');
  $li.hide().each(function(index) {
    $(this).delay(200 * index).fadeIn();
  });

  $('li.peep-single').on('mouseover', function() {
    $(this).css('background-color', '#FEF1E9');
  });

  $('li.peep-single').on('mouseout', function() {
    $(this).css('background-color', '#FFFAFA');
  });

  $('.glyphicon-trash').on('click', function() {
    var $li = $(this).parents('li');
    $li.slideUp(600, function() {
      $li.remove();
      updatePeepsCount();
    });
  });

  $('#hide-peeps-button').on('click', function() {
    var $showPeepsButton = $('<button type="submit" id="show-button" class="btn btn-danger btn-lg">Show Peeps!</button>');
    $('ul#peeps').fadeOut();
    $('#peeps-container').animate({
      height: '-=256'
    }, 700, function() {
      $('#peeps').before($showPeepsButton.hide().fadeIn());
      $('#hide-peeps-button').fadeOut();
    });
  });

  $(document).on('click', '#show-button', function() {
    $(this).fadeToggle();
    $('#peeps-container').animate({
      height: '+=256'
    }, 700, function() {
      $('ul#peeps').fadeToggle(function() {
        $('#hide-peeps-button').fadeToggle();
      });
    });
  });

}());
