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
    var $showUserPeepsCount = $("<p id='user-peeps-info'>You've posted " + peepsMadeCount + ' peeps<p>');
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
      height: '-=247'
    }, 700, function() {
      $('#peeps').before($showPeepsButton.hide().fadeIn());
      $('#hide-peeps-button').fadeOut();
    });
  });

  $(document).on('click', '#show-button', function() {
    $(this).fadeToggle();
    $('#peeps-container').animate({
      height: '+=247'
    }, 700, function() {
      $('ul#peeps').fadeToggle(function() {
        $('#hide-peeps-button').fadeToggle();
      });
    });
  });

  $('#search-text').on('keyup', function() {
    var input = $(this).val();
    $('li.peep-single').each(function() {
      var $this = $(this);
      if($this.text().search(input) > -1){
        $this.show();
      } else {
        $this.hide();
      }
    });
  });

  $('li.peep-single').on('click', function(e) {
    if(e.target.nodeName === 'SPAN'){ return; }
    var $backToAllPeepsButton = $('<div class="back-to-peeps-button"><button type="submit" class="btn btn-danger btn-lg">Back to Peeps</button></div>');
    var $clonedPeep = $(this).clone();
    $clonedPeep.attr('class', 'cloned-peep');
    $clonedPeep.children().children('a').remove();
    $('#peeps-container').fadeOut(500);
    $('.new-peep').fadeOut(500, function() {
      $('#peeps-container').before($clonedPeep.hide().fadeIn(400, function() {
        $(this).after($backToAllPeepsButton.hide().fadeIn(300));
      }));
    });
  });

  $(document).on('click', '.back-to-peeps-button', function() {
    $(this).fadeToggle(100, function() {
      $(this).remove();
      $('.cloned-peep').animate({
        opacity: 0.0,
        marginTop: '-=120'
      }, 500, function() {
        $(this).remove();
        $('#peeps-container').fadeToggle(800);
        $('.new-peep').fadeToggle(800);
      });
    });
  });

}());
