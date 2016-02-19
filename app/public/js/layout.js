(function(){

  function updatePeepsCount() {

    var numberOfPeeps, peepCounter;

    peepCounter = document.getElementById('peeps-counter');
    numberOfPeeps = elPeeps.getElementsByTagName('li').length;
    peepCounter.textContent = "(" + numberOfPeeps + ")";
  }

  function deletePeep(e) {

    var target, elPeep, elPeepList;
    target = e.target;

    if(target.nodeName.toLowerCase() === 'span'){
      elPeep = target.parentNode.parentNode.parentNode;
      elPeepList = elPeep.parentNode;
      elPeepList.removeChild(elPeep);
      updatePeepsCount();
    }
  }

  window.addEventListener('load', updatePeepsCount, false);

  var elPeeps = document.getElementById('peeps');
  elPeeps.addEventListener('click', function(e){
    deletePeep(e);
  }, false);

}());
